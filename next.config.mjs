/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },

  distDir: process.env.DIST ?? ".next",
}

export default nextConfig
