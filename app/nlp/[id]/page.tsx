import Link from 'next/link'

// داده‌های نمونه مستقیم در همین فایل
const mockNlpPosts = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `پروژه NLP شماره ${i + 1}: تحلیل احساسات متن فارسی`,
  description: `این پروژه بر پردازش زبان طبیعی و تحلیل احساسات در متن‌های فارسی تمرکز دارد. از تکنیک‌های پیشرفته یادگیری ماشین استفاده می‌کند.`,
  category: ['تحلیل احساسات', 'طبقه‌بندی متن', 'تشخیص موجودیت'][i % 3],
  author: `محقق ${i + 1}`,
  views: Math.floor(Math.random() * 10000) + 1000,
  likes: Math.floor(Math.random() * 500) + 50,
  comments: Math.floor(Math.random() * 100) + 10,
  readTime: `${Math.floor(Math.random() * 15) + 5} دقیقه`,
  difficulty: ['مقدماتی', 'متوسط', 'پیشرفته'][i % 3],
  progress: Math.floor(Math.random() * 100),
  rating: (Math.random() * 2 + 3).toFixed(1),
  featured: i % 4 === 0,
  tags: ['NLP', 'هوش مصنوعی', 'پردازش متن'],
  createdAt: new Date(Date.now() - Math.random() * 31536000000).toISOString(),
  updatedAt: new Date().toISOString()
}))

