/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wordpress-1302520-5885348.cloudwaysapps.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
