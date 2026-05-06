import axios, { AxiosInstance, AxiosResponse } from "axios";

// انواع داده برای پست NLP
interface NLPost {
  id: number;
  title: string;
  description?: string;
  category?: string;
  author?: string;
  views?: number;
  likes?: number;
  comments?: number;
  readTime?: string;
  difficulty?: string;
  progress?: number;
  rating?: string;
  createdAt?: string;
  tags?: string[];
}

interface NLPostsResponse {
  posts: NLPost[];
  total: number;
  page: number;
}

// انواع داده برای سرویس‌ها
interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
  price?: number;
  rating?: string;
  status?: string;
  // سایر فیلدها...
}

class APIClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // اینترسپتور برای مدیریت خطاها
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        console.warn("API Error:", error.message);
        throw error;
      },
    );
  }

  // ========== متدهای NLP ==========

  // متد عمومی برای دریافت لیست پست‌های NLP
  async getNLPosts(
    page: number = 1,
    limit: number = 25,
  ): Promise<NLPostsResponse> {
    try {
      const response: AxiosResponse = await this.client.get("/nlp", {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      console.warn("Falling back to mock data for posts list");
      return this.getMockNLPosts(page, limit);
    }
  }

  // متد برای دریافت یک پست خاص بر اساس ID
  async getNLPost(id: number): Promise<NLPost> {
    try {
      const response: AxiosResponse = await this.client.get(`/nlp/${id}`);
      return response.data;
    } catch (error) {
      console.warn(`Falling back to mock data for post ID: ${id}`);
      return this.getMockNLPost(id);
    }
  }

  // ---------- متدهای کمکی Mock برای NLP ----------
  private getMockNLPosts(page: number, limit: number): NLPostsResponse {
    const startIndex = (page - 1) * limit;
    const mockPosts: NLPost[] = [];

    for (let i = 1; i <= limit; i++) {
      const postId = startIndex + i;
      if (postId > 251) break;

      mockPosts.push({
        id: postId,
        title: `پروژه NLP شماره ${postId}: تحلیل احساسات متن فارسی`,
        description: `این پروژه شماره ${postId} بر پردازش زبان طبیعی تمرکز دارد.`,
        category: ["تحلیل احساسات", "طبقه‌بندی متن", "تشخیص موجودیت"][
          postId % 3
        ],
        author: `محقق ${postId}`,
        views: Math.floor(Math.random() * 10000) + 1000,
        likes: Math.floor(Math.random() * 500) + 50,
        comments: Math.floor(Math.random() * 100) + 10,
        readTime: `${Math.floor(Math.random() * 15) + 5} دقیقه`,
        difficulty: ["مقدماتی", "متوسط", "پیشرفته"][postId % 3],
        progress: Math.floor(Math.random() * 100),
        rating: (Math.random() * 2 + 3).toFixed(1),
        createdAt: new Date(
          Date.now() - Math.random() * 31536000000,
        ).toISOString(),
        tags: ["NLP", "هوش مصنوعی", "پردازش متن"],
      });
    }

    return {
      posts: mockPosts,
      total: 251,
      page: page,
    };
  }

  private getMockNLPost(id: number): NLPost {
    return {
      id: id,
      title: `پروژه NLP شماره ${id}: تحلیل احساسات متن فارسی`,
      description: `این پروژه بر پردازش زبان طبیعی و تحلیل احساسات در متن‌های فارسی تمرکز دارد. از تکنیک‌های پیشرفته یادگیری ماشین استفاده می‌کند.`,
      category: ["تحلیل احساسات", "طبقه‌بندی متن", "تشخیص موجودیت"][id % 3],
      author: `محقق ${id}`,
      views: Math.floor(Math.random() * 10000) + 1000,
      likes: Math.floor(Math.random() * 500) + 50,
      comments: Math.floor(Math.random() * 100) + 10,
      readTime: `${Math.floor(Math.random() * 15) + 5} دقیقه`,
      difficulty: ["مقدماتی", "متوسط", "پیشرفته"][id % 3],
      progress: Math.floor(Math.random() * 100),
      rating: (Math.random() * 2 + 3).toFixed(1),
      createdAt: new Date(
        Date.now() - Math.random() * 31536000000,
      ).toISOString(),
      tags: ["NLP", "هوش مصنوعی", "پردازش متن"],
    };
  }

  // ========== متدهای Services ==========

  // متد جدید برای دریافت سرویس‌ها
  async getServices(): Promise<Service[]> {
    try {
      const response: AxiosResponse = await this.client.get("/services");
      return response.data;
    } catch (error) {
      console.warn("API /services failed, using mock data");
      return this.getMockServices();
    }
  }

  // متد Mock برای سرویس‌ها
  private getMockServices(): Service[] {
    const categories = [
      "پردازش تصویر",
      "پردازش متن",
      "تبدیل صوت",
      "تحلیل داده",
      "یادگیری ماشین",
    ];

    return Array.from({ length: 26 }, (_, i) => ({
      id: i + 1,
      name: `سرویس ${String.fromCharCode(65 + i)}: ${
        [
          "تشخیص چهره هوشمند",
          "تبدیل متن به گفتار",
          "ترجمه عصبی",
          "خلاصه‌ساز متون",
          "تولید کد خودکار",
          "تحلیل احساسات",
          "تشخیص اشیا",
          "پاسخگوی هوشمند",
          "تولید تصویر هنری",
          "تشخیص کلاهبرداری",
          "پیش‌بینی بازار",
          "تشخیص پزشکی",
          "بهینه‌سازی کد",
          "تولید محتوا",
          "دستیار صوتی",
          "تحلیل ویدیو",
          "تشخیص پلاک",
          "تجزیه احساسات صوتی",
          "تشخیص دستخط",
          "تولید موسیقی",
          "تشخیص اسپم",
          "پیشنهاد هوشمند",
          "تشخیص زبان بدن",
          "تولید زیرنویس",
          "تحلیل شبکه‌های اجتماعی",
          "دستیار برنامه‌نویسی",
        ][i]
      }`,
      description: `این سرویس شماره ${i + 1} یکی از ۲۶ سرویس پلتفرم TetraSaaS است که ${["پردازش تصویر", "پردازش متن", "تبدیل صوت"][i % 3]} را با دقت بالا ارائه می‌دهد.`,
      category: categories[i % categories.length],
      price: Math.floor(Math.random() * 900 + 100),
      rating: (Math.random() * 2 + 3).toFixed(1),
      status: ["فعال", "در حال توسعه", "آزمایشی"][i % 3],
      icon: [
        "👁️",
        "🗣️",
        "🔤",
        "📄",
        "💻",
        "😊",
        "📷",
        "🤖",
        "🎨",
        "🛡️",
        "📈",
        "🏥",
        "⚡",
        "✍️",
        "🎤",
        "🎥",
        "🚗",
        "🎵",
        "✏️",
        "🎼",
        "🚫",
        "🎯",
        "👥",
        "📝",
        "🌐",
        "🔧",
      ][i],
    }));
  }
}

// ایجاد یک نمونه سینگلتون
const apiClient = new APIClient(
  process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://tetrashop-projects.vercel.app/api",
);

export default apiClient;
