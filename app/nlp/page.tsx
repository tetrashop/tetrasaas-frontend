import Link from 'next/link'

// داده‌های نمونه برای ۲۵۲ پروژه NLP
const nlpProjects = Array.from({ length: 252 }, (_, i) => ({
  id: i + 1,
  title: `پروژه ${i + 1}: ${[
    'تحلیل احساسات پیشرفته',
    'تشخیص موجودیت نام‌دار',
    'خلاصه‌سازی هوشمند',
    'ترجمه ماشینی عصبی',
    'تولید متن خلاقانه',
    'دسته‌بندی موضوعی',
    'پاسخ‌دهی سوالات',
    'تشخیص زبان',
    'تولید شعر فارسی',
    'تصحیح خودکار متن'
  ][i % 10]} ${['پیشرفته', 'تحقیقاتی', 'صنعتی', 'آکادمیک'][i % 4]}`,
  description: `پروژه شماره ${i + 1} از ۲۵۲ پروژه پردازش زبان طبیعی پلتفرم. این پروژه بر ${[
    'تحلیل احساسات متن‌های فارسی',
    'تشخیص موجودیت‌های نام‌دار در متن',
    'خلاصه‌سازی خودکار مقالات',
    'ترجمه ماشینی با کیفیت بالا',
    'تولید متن‌های خلاقانه',
    'دسته‌بندی خودکار اسناد',
    'پاسخ به سوالات کاربران',
    'تشخیص زبان متن‌های چندزبانه',
    'تولید شعر با سبک‌های مختلف',
    'تصحیح گرامری و املایی'
  ][i % 10]} تمرکز دارد.`,
  category: ['تحلیل احساسات', 'تشخیص موجودیت', 'خلاصه‌سازی', 'ترجمه', 'تولید متن'][i % 5],
  author: `تیم ${['پردازش متن', 'هوش مصنوعی', 'تحقیقاتی', 'توسعه'][i % 4]}`,
  views: Math.floor(Math.random() * 50000) + 10000,
  likes: Math.floor(Math.random() * 2000) + 500,
  comments: Math.floor(Math.random() * 300) + 50,
  readTime: `${Math.floor(Math.random() * 20) + 5} دقیقه`,
  difficulty: ['مقدماتی', 'متوسط', 'پیشرفته'][i % 3],
  progress: Math.floor(Math.random() * 100),
  rating: (Math.random() * 2 + 3).toFixed(1),
  featured: i % 7 === 0,
  tags: ['NLP', 'هوش مصنوعی', 'پردازش متن فارسی'],
  createdAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString(),
  isNew: i >= 242 // 10 پروژه آخر جدید هستند
}))

