const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const inflected = require('inflected');

const mkdirIfNotExists = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
};

// eslint-disable-next-line import/no-extraneous-dependencies
const argv = require('minimist')(process.argv.slice(2));

const dirName = argv._[0];
const component = argv._[1] || dirName;
const page = argv.p;
if (!component) {
  console.log('Tips:\nyarn component [dirName] [componentName] -p=[page]');
  process.exit(0);
}
const template = `<template>
  <div :class="$style['${component}']">

  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';

Vue.use(Button);

export default {
  name: '${component}',
  components: {},
  props: {},
};
</script>

<style module lang="less">
// .${component} {}
</style>
`;

const dir = page ? `./src/views/${dirName}/components` : `./src/components/${dirName}`;
mkdirIfNotExists(dir);
process.chdir(dir);

fs.writeFileSync(`${component}.vue`, template);

const cap = inflected.camelize(inflected.underscore(component), true);
if (page) {
  console.log(`\n1. 将以下两行代码添加到文件 @src/components/index.js

  import ${cap} from './${dirName}/${component}';

  Vue.component('${component}', ${cap});
  `);
}

process.exit(0);