export default function NlpPostPage({ params }: { params: any }) {
  const { id } = params
  const postId = parseInt(id)
  
  // پیدا کردن پست در داده Mock
  const post = mockNlpPosts.find(p => p.id === postId) || {
    id: postId,
    title: `پروژه NLP شماره ${postId}`,
    description: `پروژه پردازش زبان طبیعی شماره ${postId} از ۲۵۱ پروژه.`,
    category: 'پردازش زبان طبیعی',
    author: 'تیم TetraSaaS',
    views: 10000 + postId * 100,
    likes: 500 + postId * 10,
    comments: 120,
    readTime: '۱۰ دقیقه',
    difficulty: 'متوسط',
    progress: 75,
    rating: '۴.۲',
    featured: false,
    createdAt: new Date().toISOString(),
    content: `این پروژه شماره ${postId} از مجموعه ۲۵۱ پروژه پردازش زبان طبیعی پلتفرم TetraSaaS است.`
  }

  // پست قبلی و بعدی
  const prevId = postId > 1 ? postId - 1 : null
  const nextId = postId < 251 ? postId + 1 : null

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      {/* ناوبری */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Link href="/" className="hover:text-blue-600">صفحه اصلی</Link>
          <span className="mx-2">/</span>
          <Link href="/nlp" className="hover:text-blue-600">پروژه‌های NLP</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">پروژه شماره {postId}</span>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {post.title}
          </h1>
          <div className="flex items-center gap-3">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">
              #{postId} از ۲۵۱
            </span>
            <span className="bg-amber-100 text-amber-800 text-sm font-medium px-4 py-2 rounded-full">
              حالت نمایش نمونه
            </span>
          </div>
        </div>
      </div>

      {/* اطلاعات اصلی */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-700 mb-2">👤 نویسنده</h3>
            <p>{post.author}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-700 mb-2">🏷️ دسته‌بندی</h3>
            <p>{post.category}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-700 mb-2">📅 تاریخ ایجاد</h3>
            <p>{new Date(post.createdAt).toLocaleDateString('fa-IR')}</p>
          </div>
        </div>

        {/* آمار تعامل */}
        <div className="flex flex-wrap gap-6 mb-8">
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-full ml-3">
              <span className="text-red-600 text-xl">👁️</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">بازدید</p>
              <p className="text-lg font-bold">{post.views.toLocaleString('fa-IR')}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-pink-100 p-3 rounded-full ml-3">
              <span className="text-pink-600 text-xl">❤️</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">پسند</p>
              <p className="text-lg font-bold">{post.likes.toLocaleString('fa-IR')}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full ml-3">
              <span className="text-green-600 text-xl">💬</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">نظرات</p>
              <p className="text-lg font-bold">{post.comments.toLocaleString('fa-IR')}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full ml-3">
              <span className="text-blue-600 text-xl">⭐</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">امتیاز</p>
              <p className="text-lg font-bold">{post.rating}/5</p>
            </div>
          </div>
        </div>

        {/* توضیحات */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">📝 توضیحات پروژه</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {post.description}
          </p>
        </div>

        {/* جزئیات فنی */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-5 rounded-xl">
            <h3 className="font-bold text-gray-800 mb-3">🔧 جزئیات فنی</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-600">سطح دشواری:</span>
                <span className="font-medium">{post.difficulty}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">پیشرفت:</span>
                <span className="font-medium">{post.progress}%</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">زمان مطالعه:</span>
                <span className="font-medium">{post.readTime}</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-xl">
            <h3 className="font-bold text-gray-800 mb-3">🏆 ویژگی‌ها</h3>
            <div className="flex flex-wrap gap-2">
              {['پردازش فارسی', 'یادگیری ماشین', 'API REST', 'مستندات کامل'].map((tag, idx) => (
                <span key={idx} className="bg-white text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ناوبری بین پست‌ها */}
      <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
        {prevId ? (
          <Link 
            href={`/nlp/${prevId}`}
            className="flex-1 bg-white border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg rounded-xl p-6 transition-all duration-300 group"
          >
            <div className="flex items-center">
              <div className="bg-gray-100 group-hover:bg-blue-100 p-3 rounded-lg ml-4 transition">
                <span className="text-xl text-gray-600 group-hover:text-blue-600">←</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">پروژه قبلی</p>
                <p className="font-bold text-gray-800 group-hover:text-blue-600">شماره {prevId}</p>
              </div>
            </div>
          </Link>
        ) : (
          <div className="flex-1"></div>
        )}

        <div className="flex flex-col items-center justify-center py-4 gap-4">
          <Link 
            href="/nlp"
            className="inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-medium px-8 py-3 rounded-lg transition shadow-md"
          >
            مشاهده همه ۲۵۱ پروژه
          </Link>
          <div className="text-center">
            <a 
              href={`https://tetrashop-projects.vercel.app/api/nlp/${postId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              مشاهده داده واقعی از API
            </a>
          </div>
        </div>

        {nextId ? (
          <Link 
            href={`/nlp/${nextId}`}
            className="flex-1 bg-white border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg rounded-xl p-6 transition-all duration-300 group text-right"
          >
            <div className="flex items-center justify-end">
              <div>
                <p className="text-sm text-gray-500">پروژه بعدی</p>
                <p className="font-bold text-gray-800 group-hover:text-blue-600">شماره {nextId}</p>
              </div>
              <div className="bg-gray-100 group-hover:bg-blue-100 p-3 rounded-lg mr-4 transition">
                <span className="text-xl text-gray-600 group-hover:text-blue-600">→</span>
              </div>
            </div>
          </Link>
        ) : (
          <div className="flex-1"></div>
        )}
      </div>

      {/* اطلاعات API */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🌐 اطلاعات اتصال به API</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <span className="text-green-600 ml-2">✅</span>
            <span>API اصلی شما فعال است:</span>
            <code className="bg-white border border-gray-300 px-3 py-1 rounded text-sm mr-2 font-mono">
              tetrashop-projects.vercel.app/api/nlp
            </code>
          </div>
          <div className="flex items-center">
            <span className="text-amber-600 ml-2">⚠️</span>
            <span>مشکل فعلی: اتصال از داخل Next.js در Termux</span>
          </div>
          <div className="flex items-center">
            <span className="text-blue-600 ml-2">💡</span>
            <span>راه‌حل: افزودن CORS به API یا استفاده از Proxy</span>
          </div>
        </div>
      </div>

      {/* بازگشت */}
      <div className="text-center pt-6 border-t border-gray-200">
        <Link 
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-lg"
        >
          <span className="ml-3 text-2xl">🏠</span>
          بازگشت به صفحه اصلی پلتفرم TetraSaaS
        </Link>
      </div>
    </div>
  )
}
