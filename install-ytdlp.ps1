# سكريبت تثبيت yt-dlp
Write-Host "جاري تحميل yt-dlp..." -ForegroundColor Green

$ytdlpPath = "$env:USERPROFILE\yt-dlp.exe"
$downloadUrl = "https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp.exe"

try {
    Invoke-WebRequest -Uri $downloadUrl -OutFile $ytdlpPath
    Write-Host "تم التحميل بنجاح!" -ForegroundColor Green
    
    # إضافة المسار إلى PATH
    $userPath = [Environment]::GetEnvironmentVariable("Path", "User")
    if ($userPath -notlike "*$env:USERPROFILE*") {
        [Environment]::SetEnvironmentVariable("Path", "$userPath;$env:USERPROFILE", "User")
        Write-Host "تم إضافة yt-dlp إلى PATH" -ForegroundColor Green
    }
    
    Write-Host "`nجرب الآن: yt-dlp --version" -ForegroundColor Yellow
    Write-Host "قد تحتاج إلى إعادة فتح PowerShell" -ForegroundColor Yellow
    
} catch {
    Write-Host "فشل التحميل: $_" -ForegroundColor Red
}
