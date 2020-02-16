import path from 'path';

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
      api: resolve('src/api'),
    },
  },
};
