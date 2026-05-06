"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { nlpProjects } from "@/app/nlpData";

interface NLPProject {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  created_date: string;
  views: number;
  likes: number;
  comments: number;
  rating: number;
  difficulty: string;
  progress: number;
  study_time: number;
  features: string[];
}

export default function NLPPage() {
  const [projects, setProjects] = useState<NLPProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [usingDummyData, setUsingDummyData] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        setUsingDummyData(false);

        // تلاش برای دریافت از API واقعی
        const response = await fetch("/api/nlp-proxy");

        if (response.ok) {
          const data = await response.json();

          // بررسی کنید آیا API داده‌های کامل برگردانده
          if (data.posts && data.posts.length > 0 && data.posts[0].title) {
            // اگر API داده برگرداند اما فیلدهای کم داشت، از داده موقت استفاده کن
            if (!data.posts[0].description) {
              throw new Error("API داده‌های ناقص برگرداند");
            }
            setProjects(data.posts);
          } else {
            throw new Error("API داده‌های ناقص برگرداند");
          }
        } else {
          throw new Error(`API پاسخ نداد: ${response.status}`);
        }
      } catch (err) {
        console.log("استفاده از داده‌های موقت:", err);
        setUsingDummyData(true);
        setProjects(nlpProjects);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto p-8 text-center">
        <div className="text-2xl">در حال بارگذاری پروژه‌ها...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {usingDummyData && (
        <div className="mb-6 p-3 bg-yellow-100 text-yellow-800 rounded-lg text-center">
          💡 در حال نمایش داده‌های نمونه. برای داده‌های واقعی، API اصلی نیاز به
          توسعه دارد.
        </div>
      )}

      <div className="mb-12 text-center">
        <div className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-2 mb-4">
          <span className="text-purple-800 font-bold">
            🧠 مجموعه کامل پروژه‌های NLP
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {projects.length} پروژه پردازش زبان طبیعی
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          بزرگترین مجموعه پروژه‌های NLP فارسی و انگلیسی در حوزه‌های مختلف
        </p>
      </div>

      {/* بقیه کد صفحه مانند قبل */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-3xl text-blue-600 mb-2">{projects.length}</div>
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

      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          دسته‌بندی پروژه‌ها
        </h2>
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

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          📚 پروژه‌های برتر NLP
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-2xl ml-3">
                  {project.category === "تحلیل احساسات" ? "😊" : "📖"}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{project.category}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                  {project.category}
                </span>
                {project.features?.slice(0, 2).map((feature, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">
                  ⭐ {project.rating.toFixed(1)}/5
                </span>
                <Link
                  href={`/nlp/${project.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  مشاهده جزئیات →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 border-t border-gray-200">
        <Link
          href="/services"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <span className="ml-3 text-2xl">🔙</span>
          بازگشت به سرویس‌ها
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
            href="https://api.tetrasaas.ir/v1/nlp-projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
          >
            <span className="ml-3 text-2xl">🌐</span>
            مشاهده API پروژه‌ها
          </a>
        </div>
      </div>
    </div>
  );
}
