# دليل رفع المشروع على GitHub 🚀

## خطوات النشر على GitHub

### 1️⃣ إنشاء Repository جديد

1. اذهب إلى https://github.com
2. اضغط على **New Repository** أو **+** في الأعلى
3. املأ المعلومات:
   - **Repository name**: `video-downloader` أو أي اسم تختاره
   - **Description**: `موقع لتحميل الفيديوهات والأغاني من أكثر من 1000 موقع`
   - **Public** أو **Private** حسب رغبتك
   - ✅ **لا تختر** "Add a README" (موجود بالفعل)
   - ✅ **لا تختر** ".gitignore" (موجود بالفعل)
   - ✅ **اختر** "Choose a license" → MIT License
4. اضغط **Create repository**

---

### 2️⃣ ربط المشروع وتحميله

افتح Terminal/PowerShell في مجلد المشروع ونفذ:

```bash
# 1. تهيئة Git (إذا لم يكن مهيأ)
git init

# 2. إضافة جميع الملفات
git add .

# 3. عمل Commit أول
git commit -m "Initial commit: HAM19 Video Downloader v1.0"

# 4. تغيير اسم الفرع إلى main
git branch -M main

# 5. ربط المشروع بـ GitHub
# استبدل YOUR_USERNAME باسم المستخدم الخاص بك
git remote add origin https://github.com/YOUR_USERNAME/video-downloader.git

# 6. رفع المشروع
git push -u origin main
```

---

### 3️⃣ إعداد GitHub Repository

بعد رفع المشروع، قم بـ:

#### إضافة Topics
في صفحة Repository، اضغط على ⚙️ بجانب About واضف:
- `video-downloader`
- `youtube-downloader`
- `yt-dlp`
- `nodejs`
- `express`
- `arabic`
- `تحميل-فيديوهات`

#### تفعيل GitHub Pages (اختياري)
Settings → Pages → Source: None (لأنه backend project)

#### إضافة Social Preview
Settings → General → Social Preview → Upload Image
(يمكنك تصميم صورة 1280x640 للمشروع)

---

### 4️⃣ إضافة Badges

في أعلى README.md، الـ badges موجودة بالفعل! فقط استبدل رابط USERNAME:

```markdown
![GitHub](https://img.shields.io/github/license/YOUR_USERNAME/video-downloader)
![Node.js](https://img.shields.io/badge/Node.js-v14+-green)
![Status](https://img.shields.io/badge/status-active-success)
```

---

### 5️⃣ التحديثات المستقبلية

عند إضافة تغييرات:

```bash
git add .
git commit -m "وصف التحديث"
git push
```

---

### 6️⃣ نصائح مهمة ✨

✅ **افعل:**
- اكتب commit messages واضحة بالعربي أو الإنجليزي
- حدّث README عند إضافة ميزات
- استخدم Issues لتتبع المشاكل
- رد على Pull Requests
- أضف Screenshots في README

❌ **لا تفعل:**
- لا ترفع `node_modules/` (موجود في .gitignore)
- لا ترفع `downloads/` (ملفات مؤقتة)
- لا ترفع `yt-dlp.exe` (يُحمل تلقائياً)
- لا تضع معلومات حساسة (API keys, passwords)

---

### 7️⃣ جعل المشروع مميزاً 🌟

#### أضف صور في README
```markdown
## 📸 Screenshots

![Home Page](screenshots/home.png)
![Download Page](screenshots/download.png)
```

#### أضف Demo
إذا رفعته على Heroku أو Vercel:
```markdown
## 🎯 Live Demo

🔗 [اضغط هنا للتجربة المباشرة](https://your-app.herokuapp.com)
```

#### شجع المستخدمين
```markdown
## ⭐ Star the Project

إذا أعجبك المشروع، لا تنسى تعطيه نجمة ⭐
```

---

## 🎉 تهانينا!

مشروعك الآن على GitHub! شاركه مع الآخرين:

```
https://github.com/YOUR_USERNAME/video-downloader
```

---

## 📱 المشاركة على وسائل التواصل

```
🚀 أطلقت للتو مشروع HAM19 Video Downloader!

موقع لتحميل الفيديوهات والأغاني من أكثر من 1000 موقع بجودة عالية

🔗 https://github.com/YOUR_USERNAME/video-downloader

#nodejs #javascript #youtube #downloader #coding
```

---

Made with ❤️ by **HAM19**
