const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

// صفحه اصلی
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html dir="rtl" lang="fa">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>TetraSaaS Platform</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-50">
      <header class="bg-blue-600 text-white p-4 shadow">
        <h1 class="text-2xl font-bold">🚀 TetraSaaS Platform</h1>
        <p class="text-sm">پلتفرم سرویس‌های هوش مصنوعی با ۲۵۱ پروژه NLP</p>
      </header>
      
      <main class="container mx-auto p-4">
        <div class="text-center py-12">
          <h1 class="text-4xl font-bold text-blue-700 mb-6">به پلتفرم TetraSaaS خوش آمدید</h1>
          <p class="text-xl text-gray-600 mb-8">پلتفرم کامل سرویس‌های هوش مصنوعی با <span class="font-bold text-green-600">۲۵۱ پروژه NLP</span></p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-2xl font-bold mb-4">📚 پروژه‌های NLP</h3>
              <p>دسترسی به ۲۵۱ پروژه کامل پردازش زبان طبیعی</p>
              <a href="/nlp" class="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">مشاهده پروژه‌ها</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-2xl font-bold mb-4">🛠️ سرویس‌ها</h3>
              <p>۲۶ سرویس تخصصی هوش مصنوعی در دسترس</p>
              <a href="/services" class="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">مشاهده سرویس‌ها</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-2xl font-bold mb-4">📊 آمار پلتفرم</h3>
              <p>آمار زنده و گزارش‌های عملکردی</p>
              <a href="/stats" class="inline-block mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition">مشاهده آمار</a>
            </div>
          </div>
        </div>
      </main>
      
      <footer class="bg-gray-800 text-white p-4 text-center mt-8">
        <p>© 2024 TetraSaaS. تمامی حقوق محفوظ است.</p>
      </footer>
    </body>
    </html>
  `);
});

// API endpoint برای فراخوانی API اصلی
app.get("/api/proxy/nlp", async (req, res) => {
  try {
    const response = await axios.get(
      "https://tetrashop-projects.vercel.app/api/nlp",
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "خطا در دریافت داده" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ سرور TetraSaaS روی پورت ${PORT} در حال اجراست`);
  console.log(`🌐 آدرس: http://localhost:${PORT}`);
});
