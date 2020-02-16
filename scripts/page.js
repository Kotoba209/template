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
if (!model) {
  console.log('用法：yarn page [modelName] [filename]');
  process.exit(0);
}
// const modelCap = inflected.camelize(model);
const modelPlur = inflected.pluralize(model);

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

<style module lang="less">
.${filename} {}
</style>
`;

const dir = `./src/views/${model}`;
mkdirIfNotExists(dir);
process.chdir(dir);

fs.writeFileSync(`${filename}.vue`, template);

console.log('Don\'t forget to add route to @src/router/index.js');

console.log(`{
  path: '/${modelPlur}',
  name: '${filename}',
  component: () => import(/* webpackChunkName: "${filename}" */ '@/views/${model}/${filename}.vue'),
},`);
process.exit(0);
