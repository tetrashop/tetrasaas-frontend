"use client";

import { useState } from "react";

export default function ReloadButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleReload = () => {
    setIsLoading(true);
    // شبیه‌سازی بارگذاری
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <button
      onClick={handleReload}
      disabled={isLoading}
      className={`text-sm ${isLoading ? "text-gray-500 cursor-wait" : "text-blue-600 hover:text-blue-800 underline"}`}
    >
      {isLoading ? "در حال بارگذاری..." : "تلاش مجدد برای اتصال به API"}
    </button>
  );
}
