/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  output: 'standalone',
  trailingSlash: true,  // ← 추가
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.networkkings.website' }],
        destination: 'https://networkkings.website/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;