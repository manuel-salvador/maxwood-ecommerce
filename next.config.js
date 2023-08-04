/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.shopify.com', 'm.media-amazon.com', 'www.mueblespsh.com.ar'],
  },
};

module.exports = nextConfig;
