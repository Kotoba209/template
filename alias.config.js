const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  resolve: {
    alias: {
      '@api': resolve('src/api'),
      '@assets': resolve('src/assets'),
      '@components': resolve('src/components'),
      '@filter': resolve('src/filter'),
      '@store': resolve('src/store'),
      '@styles': resolve('src/styles'),
      '@utils': resolve('src/utils'),
      '@views': resolve('src/views'),
      '@': resolve('src'),
    },
  },
};
