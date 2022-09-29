/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fakestoreapi.com','https://fakestoreapi.com/'],
  },
}

module.exports = nextConfig
