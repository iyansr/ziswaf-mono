/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['ik.imagekit.io'],
  },
  transpilePackages: ['ui'],
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
      },
    ];
  },
};
