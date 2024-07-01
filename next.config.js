/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //     ppr: 'incremental', // Partial Prerendering 部分预渲染
  //   },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.ko-fi.com',
        port: '',
        pathname: '/cdn/**',
      },
    ],
  },
};

module.exports = nextConfig;
