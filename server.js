const express = require('express');
const YTDlpWrap = require('yt-dlp-wrap').default;
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Create downloads directory if it doesn't exist
const downloadsDir = path.join(__dirname, 'downloads');
if (!fs.existsSync(downloadsDir)) {
    fs.mkdirSync(downloadsDir);
}

// Initialize yt-dlp (will download automatically if not present)
let ytDlp;
const initYtDlp = async () => {
    try {
        const ytDlpPath = path.join(__dirname, 'yt-dlp.exe');
        ytDlp = new YTDlpWrap(ytDlpPath);
        
        // Download yt-dlp if not exists
        if (!fs.existsSync(ytDlpPath)) {
            console.log('Downloading yt-dlp...');
            await YTDlpWrap.downloadFromGithub(ytDlpPath);
            console.log('yt-dlp downloaded successfully!');
        }
    } catch (error) {
        console.error('Error initializing yt-dlp:', error);
    }
};

// Initialize on startup
initYtDlp();

// Get video info
app.post('/api/info', async (req, res) => {
    const { url } = req.body;
    
    if (!url) {
        return res.status(400).json({ error: 'الرجاء إدخال رابط صحيح' });
    }

    try {
        if (!ytDlp) {
            await initYtDlp();
        }
        
        const info = await ytDlp.getVideoInfo(url);
        res.json({
            title: info.title,
            thumbnail: info.thumbnail,
            duration: info.duration,
            uploader: info.uploader
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'فشل في الحصول على معلومات الفيديو. تأكد من الرابط' });
    }
});

// Download video
app.post('/api/download', async (req, res) => {
    const { url, type, quality } = req.body;
    
    if (!url) {
        return res.status(400).json({ error: 'الرجاء إدخال رابط صحيح' });
    }

    try {
        if (!ytDlp) {
            await initYtDlp();
        }
        
        const timestamp = Date.now();
        
        // Create descriptive filename with quality info
        let qualityLabel = '';
        if (type === 'audio') {
            qualityLabel = 'Audio_128kbps';
        } else {
            qualityLabel = quality === 'best' ? 'HD' : 'SD';
        }
        
        const filename = `${timestamp}_${qualityLabel}.${type === 'audio' ? 'mp3' : 'mp4'}`;
        const filePath = path.join(downloadsDir, filename);
        
        let ytDlpOptions = [
            '-o', filePath,
        ];
        
        if (type === 'audio') {
            // Download audio and convert to MP3
            ytDlpOptions.push(
                '-x',
                '--audio-format', 'mp3',
                '--audio-quality', '0'
            );
        } else {
            // Download video with audio
            if (quality === 'best') {
                ytDlpOptions.push('-f', 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best');
            } else {
                ytDlpOptions.push('-f', 'worstvideo[ext=mp4]+worstaudio[ext=m4a]/worst[ext=mp4]/worst');
            }
            ytDlpOptions.push('--merge-output-format', 'mp4');
        }
        
        ytDlpOptions.push(url);
        
        // Execute download
        await ytDlp.execPromise(ytDlpOptions);
        
        // Find the actual downloaded file
        const files = fs.readdirSync(downloadsDir).filter(f => f.startsWith(timestamp.toString()));
        
        if (files.length === 0) {
            return res.status(500).json({ error: 'لم يتم العثور على الملف المحمل' });
        }
        
        const actualFilename = files[0];
        
        res.json({
            success: true,
            filename: actualFilename,
            downloadUrl: `/download/${actualFilename}`
        });

    } catch (error) {
        console.error('Download Error:', error);
        res.status(500).json({ error: 'فشل في تحميل الملف. تأكد من الرابط' });
    }
});

// Serve downloaded files
app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(downloadsDir, filename);

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'الملف غير موجود' });
    }

    res.download(filePath, (err) => {
        if (err) {
            console.error('Error downloading file:', err);
        }
        // Optionally delete file after download
        setTimeout(() => {
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        }, 60000); // Delete after 1 minute
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
