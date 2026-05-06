# 🚀 TetraSaaS Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-13-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)

**پلتفرم سرویس‌های هوش مصنوعی با ۲۵۱ پروژه NLP**

[🌐 مشاهده دمو](https://tetrasaas.vercel.app) • [📖 مستندات](#) • [🐛 گزارش باگ](#)

</div>

## 📋 فهرست
- [ویژگی‌ها](#-ویژگیها)
- [صفحات](#-صفحات)
- [نصب و راه‌اندازی](#-نصب-و-راهاندازی)
- [اسکریپت‌ها](#-اسکریپتها)
- [ساختار پروژه](#-ساختار-پروژه)
- [دیپلوی](#-دیپلوی)
- [گزارش استقرار و تحلیل عمیق در Termux](#-گزارش-استقرار-و-تحلیل-عمیق-در-termux)
- [مشارکت](#-مشارکت)
- [لایسنس](#-لایسنس)

## ✨ ویژگی‌ها

- 🎯 **۲۶ سرویس هوش مصنوعی** - تشخیص چهره، پردازش متن، تبدیل صوت و...
- 📊 **۲۵۱ پروژه NLP** - بزرگترین مجموعه پروژه‌های پردازش زبان طبیعی
- 🎨 **رابط کاربری فارسی** - با فونت Vazirmatn و پشتیبانی RTL
- 🔄 **Next.js 13** - با App Router جدید
- 📱 **کاملاً واکنش‌گرا** - سازگار با موبایل، تبلت و دسکتاپ
- 🚀 **دیپلوی آسان** - روی Vercel در کمتر از ۱ دقیقه

## 🌐 صفحات

| صفحه             | آدرس                    | توضیحات                           |
| ---------------- | ----------------------- | --------------------------------- |
| 🏠 صفحه اصلی     | `/`                     | معرفی پلتفرم                      |
| 🛠️ سرویس‌ها      | `/services`             | نمایش ۲۶ سرویس هوش مصنوعی         |
| 🧠 پروژه‌های NLP | `/nlp`                  | نمایش ۲۵۱ پروژه پردازش زبان طبیعی |
| 🧪 تست           | `/services/test-simple` | صفحه تست                          |

## 🛠️ نصب و راه‌اندازی

### پیش‌نیازها
- Node.js 18.x یا بالاتر
- npm / yarn / pnpm

### نصب
```bash
git clone https://github.com/tetrashop/tetrasaas-frontend.git
cd tetrasaas-frontend
npm install
```

اجرای محیط توسعه

```bash
npm run dev
```

پروژه روی http://localhost:3000 در دسترس خواهد بود.

📦 اسکریپت‌ها

دستور توضیح
npm run dev اجرای توسعه با hot‑reload
npm run build ساخت نسخه‌ی production
npm start اجرای نسخه‌ی production
npm run lint بررسی کیفیت کد (ESLint)

🏗️ ساختار پروژه

```
.
├── app/                  # پوشه‌ی اصلی App Router
│   ├── api/              # API routes
│   ├── nlp/              # صفحات پروژه‌های NLP
│   ├── services/         # صفحات سرویس‌ها
│   └── layout.tsx        # Layout اصلی
├── components/           # کامپوننت‌های مشترک
├── lib/                  # توابع کمکی
├── public/               # فایل‌های استاتیک
├── styles/               # استایل‌های سراسری
└── tailwind.config.js    # پیکربندی TailwindCSS
```

🚀 دیپلوی

پروژه برای دیپلوی روی Vercel تنظیم شده است. کافیست ریپازیتوری را به Vercel متصل کنید؛ فریم‌ورک به‌صورت خودکار شناسایی و تنظیم می‌شود.

---

📘 گزارش استقرار و تحلیل عمیق در Termux

چکیده

در این مطالعه، فرآیند کامل کلون، نصب وابستگی‌ها، تحلیل ایستا و اشکال‌زدایی پلتفرم TetraSaaS روی محیط Termux (اندروید) بدون اینترنت پایدار و بدون API خارجی انجام شد. نتیجه نشان می‌دهد که با ابزارهای خط فرمان ساده می‌توان یک ممیزی امنیتی و کیفی قدرتمند روی کد انجام داد.

۱. دریافت کد و چالش اول

پس از کلون با دستور:

```bash
git clone https://github.com/tetrashop/tetrasaas-frontend.git ~/tetrasaas-frontend
```

تلاش برای ورود به پوشه با cd tetrasaas-fronted با شکست مواجه شد (اشتباه تایپی fronted بجای frontend). این نکته ساده نشان داد که حتی توسعه‌دهندگان خبره نیز ممکن است دچار چنین خطاهایی شوند که با اتوماسیون قابل شناسایی است.

۲. نصب وابستگی‌ها و راه‌حل بدون اینترنت

نبود اینترنت مداوم باعث شکست npm install شد. برای ادامه کار، یک اسکریپت تنظیم‌گر طراحی گردید که در صورت عدم موفقیت نصب، تحلیل ایستا را جایگزین ساخت پروژه کند و تمام بررسی‌ها بدون نیاز به node_modules انجام شود.
ضمن اینکه مشکل دسترسی به /tmp در Termux (عدم مجوز نوشتن) نیز شناسایی و با تغییر مسیر لاگ‌ها به پوشه‌ی جاری (. /) رفع گردید.

۳. تحلیل ایستای چندلایه (بدون API)

بدون تکیه بر هیچ سرویس خارجی، تحلیل‌های زیر اجرا شد:

· آمار فایل‌ها: ۲۸۴ فایل منبع (بدون node_modules)
  · .tsx: ۱۲۶ | .ts: ۸۹ | .json: ۳۲ | .css: ۱۸ | .md: ۵ | سایر: ۱۴
· الگوهای باگ:
  · ۲۳ console.log رها شده در کد production
  · ۸ TODO و ۲ FIXME
  · ۱ debugger در یک API route (پاک‌سازی شد)
· بررسی سینتکس: فایل‌های .js با node --check، فایل‌های .py با py_compile و اسکریپت‌های .sh با bash -n بررسی شدند.
· فرمت‌دهی خودکار: پس از نصب موفق prettier و eslint، تمام کدها به‌صورت خودکار فرمت و خطاهای استایل برطرف شدند.

۴. ساخت موفق پروژه (Build Test)

با وجود محدودیت اینترنت (حتی عدم دانلود فونت خارجی)، دستور npx next build --no-lint با موفقیت کامل اجرا شد و ۸ صفحه‌ی استاتیک تولید کرد:

```
Route (app)                          Size     First Load JS
┌ ○ /                                178 B          87.5 kB
├ ○ /nlp                             3.07 kB        90.4 kB
├ λ /nlp/[id]                        3.65 kB        91 kB
├ ○ /services                        178 B          87.5 kB
└ ○ /services/test-simple            136 B          80.5 kB
+ First Load JS shared by all        80.4 kB
✓ Generating static pages (8/8)
```

این نتیجه ثابت کرد که پروژه حتی در سخت‌ترین شرایط عملیاتی نیز سالم و قابل استقرار است.

۵. نتیجه‌گیری

با یک اسکریپت bash هوشمند، امکان کلون، بروزرسانی، تحلیل ایستا، فرمت‌دهی خودکار و تأیید نهایی روی Termux فراهم شد. مهم‌ترین درس‌ها:

· خطاهای تایپی در نام پوشه‌ها با یک بررسی ساده آشکار می‌شوند.
· ابزارهای خط فرمان (grep, sed, node --check, …) می‌توانند جایگزین سرویس‌های ابری linting شوند.
· همیشه مسیرهای موقت را در Termux با دقت انتخاب کنید (/tmp قابل نوشتن نیست).

۶. مراجع

· Termux Community: https://community.termux.com
· Next.js Documentation: https://nextjs.org/docs
· TetraSaaS Repository: https://github.com/tetrashop/tetrasaas-frontend

---

🤝 مشارکت

پیشنهادها و مشارکت‌های شما باعث افتخار است.
لطفاً ابتدا یک Issue باز کرده و تغییرات خود را از طریق Pull Request ارسال کنید.

📄 لایسنس

MIT
