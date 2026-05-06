"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { nlpProjects, getProjectById } from "@/app/nlpData"; // وارد کردن داده‌های موقت

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

export default function ProjectDetailPage() {
  const router = useRouter();
  const params = useParams();
  const projectId = params.id;

  const [project, setProject] = useState<NLPProject | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingDummyData, setUsingDummyData] = useState(false); // حالت جدید برای نمایش وضعیت

  const formatNumber = (num: number | undefined | null): string => {
    return (num || 0).toLocaleString("fa-IR");
  };

  useEffect(() => {
    const fetchProject = async () => {
      if (!projectId) return;

      try {
        setIsLoading(true);
        setUsingDummyData(false);

        // اول: سعی کن از API واقعی دریافت کنی
        console.log("در حال دریافت داده از API واقعی...");
        const response = await fetch(`/api/nlp-proxy?id=${projectId}`);

        if (response.ok) {
          const data = await response.json();
          console.log("داده دریافتی از API:", data);

          // بررسی کنید که آیا API داده‌های کامل برگردانده یا فقط id و title
          if (data && data.author) {
            // API داده‌های کامل برگردانده
            setProject(data);
          } else {
            // API فقط داده‌های ابتدایی برگردانده، از داده موقت استفاده کن
            console.log("API داده‌های ناقص برگرداند، استفاده از داده‌های موقت");
            throw new Error("API داده‌های ناقص برگرداند");
          }
        } else {
          throw new Error(`API پاسخ نداد: ${response.status}`);
        }
      } catch (err) {
        console.log("استفاده از داده‌های موقت به دلیل خطای API:", err);
        setUsingDummyData(true);

        // استفاده از داده موقت بر اساس آیدی
        const dummyData = getProjectById(parseInt(projectId as string));
        if (dummyData) {
          setProject(dummyData);
        } else {
          setError("پروژه یافت نشد");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto p-8 text-center">
        <div className="text-2xl">در حال بارگذاری جزئیات پروژه...</div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="max-w-7xl mx-auto p-8 text-center">
        <div className="text-2xl text-red-600">{error || "پروژه یافت نشد"}</div>
        <button
          onClick={() => router.back()}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          ← بازگشت به لیست پروژه‌ها
        </button>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return dateString;
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* نوار وضعیت - نمایش می‌دهد که از داده موقت استفاده می‌شود */}
      {usingDummyData && (
        <div className="mb-4 p-3 bg-yellow-100 text-yellow-800 rounded-lg text-center">
          💡 در حال نمایش داده‌های نمونه. برای داده‌های واقعی، API اصلی نیاز به
          توسعه دارد.
        </div>
      )}

      <nav className="mb-8 text-sm text-gray-600">
        <Link href="/" className="hover:text-blue-600">
          صفحه اصلی
        </Link>
        {" > "}
        <Link href="/nlp" className="hover:text-blue-600">
          پروژه‌های NLP
        </Link>
        {" > "}
        <span className="font-medium text-gray-900">{project.title}</span>
      </nav>

      <header className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <div>
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-3">
              #{project.id} از {nlpProjects.length}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {project.title}
            </h1>
            <p className="text-gray-600 text-lg">
              حالت نمایش {usingDummyData ? "نمونه" : "واقعی"}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href={`/nlp/${parseInt(projectId as string) + 1}`}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-scientific.DEFAULT to-artistic.DEFAULT text-white font-medium rounded-lg hover:opacity-90 transition"
            >
              پروژه بعدی →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <div className="text-gray-500 mb-1">👤 نویسنده</div>
            <div className="font-medium">{project.author}</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <div className="text-gray-500 mb-1">🏷️ دسته‌بندی</div>
            <div className="font-medium">{project.category}</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <div className="text-gray-500 mb-1">📅 تاریخ ایجاد</div>
            <div className="font-medium">
              {formatDate(project.created_date)}
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <div className="text-gray-500 mb-1">👁️ بازدید</div>
            <div className="font-medium">{formatNumber(project.views)}</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <div className="text-gray-500 mb-1">❤️ پسند</div>
            <div className="font-medium">{formatNumber(project.likes)}</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <div className="text-gray-500 mb-1">💬 نظرات</div>
            <div className="font-medium">{formatNumber(project.comments)}</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <div className="text-gray-500 mb-1">⭐ امتیاز</div>
            <div className="font-medium">{project.rating.toFixed(1)}/5</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <div className="text-gray-500 mb-1">📊 پیشرفت</div>
            <div className="font-medium">{project.progress}%</div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              📝 توضیحات پروژه
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              🔧 جزئیات فنی
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-gray-600 mb-2">سطح دشواری:</div>
                <div className="font-medium text-lg">{project.difficulty}</div>
              </div>
              <div>
                <div className="text-gray-600 mb-2">پیشرفت:</div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-600 h-3 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {project.progress}% تکمیل
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-2">زمان مطالعه:</div>
                <div className="font-medium text-lg">
                  {project.study_time} دقیقه
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              🏆 ویژگی‌ها
            </h2>
            <ul className="space-y-4">
              {project.features && project.features.length > 0 ? (
                project.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))
              ) : (
                <li className="text-gray-500 text-center py-4">
                  هیچ ویژگی‌ای ثبت نشده است
                </li>
              )}
            </ul>
          </section>

          <section className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              🚀 اقدامات
            </h2>
            <div className="space-y-4">
              <Link
                href="/nlp"
                className="block w-full text-center px-6 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
              >
                مشاهده همه {nlpProjects.length} پروژه
              </Link>
              <a
                href="https://tetrashop-projects.vercel.app/api/nlp"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
              >
                مشاهده داده واقعی از API
              </a>
              <button
                onClick={() => router.back()}
                className="block w-full text-center px-6 py-4 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition"
              >
                بازگشت به لیست
              </button>
            </div>
          </section>
        </div>
      </div>

      <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
        <p>
          🌐 اطلاعات اتصال به API:{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">
            tetrashop-projects.vercel.app/api/nlp
          </code>
          {usingDummyData && (
            <span className="text-yellow-600 mr-2">
              {" "}
              (در حال استفاده از داده‌های نمونه)
            </span>
          )}
        </p>
        <p className="mt-2">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            🏠 بازگشت به صفحه اصلی پلتفرم TetraSaaS
          </Link>
        </p>
      </footer>
    </div>
  );
}
