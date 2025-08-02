/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net"
      },
      {
        hostname: 'storyset.com'
      },
      {
        hostname: 'avatars.githubusercontent.com'
      },
      {
        hostname: 'lh3.googleusercontent.com'
      }
    ]
  },
  devIndicators: false
};

export default nextConfig;