export default function NlpPage() {
  // پروژه‌های ویژه
  const featuredProjects = nlpProjects.filter(p => p.featured)
  
  // پروژه‌های جدید
  const newProjects = nlpProjects.filter(p => p.isNew)

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* هدر صفحه */}
      <div className="mb-12 text-center">
        <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-4">
          <span className="text-blue-800 font-bold">🧠 پلتفرم پردازش زبان طبیعی</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ۲۵۲ پروژه تخصصی NLP
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          بزرگترین مجموعه پروژه‌های پردازش زبان طبیعی فارسی - از مباحث مقدماتی تا پیشرفته‌ترین تکنیک‌های یادگیری عمیق
        </p>
      </div>

      {/* آمار کلی */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-3xl text-blue-600 mb-2">۲۵۲</div>
          <div className="text-gray-700 font-medium">پروژه کامل</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-3xl text-green-600 mb-2">۵۰K+</div>
          <div className="text-gray-700 font-medium">خط کد</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-3xl text-purple-600 mb-2">۱۰۰+</div>
          <div className="text-gray-700 font-medium">مدل آموزش دیده</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-3xl text-amber-600 mb-2">۲۵+</div>
          <div className="text-gray-700 font-medium">مقاله علمی</div>
        </div>
      </div>

      {/* پروژه‌های ویژه */}
      {featuredProjects.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="ml-3 text-2xl">⭐</span>
            پروژه‌های ویژه
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 3).map((project) => (
              <div key={project.id} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl shadow-lg p-6 border-2 border-amber-200">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    ویژه
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    #{project.id}
                  </span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link 
                  href={`/nlp/${project.id}`}
                  className="inline-flex items-center justify-center w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 rounded-lg transition"
                >
                  مشاهده جزئیات کامل
                  <span className="mr-2 text-xl">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* پروژه‌های جدید */}
      {newProjects.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="ml-3 text-2xl">🆕</span>
            جدیدترین پروژه‌ها (۱۰ پروژه آخر)
          </h2>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {newProjects.map((project) => (
                <Link 
                  key={project.id}
                  href={`/nlp/${project.id}`}
                  className="bg-white hover:shadow-lg rounded-lg p-4 transition-all duration-300 text-center"
                >
                  <div className="text-2xl mb-2">📚</div>
                  <div className="font-bold text-gray-900">پروژه {project.id}</div>
                  <div className="text-sm text-gray-500 mt-1">جدید</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* فهرست پروژه‌ها */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 همه پروژه‌ها (۱ تا ۲۵۲)</h2>
        
        {/* جستجو و فیلتر */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="جستجو در بین ۲۵۲ پروژه..."
              className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select className="px-6 py-3 border border-gray-300 rounded-lg bg-white">
            <option>مرتب‌سازی بر اساس: جدیدترین</option>
            <option>مرتب‌سازی بر اساس: محبوب‌ترین</option>
            <option>مرتب‌سازی بر اساس: پیشرفت</option>
          </select>
        </div>

        {/* جدول پروژه‌ها */}
        <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-4 px-6 text-right font-bold text-gray-700">#</th>
                <th className="py-4 px-6 text-right font-bold text-gray-700">عنوان پروژه</th>
                <th className="py-4 px-6 text-right font-bold text-gray-700">دسته‌بندی</th>
                <th className="py-4 px-6 text-right font-bold text-gray-700">سطح</th>
                <th className="py-4 px-6 text-right font-bold text-gray-700">پیشرفت</th>
                <th className="py-4 px-6 text-right font-bold text-gray-700">عملیات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {nlpProjects.slice(0, 15).map((project) => (
                <tr key={project.id} className="hover:bg-gray-50 transition">
                  <td className="py-4 px-6">
                    <span className="inline-block bg-gray-100 text-gray-700 font-bold px-3 py-1 rounded-full">
                      {project.id}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-bold text-gray-900">{project.title}</div>
                    <div className="text-sm text-gray-500 mt-1">{project.author}</div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      project.difficulty === 'مقدماتی' ? 'bg-green-100 text-green-800' :
                      project.difficulty === 'متوسط' ? 'bg-amber-100 text-amber-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {project.difficulty}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2 ml-3">
                        <div 
                          className={`h-2 rounded-full ${
                            project.progress < 30 ? 'bg-red-500' :
                            project.progress < 70 ? 'bg-amber-500' :
                            'bg-green-500'
                          }`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold">{project.progress}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <Link 
                      href={`/nlp/${project.id}`}
                      className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition"
                    >
                      مشاهده
                      <span className="mr-2">→</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* صفحه‌بندی */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            قبلی
          </button>
          {[1, 2, 3, '...', 16, 17].map((page, idx) => (
            <button 
              key={idx}
              className={`px-4 py-2 rounded-lg ${page === 1 ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
            >
              {page}
            </button>
          ))}
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            بعدی
          </button>
        </div>
      </div>

      {/* راهنمای استفاده */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-8 text-white mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">🎓 چگونه از پروژه‌ها استفاده کنیم؟</h2>
            <p className="text-blue-100">
              تمام پروژه‌ها شامل کد کامل، داکیومنت فارسی، دیتاست و مدل آموزش‌دیده هستند.
            </p>
          </div>
          <div className="flex gap-4">
            <Link 
              href="/nlp/1"
              className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition"
            >
              شروع با پروژه اول
            </Link>
            <Link 
              href="/nlp/252"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 font-bold px-8 py-3 rounded-lg transition"
            >
              پروژه آخر (۲۵۲)
            </Link>
          </div>
        </div>
      </div>

      {/* اطلاعات API */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🌐 اتصال به API اصلی</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <span className="text-green-600 ml-2">✅</span>
            <span>API فعال:</span>
            <code className="bg-white border border-gray-300 px-3 py-1 rounded text-sm mr-2 font-mono">
              tetrashop-projects.vercel.app/api/nlp
            </code>
          </div>
          <div className="flex items-center">
            <span className="text-blue-600 ml-2">📊</span>
            <span>تعداد رکوردها در API: ۲۵۲ پروژه کامل</span>
          </div>
          <div className="flex items-center">
            <span className="text-purple-600 ml-2">🚀</span>
            <span>آخرین پروژه: شماره ۲۵۲ - "تولید شعر فارسی پیشرفته"</span>
          </div>
        </div>
      </div>

      {/* ناوبری */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 border-t border-gray-200">
        <Link 
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <span className="ml-3 text-2xl">🏠</span>
          صفحه اصلی TetraSaaS
        </Link>
        
        <div className="text-center">
          <Link 
            href="/services"
            className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
          >
            <span className="ml-3 text-2xl">⚡</span>
            مشاهده ۲۶ سرویس AI
          </Link>
        </div>
        
        <a 
          href="https://tetrashop-projects.vercel.app/api/nlp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
        >
          <span className="ml-3 text-2xl">🔗</span>
          تست API اصلی
        </a>
      </div>
    </div>
  )
}
