import Link from 'next/link'

// داده‌های نمونه برای ۲۶ سرویس AI
const aiServices = Array.from({ length: 26 }, (_, i) => {
  const categories = [
    'پردازش تصویر', 'پردازش متن', 'تبدیل صوت', 'تحلیل داده', 'یادگیری ماشین', 'بینایی کامپیوتر'
  ]
  
  const statuses = ['فعال', 'در حال توسعه', 'آزمایشی', 'آماده بهره‌برداری']
  
  return {
    id: i + 1,
    name: `سرویس ${String.fromCharCode(65 + i)}: ${[
      'تشخیص چهره هوشمند',
      'تبدیل متن به گفتار',
      'ترجمه عصبی',
      'خلاصه‌ساز متون',
      'تولید کد خودکار',
      'تحلیل احساسات',
      'تشخیص اشیا',
      'پاسخگوی هوشمند',
      'تولید تصویر هنری',
      'تشخیص کلاهبرداری',
      'پیش‌بینی بازار',
      'تشخیص پزشکی',
      'بهینه‌سازی کد',
      'تولید محتوا',
      'دستیار صوتی',
      'تحلیل ویدیو',
      'تشخیص پلاک',
      'تجزیه احساسات صوتی',
      'تشخیص دستخط',
      'تولید موسیقی',
      'تشخیص اسپم',
      'پیشنهاد هوشمند',
      'تشخیص زبان بدن',
      'تولید زیرنویس',
      'تحلیل شبکه‌های اجتماعی',
      'دستیار برنامه‌نویسی'
    ][i]}`,
    description: [
      'سیستم تشخیص چهره با دقت ۹۹٫۸٪ برای احراز هویت امن',
      'تبدیل متن فارسی به گفتار طبیعی با لحن‌های مختلف',
      'ترجمه ماشینی عصبی با پشتیبانی از ۵۰ زبان زنده دنیا',
      'خلاصه‌سازی هوشمند متون طولانی با حفظ مفهوم اصلی',
      'تولید کد از روی توضیحات متنی با پشتیبانی از ۱۰ زبان برنامه‌نویسی',
      'تحلیل احساسات در متن‌های فارسی با دقت ۹۵٪',
      'تشخیص و طبقه‌بندی اشیا در تصاویر با ۱۰۰۰ دسته‌بندی',
      'چتبات هوشمند با قابلیت یادگیری از تعاملات',
      'تولید تصاویر هنری از روی توصیفات متنی',
      'سیستم تشخیص تراکنش‌های کلاهبرداری در لحظه',
      'پیش‌بینی روند بازار با استفاده از یادگیری عمیق',
      'کمک به تشخیص بیماری‌ها از روی تصاویر پزشکی',
      'بهینه‌سازی خودکار کد برای بهبود عملکرد',
      'تولید محتوای متنی خلاقانه برای بازاریابی',
      'دستیار صوتی فارسی با قابلیت درک دستورات پیچیده',
      'تحلیل محتوای ویدیویی و استخراج اطلاعات کلیدی',
      'تشخیص پلاک خودروها در شرایط مختلف نوری',
      'تحلیل احساسات از روی تن صدا در مکالمات',
      'تشخیص و دیجیتالی‌سازی دستخط فارسی',
      'تولید موسیقی بر اساس سبک‌های انتخابی',
      'تشخیص پیام‌های اسپم و مخرب با دقت بالا',
      'سیستم پیشنهاددهنده محصولات بر اساس رفتار کاربر',
      'تشخیص حالات بدن از روی ویدیو',
      'تولید خودکار زیرنویس فارسی برای ویدیوها',
      'تحلیل روندها و نظرات در شبکه‌های اجتماعی',
      'کمک به برنامه‌نویسان در دیباگ و توسعه کد'
    ][i],
    category: categories[i % categories.length],
    price: (Math.random() * 900 + 100).toFixed(0),
    rating: (Math.random() * 2 + 3).toFixed(1),
    users: Math.floor(Math.random() * 10000) + 1000,
    status: statuses[i % statuses.length],
    apiEndpoint: `https://api.tetrasaas.ir/v1/service-${String.fromCharCode(97 + i)}`,
    documentation: `https://docs.tetrasaas.ir/service-${String.fromCharCode(97 + i)}`,
    icon: ['👁️', '🗣️', '🔤', '📄', '💻', '😊', '📷', '🤖', '🎨', '🛡️', '📈', '🏥', '⚡', '✍️', '🎤', '🎥', '🚗', '🎵', '✏️', '🎼', '🚫', '🎯', '👥', '📝', '🌐', '🔧'][i],
    featured: i % 5 === 0,
    tags: ['هوش مصنوعی', 'یادگیری ماشین', 'API', 'ایران‌ساخت'],
    launchDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString()
  }
})

