/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/second-page': { page: '/second-page' },
    }
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig
