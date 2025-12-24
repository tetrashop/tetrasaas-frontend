export default function NLPPage() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* هدر */}
      <div className="mb-12 text-center">
        <div className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-2 mb-4">
          <span className="text-purple-800 font-bold">🧠 مجموعه کامل پروژه‌های NLP</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ۲۵۱ پروژه پردازش زبان طبیعی
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          بزرگترین مجموعه پروژه‌های NLP فارسی و انگلیسی در حوزه‌های مختلف
        </p>
      </div>

      {/* آمار کلی */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-3xl text-blue-600 mb-2">۲۵۱</div>
          <div className="text-gray-700 font-medium">پروژه NLP</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-3xl text-green-600 mb-2">۴۵+</div>
          <div className="text-gray-700 font-medium">دسته‌بندی</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-3xl text-purple-600 mb-2">۱۰۰K+</div>
          <div className="text-gray-700 font-medium">خط کد</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-3xl text-amber-600 mb-2">۲۰۱۵-۲۰۲۴</div>
          <div className="text-gray-700 font-medium">بازه زمانی</div>
        </div>
      </div>

      {/* دسته‌بندی‌ها */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">دسته‌بندی پروژه‌ها</h2>
        <div className="flex flex-wrap gap-3">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium">
            همه پروژه‌ها
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-medium transition">
            پردازش متن فارسی
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-medium transition">
            ترجمه ماشینی
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-medium transition">
            تحلیل احساسات
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-medium transition">
            تولید متن
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-medium transition">
            خلاصه‌سازی
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-medium transition">
            پاسخ به سوال
          </button>
        </div>
      </div>

      {/* لیست پروژه‌ها */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 پروژه‌های برتر NLP</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* پروژه 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="text-2xl ml-3">📖</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">پارس‌برت</h3>
                <p className="text-gray-500 text-sm">مدل زبانی فارسی</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              مدل زبانی مبتنی بر BERT برای زبان فارسی با ۱۱۰ میلیون پارامتر
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                پردازش متن
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                Transformers
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                PyTorch
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">⭐ ۴.۸ (۱۲۳)</span>
              <a href="https://github.com/hooshvare/parsbert" target="_blank" rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium">
                مشاهده در GitHub
              </a>
            </div>
          </div>

          {/* پروژه 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="text-2xl ml-3">🤗</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">HuggingFace فارسی</h3>
                <p className="text-gray-500 text-sm">کتابخانه مدل‌های فارسی</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              مجموعه کامل مدل‌های NLP فارسی در پلتفرم HuggingFace
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                مدل زبانی
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                Transformers
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                TensorFlow
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">⭐ ۴.۹ (۸۹)</span>
              <a href="https://huggingface.co/models?language=fa" target="_blank" rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium">
                مشاهده مدل‌ها
              </a>
            </div>
          </div>

          {/* پروژه 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="text-2xl ml-3">📊</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">تجزیه‌گر نحوی فارسی</h3>
                <p className="text-gray-500 text-sm">تحلیل گرامری</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              تجزیه‌گر نحوی برای زبان فارسی با دقت ۹۷٪
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                تحلیل نحوی
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                Dependency Parsing
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                CRF
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">⭐ ۴.۵ (۶۷)</span>
              <a href="https://github.com/ICTRC/Parsivar" target="_blank" rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium">
                مشاهده در GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* پانوشت */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 border-t border-gray-200">
        <a href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
          <span className="ml-3 text-2xl">🔙</span>
          بازگشت به سرویس‌ها
        </a>
        <a href="/" className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium">
          <span className="ml-3 text-2xl">🏠</span>
          بازگشت به صفحه اصلی
        </a>
        <div className="text-center">
          <a href="https://api.tetrasaas.ir/v1/nlp-projects" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center text-green-600 hover:text-green-800 font-medium">
            <span className="ml-3 text-2xl">🌐</span>
            مشاهده API پروژه‌ها
          </a>
        </div>
      </div>
    </div>
  );
}
