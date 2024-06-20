// // next.config.js

// module.exports = {
//   /* Custom webpack configuration */
//   webpack: (config, { dev, isServer }) => {
//     // Modify webpack configuration here
//     return config;
//   },
//   images: {
//     domains: ['localhost', 'res.cloudinary.com', 'yt3.googleusercontent.com', 'moviesmagazine.onrender.com'],
//   },
//   async redirects() {
//     return [
//       {
//         source: '/',
//         destination: 'https://www.moviesmagazine.onrender.com/',
//         permanent: true,
//       },
//     ];
//   },
// };

// next.config.js
module.exports = {
  /* Custom webpack configuration */
  webpack: (config, { dev, isServer }) => {
  // Modify webpack configuration here
  return config;
  },
  images: {
  domains: ['localhost', 'res.cloudinary.com', 'yt3.googleusercontent.com','moviesmagazine.onrender.com'], // Add 'uwatchfreeonline.vercel.app' to the domains array
  },
  };