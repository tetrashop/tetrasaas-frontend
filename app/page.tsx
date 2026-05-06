import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* هدر اصلی */}
      <div className="text-center mb-16">
        <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-4">
          <span className="text-blue-800 font-bold">
            🚀 پلتفرم TetraSaaS v2.0
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          بزرگترین مجموعه
          <span className="block text-blue-600 mt-2">هوش مصنوعی فارسی</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          ۲۵۲ پروژه پردازش زبان طبیعی، ۲۶ سرویس API آماده و ۱۵۰۰۰ کاربر فعال
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/nlp"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition shadow-lg"
          >
            🧠 مشاهده ۲۵۲ پروژه NLP
          </Link>
          <Link
            href="/services"
            className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-300 font-bold px-8 py-4 rounded-lg text-lg transition"
          >
            ⚡ ۲۶ سرویس AI
          </Link>
        </div>
      </div>

      {/* آمار کلی */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8">
          <div className="text-5xl mb-4">🧠</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            ۲۵۲ پروژه NLP
          </h3>
          <p className="text-gray-600 mb-4">
            کاملترین مجموعه پروژه‌های پردازش زبان طبیعی فارسی از مقدماتی تا
            پیشرفته
          </p>
          <div className="flex items-center text-blue-600 font-medium">
            <Link href="/nlp/252" className="hover:text-blue-800">
              پروژه آخر: شماره ۲۵۲
            </Link>
            <span className="mr-2">→</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg p-8">
          <div className="text-5xl mb-4">⚡</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">۲۶ سرویس AI</h3>
          <p className="text-gray-600 mb-4">
            سرویس‌های آماده هوش مصنوعی با API کامل برای کسب‌وکارها و
            توسعه‌دهندگان
          </p>
          <div className="flex items-center text-green-600 font-medium">
            <Link href="/services" className="hover:text-green-800">
              مشاهده همه سرویس‌ها
            </Link>
            <span className="mr-2">→</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg p-8">
          <div className="text-5xl mb-4">📊</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">آمار زنده</h3>
          <p className="text-gray-600 mb-4">
            بیش از ۱۵۰۰۰ کاربر فعال و ۹۹٫۹٪ آپ‌تایم در ۳۰ روز گذشته
          </p>
          <div className="flex items-center text-purple-600 font-medium">
            <span>🚀 در حال توسعه...</span>
          </div>
        </div>
      </div>

      {/* پروژه‌های ویژه */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          پروژه‌های ویژه امروز
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl shadow-lg p-6 border-2 border-amber-200">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                ویژه
              </span>
              <span className="text-amber-600 text-xl">#۱</span>
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-3">
              پروژه ۱: تحلیل احساسات پیشرفته
            </h3>
            <p className="text-gray-600 mb-4">
              سیستم تحلیل احساسات متن فارسی با دقت ۹۵٪
            </p>
            <Link
              href="/nlp/1"
              className="inline-flex items-center justify-center w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 rounded-lg transition"
            >
              شروع کنید
              <span className="mr-2 text-xl">→</span>
            </Link>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-lg p-6 border-2 border-blue-200">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                محبوب
              </span>
              <span className="text-blue-600 text-xl">#۱۲۵</span>
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-3">
              پروژه ۱۲۵: ترجمه عصبی
            </h3>
            <p className="text-gray-600 mb-4">
              مدل ترجمه ماشینی با معماری Transformer
            </p>
            <Link
              href="/nlp/125"
              className="inline-flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition"
            >
              مشاهده پروژه
              <span className="mr-2 text-xl">→</span>
            </Link>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-lg p-6 border-2 border-purple-200">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                جدید
              </span>
              <span className="text-purple-600 text-xl">#۲۵۲</span>
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-3">
              پروژه ۲۵۲: تولید شعر فارسی
            </h3>
            <p className="text-gray-600 mb-4">
              آخرین پروژه: تولید شعر با الگوهای عروضی
            </p>
            <Link
              href="/nlp/252"
              className="inline-flex items-center justify-center w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 rounded-lg transition"
            >
              پروژه آخر
              <span className="mr-2 text-xl">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* سرویس‌های برتر */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          سرویس‌های هوش مصنوعی
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "🗣️",
              name: "تبدیل متن به گفتار",
              desc: "صدای طبیعی فارسی",
            },
            { icon: "🔤", name: "ترجمه ماشینی", desc: "پشتیبانی از ۵۰ زبان" },
            { icon: "😊", name: "تحلیل احساسات", desc: "دقت ۹۵٪ در متن فارسی" },
            { icon: "📷", name: "تشخیص چهره", desc: "احراز هویت امن" },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
              <Link
                href="/services"
                className="inline-block text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                استفاده از API
                <span className="mr-2">→</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/services"
            className="inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-bold px-8 py-3 rounded-lg transition"
          >
            مشاهده همه ۲۶ سرویس
            <span className="mr-2 text-xl">⚡</span>
          </Link>
        </div>
      </div>

      {/* وضعیت API */}
      <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 text-white mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">🌐 وضعیت API اصلی</h2>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full ml-2 animate-pulse"></div>
              <span className="text-green-300">آنلاین و فعال</span>
            </div>
            <p className="text-gray-300 mt-2">
              tetrashop-projects.vercel.app/api/nlp
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full ml-2"></div>
              <span>پروژه‌ها: ۲۵۲ رکورد</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full ml-2"></div>
              <span>سرویس‌ها: ۲۶ رکورد</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full ml-2"></div>
              <span>پاسخ‌گویی: ۹۹٫۹٪</span>
            </div>
          </div>
          <a
            href="https://tetrashop-projects.vercel.app/api/nlp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition"
          >
            تست API
          </a>
        </div>
      </div>

      {/* فراخوان اقدام */}
      <div className="text-center bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-lg p-12 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          آماده شروع هستید؟
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          همین حالا اولین پروژه NLP را اجرا کنید یا از سرویس‌های آماده API
          استفاده نمایید.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/nlp/1"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition shadow-lg"
          >
            🚀 شروع با پروژه اول
          </Link>
          <Link
            href="/services"
            className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-300 font-bold px-8 py-4 rounded-lg text-lg transition"
          >
            ⚡ مشاهده سرویس‌ها
          </Link>
        </div>
      </div>
    </div>
  );
}
