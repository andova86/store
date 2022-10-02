/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fakestoreapi.com','https://fakestoreapi.com/','api.lorem.space','https://api.lorem.space'],
  },
  staticPageGenerationTimeout: 1500
}

module.exports = nextConfig
