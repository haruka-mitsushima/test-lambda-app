/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aws-lambda-images-418581597558.s3.ap-northeast-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
