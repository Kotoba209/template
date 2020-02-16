const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${resolve('./src/styles/main.less')}";`,
        },
        // prependData: '@import "~@/styles/main.less";',
      },
    },
  },
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      minimizer: [new TerserPlugin({ terserOptions: { compress: { drop_console: true } } })],
    },
  },
  chainWebpack(config) {
    config.module
      .rule('svg')
      .exclude
      .add(resolve('src/assets/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include
      .add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();
  },
};
