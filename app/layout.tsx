import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TetraSaaS Platform",
  description: "پلتفرم سرویس‌های هوش مصنوعی با ۲۵۱ پروژه NLP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700&display=swap"
        />
      </head>
      <body
        className="bg-gray-50"
        style={{ fontFamily: "'Vazirmatn', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
