/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['asere-services.com','https://asere-services.com/','api.lorem.space','https://api.lorem.space'],
  },
  staticPageGenerationTimeout: 1500
}

module.exports = nextConfig
