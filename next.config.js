/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // غیرفعال کردن کش برای Termux
  webpack: (config, { isServer, dev }) => {
    if (dev) {
      config.cache = false;
    }
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        child_process: false,
      };
    }
    return config;
  },
  // غیرفعال کردن TypeScript و ESLint هشدارها
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
