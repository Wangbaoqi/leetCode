const withContentlayer = require('next-contentlayer').withContentlayer

/** @type {import('next').NextConfig} */

const nextConfig = {
  // distDir: 'build',
  typescript: {
    // ignoreBuildErrors: process.env.IS_VERCEL_ENV === "true",
    ignoreBuildErrors: true,
  },
}

module.exports = withContentlayer(nextConfig)
