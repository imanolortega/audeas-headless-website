/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8888',
        pathname: '/wordpress/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: process.env.WORDPRESS_HOSTNAME,
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: process.env.WORDPRESS_HOSTNAME,
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'khaki-tiger-476478.hostingersite.com',
      },
      {
        hostname: 'keystoneacademic-res.cloudinary.com',
      },
      {
        hostname: 'adminaudeas.com',
      },
    ],
  },
}

export default nextConfig
