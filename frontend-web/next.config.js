/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'https://www.raw.githubusercontent.com']
  },
  env: {
    NEXT_PRODUCTION: process.env.NEXT_PRODUCTION
  }
};

module.exports = nextConfig;
