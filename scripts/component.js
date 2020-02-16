const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const inflected = require('inflected');

const mkdirIfNotExists = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
};

// eslint-disable-next-line import/no-extraneous-dependencies
const argv = require('minimist')(process.argv.slice(2));

const component = argv._[0];
const dirName = argv._[1] || component;
if (!component) {
  console.log('用法：yarn component [componentName] [dirName]');
  process.exit(0);
}
const template = `<template>
  <div :class="$style['${component}']">
  </div>
</template>

<script>
export default {
  name: '${component}',
  components: {},
  props: {},
};
</script>

<style module lang="less">
.${component} {}
</style>
`;

const dir = `./src/components/${dirName}`;
mkdirIfNotExists(dir);
process.chdir(dir);

fs.writeFileSync(`${component}.vue`, template);

const cap = inflected.camelize(inflected.underscore(component), true);
console.log('Don\'t forget to add component to @src/components/index.js\n');
console.log(`
import ${cap} from './${dirName}/${component}';

Vue.component('${component}', ${cap});
`);
process.exit(0);
