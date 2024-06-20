// next.config.js

module.exports = {
  /* Custom webpack configuration */
  webpack: (config, { dev, isServer }) => {
    // Modify webpack configuration here
    return config;
  },
  images: {
    domains: ['localhost', 'res.cloudinary.com', 'yt3.googleusercontent.com', 'moviesmagazine.onrender.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.moviesmagazine.onrender.com/',
        permanent: true,
      },
    ];
  },
};
