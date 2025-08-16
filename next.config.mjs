import { NextResponse } from 'next/server';

export default {
  reactStrictMode: true,
  images: {
    domains: [], // Replace with your image domains
  },
  experimental: {
    optimizeCss: true
},
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
},
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
},
          {
            key: 'Referrer-Policy',
            value: 'no-referrer'
},
        ]
},
    ];
  },
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/about-us', // Custom about page
      },
    ];
  }
};