// next.config.js
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['static.vecteezy.com', 'img.freepik.com', 'res.cloudinary.com'],
  },
};

module.exports = withNextIntl(nextConfig);
