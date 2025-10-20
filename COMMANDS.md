# دليل الأوامر السريع | Quick Commands Guide

## 🚀 الأوامر الأساسية | Basic Commands

### تشغيل المشروع | Start Project
```bash
npm start
```
يشغل السيرفر على المنفذ 3000

### التطوير | Development Mode
```bash
npm run dev
```
يشغل السيرفر مع إعادة التشغيل التلقائي

### تثبيت الحزم | Install Dependencies
```bash
npm install
```

---

## 🔧 أوامر Git للنشر | Git Commands for Publishing

### إعداد المشروع لأول مرة | Initial Setup
```bash
# 1. إنشاء Repository في GitHub أولاً، ثم:
git init
git add .
git commit -m "Initial commit: HAM19 Video Downloader"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/video-downloader.git
git push -u origin main
```

### تحديث المشروع | Update Project
```bash
git add .
git commit -m "وصف التحديث"
git push
```

### إنشاء فرع جديد | Create New Branch
```bash
git checkout -b feature/new-feature
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
```

---

## 📦 أوامر npm إضافية | Additional npm Commands

### تحديث الحزم | Update Packages
```bash
npm update
```

### فحص الثغرات الأمنية | Security Audit
```bash
npm audit
npm audit fix
```

### تنظيف المشروع | Clean Project
```bash
rm -rf node_modules
rm -rf downloads
npm install
```

---

## 🌐 النشر على Platforms | Deployment

### Heroku
```bash
# إضافة Procfile أولاً
echo "web: node server.js" > Procfile

heroku login
heroku create ham19-video-downloader
git push heroku main
```

### Vercel
```bash
npm install -g vercel
vercel login
vercel
```

### Railway
```bash
# ببساطة اربط GitHub repo مع Railway
# Railway سيكتشف النوع تلقائياً
```

---

## 💡 نصائح | Tips

- استخدم `.gitignore` لتجنب رفع `node_modules` و `downloads`
- اعمل commit بانتظام مع رسائل واضحة
- استخدم branches للميزات الجديدة
- اختبر التغييرات قبل الـ push

---

Made with ❤️ by **HAM19**
