const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const inflected = require('inflected');

const mkdirIfNotExists = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
};

// eslint-disable-next-line import/no-extraneous-dependencies
const argv = require('minimist')(process.argv.slice(2));

const model = argv._[0];
const filename = argv._[1] || model;
const less = argv.less || false;
if (!model) {
  console.log('Tips:\nyarn page [modelName] [filename] [--less]');
  process.exit(0);
}
// const modelCap = inflected.camelize(model);
const modelPlur = inflected.pluralize(model);

const lessTemplate = `
@import '~@styles/global.less';

// .${filename} {
//   :global {}
// }
`;

const style = less ? `<style module lang="less" src="./${filename}.module.less" />`
  : `<style module lang="less">${lessTemplate}</style>`;

const template = `<template>
  <div :class="$style['${filename}']">
    ${filename}
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';

Vue.use(Button);

export default {
  name: '${filename}',
  metaInfo: { title: '' },
  data() {
    return {};
  },
  created() {},
  computed: {},
};
</script>

${style}
`;

const dir = `./src/views/${model}`;
mkdirIfNotExists(dir);
process.chdir(dir);

fs.writeFileSync(`${filename}.vue`, template);

if (less) {
  fs.writeFileSync(`${filename}.module.less`, lessTemplate);
}

console.log('\n1. 将路由定义添加到 @src/router/index.js');

console.log(`{
  path: '/${modelPlur}',
  name: '${filename}',
  component: () => import(/* webpackChunkName: "${filename}" */ '@/views/${model}/${filename}.vue'),
},`);
process.exit(0);
