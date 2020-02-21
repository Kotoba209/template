# vue-mobile-seed

## 辅助代码生成脚本

### Vuex Store
```bash
yarn model [modelName]
```
> 在`@store/modules`下生成`[modelName].js`文件

### View

```bash
yarn page [modelName] [filename] [--less]
```
> 在`@views/[modelName]`下生成`[filename].vue`文件
> 不传入[filename]，则`[filename]`=`[modelName]`
> 传入[--less]则生成独立的less文件

## Component
```bash
yarn component [dirName] [componentName] -p=[page]
```
> 在`@components/[dirName]下`下生成`[componentName].vue`文件
> 如果传入`[page]`，则在`@views/[dirName]`下生成
> 不传入[filename]，则`[filename]`=`[modelName]`

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
