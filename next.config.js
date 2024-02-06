/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
    removeConsole: process.env.APP_ENV === 'production' && {
      exclude: ['error'],
    },
  },
}

module.exports = nextConfig
