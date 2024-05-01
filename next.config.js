/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  compiler: {
    reactRemoveProperties: false,
    removeConsole: false,
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'assets', 'scss')],
  },
  //   images: {
  //     minimumCacheTTL: 60,
  //     domains: [
  //       'https://api.vicstore.ir',
  //       'api.vicstore.ir',
  //       'image.vicstore.ir',
  //       'https://admin.offexcelent.shop',
  //       'admin.offexcelent.shop',
  //       'api-vicstore.liara.run',
  //       'admin-vicstore.liara.run',
  //       'localhost',
  //     ],
  //   },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  //   env: {
  //     NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  //     NEXT_PUBLIC_PUBLIC_URL: process.env.NEXT_PUBLIC_PUBLIC_URL,
  //     NEXT_PUBLIC_IMG: process.env.NEXT_PUBLIC_IMG,
  //     NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  //   },
  //   output: 'standalone',
};
