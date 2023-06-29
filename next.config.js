/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.endclothing.com',
        port: '',
        pathname: '/media/**',
      },
    ],
  },

}

module.exports = nextConfig
