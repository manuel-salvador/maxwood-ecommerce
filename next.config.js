/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.shopify.com', 'm.media-amazon.com'],
  },
};

module.exports = nextConfig;
