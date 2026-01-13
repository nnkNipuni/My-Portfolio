/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'via.placeholder.com', pathname: '/**' },
    ],
  },
  // Allowlist dev origins for cross-origin requests in development.
  // Update these if your local IP or port changes.
  allowedDevOrigins: ['http://localhost:3002', 'http://192.168.55.251:3002'],
}

module.exports = nextConfig