export default function ServicesPage() {
  // دسته‌بندی‌های منحصربه‌فرد
  const categories = Array.from(new Set(aiServices.map(s => s.category)))
  
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* هدر صفحه */}
      <div className="mb-12 text-center">
        <div className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-2 mb-4">
          <span className="text-purple-800 font-bold">🎯 سکو ۲۵۱ پروژه هوش مصنوعی</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ۲۶ سرویس پیشرفته هوش مصنوعی
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          مجموعه کامل سرویس‌های هوش مصنوعی پلتفرم TetraSaaS برای کسب‌وکارها، توسعه‌دهندگان و محققان
        </p>
      </div>

      {/* آمار کلی */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-3xl text-blue-600 mb-2">۲۶</div>
          <div className="text-gray-700 font-medium">سرویس فعال</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-3xl text-green-600 mb-2">۲۴/۷</div>
          <div className="text-gray-700 font-medium">پشتیبانی</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-3xl text-purple-600 mb-2">۵۰K+</div>
          <div className="text-gray-700 font-medium">کاربر فعال</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-3xl text-amber-600 mb-2">۹۹٫۹٪</div>
          <div className="text-gray-700 font-medium">آپ‌تایم</div>
        </div>
      </div>

      {/* فیلتر دسته‌بندی */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">دسته‌بندی سرویس‌ها</h2>
        <div className="flex flex-wrap gap-3">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium">
            همه سرویس‌ها
          </button>
          {categories.map((category, idx) => (
            <button 
              key={idx}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-medium transition"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* شبکه سرویس‌ها */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {aiServices.map((service) => (
          <div 
            key={service.id}
            className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border ${service.featured ? 'border-2 border-amber-400' : 'border-gray-100'}`}
          >
            {service.featured && (
              <div className="bg-amber-500 text-white text-sm font-bold py-1 px-4 text-center">
                ⭐ سرویس ویژه
              </div>
            )}
            
            <div className="p-6">
              {/* هدر سرویس */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="text-3xl ml-3">{service.icon}</div>
                  <div>
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full mb-2">
                      #{String(service.id).padStart(2, '0')}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900">{service.name}</h3>
                  </div>
                </div>
                
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${service.status === 'فعال' ? 'bg-green-100 text-green-800' : service.status === 'در حال توسعه' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'}`}>
                  {service.status}
                </div>
              </div>

              {/* توضیحات */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* تگ‌ها */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                  {service.category}
                </span>
                {service.tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* آمار */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{service.rating}</div>
                  <div className="text-xs text-gray-500">امتیاز</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {service.users.toLocaleString('fa-IR')}
                  </div>
                  <div className="text-xs text-gray-500">کاربر</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {service.price}K
                  </div>
                  <div className="text-xs text-gray-500">تومان/ماه</div>
                </div>
              </div>

              {/* دکمه‌های اقدام */}
              <div className="flex gap-3">
                <a
                  href={service.apiEndpoint}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-3 rounded-lg transition"
                >
                  🚀 استفاده از API
                </a>
                <a
                  href={service.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-center font-medium py-3 rounded-lg transition"
                >
                  📚 مستندات
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* راهنمای API */}
      <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 text-white mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">🚀 شروع استفاده از API ها</h2>
            <p className="text-gray-300">
              تمام سرویس‌های ما از طریق REST API در دسترس هستند. کلید API رایگان دریافت کنید.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition">
              دریافت API Key رایگان
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 font-bold px-8 py-3 rounded-lg transition">
              مشاهده مستندات کامل
            </button>
          </div>
        </div>
      </div>

      {/* اطلاعات تماس */}
      <div className="bg-gray-50 rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          📞 پشتیبانی تخصصی
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-bold text-gray-800 mb-2">چت آنلاین</h3>
            <p className="text-gray-600">پشتیبانی ۲۴ ساعته از طریق چت</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="font-bold text-gray-800 mb-2">ایمیل</h3>
            <p className="text-gray-600">support@tetrasaas.ir</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="font-bold text-gray-800 mb-2">مستندات فارسی</h3>
            <p className="text-gray-600">آموزش کامل استفاده از تمام سرویس‌ها</p>
          </div>
        </div>
      </div>

      {/* ناوبری */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 border-t border-gray-200">
        <Link 
          href="/nlp"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <span className="ml-3 text-2xl">📊</span>
          مشاهده ۲۵۱ پروژه NLP
        </Link>
        
        <Link 
          href="/"
          className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium"
        >
          <span className="ml-3 text-2xl">🏠</span>
          بازگشت به صفحه اصلی
        </Link>
        
        <div className="text-center">
          <a 
            href="https://tetrashop-projects.vercel.app/api/services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
          >
            <span className="ml-3 text-2xl">🌐</span>
            مشاهده داده واقعی از API
          </a>
        </div>
      </div>
    </div>
  )
}
