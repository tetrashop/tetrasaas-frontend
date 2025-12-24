import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TetraSaaS Platform',
  description: 'پلتفرم سرویس‌های هوش مصنوعی با ۲۵۱ پروژه NLP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <style>{`
          body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700&display=swap');
          .persian-font { font-family: 'Vazirmatn', sans-serif; }
        `}</style>
      </head>
      <body className="bg-gray-50 persian-font">
        <header className="bg-blue-600 text-white p-4 shadow">
          <h1 className="text-2xl font-bold">🚀 TetraSaaS Platform</h1>
          <p className="text-sm">پلتفرم سرویس‌های هوش مصنوعی</p>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center mt-8">
          <p>© 2024 TetraSaaS. تمامی حقوق محفوظ است.</p>
        </footer>
      </body>
    </html>
  )
}
