/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compress: true,
  trailingSlash: true,
  pageExtensions: ['ts', 'tsx'],
};

module.exports = nextConfig;
