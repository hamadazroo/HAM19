# بنية المشروع | Project Structure

```
video-downloader/
│
├── 📁 .github/                      # إعدادات GitHub
│   ├── 📁 workflows/
│   │   └── test.yml                # GitHub Actions للاختبار التلقائي
│   ├── 📁 ISSUE_TEMPLATE/
│   │   ├── bug_report.md           # قالب بلاغ المشاكل
│   │   └── feature_request.md      # قالب طلب الميزات
│   ├── pull_request_template.md    # قالب Pull Request
│   └── FUNDING.yml                 # خيارات التمويل
│
├── 📁 public/                       # الملفات العامة (Frontend)
│   ├── index.html                  # الصفحة الرئيسية
│   └── script.js                   # JavaScript للتفاعل
│
├── 📁 downloads/                    # مجلد التحميلات (مؤقت)
│   └── (ملفات محملة - تُحذف تلقائياً)
│
├── 📁 node_modules/                 # حزم Node.js (لا تُرفع)
│   └── (جميع الحزم المثبتة)
│
├── 📄 server.js                     # السيرفر الرئيسي (Backend)
├── 📄 package.json                  # معلومات المشروع والحزم
├── 📄 package-lock.json             # قفل نسخ الحزم
│
├── 📄 .gitignore                    # ملفات يتجاهلها Git
├── 📄 LICENSE                       # رخصة MIT
│
├── 📄 README.md                     # التوثيق الرئيسي
├── 📄 SETUP_GUIDE.md               # دليل التثبيت
├── 📄 GITHUB_SETUP.md              # دليل النشر على GitHub
├── 📄 COMMANDS.md                   # الأوامر السريعة
├── 📄 CONTRIBUTING.md              # دليل المساهمة
├── 📄 SECURITY.md                   # سياسة الأمان
└── 📄 PROJECT_STRUCTURE.md         # هذا الملف
```

---

## 📄 شرح الملفات الرئيسية

### Backend (الخادم)

- **`server.js`** - الملف الرئيسي الذي يشغل السيرفر
  - Express server على المنفذ 3000
  - API endpoints للتحميل
  - يستخدم yt-dlp-wrap للتحميل

### Frontend (الواجهة)

- **`public/index.html`** - الصفحة الرئيسية
  - واجهة عربية حديثة
  - تصميم TailwindCSS
  - متجاوبة مع الجوال

- **`public/script.js`** - التفاعل مع المستخدم
  - إرسال طلبات للـ API
  - معالجة الاستجابات
  - عرض الرسائل

### Configuration (الإعدادات)

- **`package.json`** - معلومات المشروع
  - الاسم والإصدار
  - الحزم المطلوبة
  - أوامر npm

- **`.gitignore`** - ما يتجاهله Git
  - node_modules/
  - downloads/
  - yt-dlp.exe
  - ملفات مؤقتة

### Documentation (التوثيق)

- **`README.md`** - التوثيق الرئيسي (عربي + إنجليزي)
- **`SETUP_GUIDE.md`** - دليل التثبيت المفصل
- **`GITHUB_SETUP.md`** - كيفية رفع المشروع
- **`COMMANDS.md`** - أوامر سريعة ومفيدة
- **`CONTRIBUTING.md`** - كيفية المساهمة
- **`SECURITY.md`** - الإبلاغ عن الثغرات

### GitHub Templates

- **`.github/workflows/test.yml`** - اختبارات تلقائية
- **`.github/ISSUE_TEMPLATE/`** - قوالب Issues
- **`.github/pull_request_template.md`** - قالب PR

---

## 🔍 أحجام الملفات المتوقعة

| الملف | الحجم التقريبي |
|------|----------------|
| server.js | ~5 KB |
| index.html | ~8 KB |
| script.js | ~2 KB |
| package.json | ~1 KB |
| README.md | ~5 KB |
| node_modules/ | ~50 MB |
| yt-dlp.exe | ~18 MB |

---

## 📊 إحصائيات المشروع

- **إجمالي الملفات**: ~25 ملف
- **لغات البرمجة**: JavaScript, HTML
- **Framework**: Express.js
- **UI Framework**: TailwindCSS
- **أداة التحميل**: yt-dlp

---

## 🚀 التدفق البرمجي | Flow

```
المستخدم
  ↓
📱 index.html (الواجهة)
  ↓
📨 script.js (إرسال الطلب)
  ↓
🔌 POST /api/download (API)
  ↓
⚙️ server.js (معالجة)
  ↓
📥 yt-dlp (التحميل)
  ↓
💾 downloads/ (حفظ مؤقت)
  ↓
📤 GET /download/:filename
  ↓
✅ المستخدم (التنزيل)
```

---

Made with ❤️ by **HAM19**
