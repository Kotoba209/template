const fs = require('fs');

// eslint-disable-next-line import/no-extraneous-dependencies
const inflected = require('inflected');

// eslint-disable-next-line import/no-extraneous-dependencies
const argv = require('minimist')(process.argv.slice(2));

const model = inflected.camelize(inflected.underscore(argv._[0]), false);
if (!model) {
  console.log('用法：yarn model [modelName]');
  process.exit(0);
}
const modelCap = inflected.camelize(model);
const modelPlur = inflected.pluralize(model);

const modelTemplate = `import { defaultHandler } from '@/utils/request';
import {
  create${modelCap}, delete${modelCap}, query${modelCap}Item, query${modelCap}List, update${modelCap},
} from '@/api/${model}';
import Paging from '@/utils/paging';

const initialPaging = Paging.initialValue();

export default {
  namespaced: true,
  state: {
    list: [],
    profile: {},
    paging: initialPaging,
  },
  mutations: {
    saveList(state, data) {
      const { list = {}, paging = initialPaging } = data;
      state.list = list;
      state.paging = paging;
    },
    saveProfile(state, data) {
      state.profile = data.profile || {};
    },
    resetList(state) {
      state.list = [];
      state.paging = initialPaging;
    },
    resetProfile(state) {
      state.profile = {};
    },
    updateListItem(state, data) {
      state.list = state.list.map((val) => (val.id === data.id ? { ...val, ...data } : val));
    },
    updateProfile(state, data) {
      state.profile = { ...state.profile, ...data };
    },
    deleteListItem(state, data) {
      state.list = state.list.filter((val) => val.id !== data.id);
    },
  },
  actions: {
    fetch({ commit }, params = {}) {
      return query${modelCap}List(params)
        .then((data) => commit('saveList', data))
        .catch(defaultHandler);
    },
    view({ commit }, params = {}) {
      return query${modelCap}Item(params)
        .then((data) => commit('saveProfile', data))
        .catch(defaultHandler);
    },
    add(_, params = {}) {
      return create${modelCap}(params).catch(defaultHandler);
    },
    update({ commit }, params = {}) {
      return update${modelCap}(params)
        .then((data) => commit('updateListItem', data))
        .catch(defaultHandler);
    },
    remove({ commit }, params = {}) {
      return delete${modelCap}(params)
        .then((data) => commit('deleteListItem', data))
        .catch(defaultHandler);
    },
  },
};
`;

const apiTemplate = `import http from '@/utils/http';

export function query${modelCap}List(params) {
  return http.get('/${modelPlur}', params);
}

export function query${modelCap}Item({ id, ...params }) {
  return http.get(\`/${modelPlur}/\${id}\`, params);
}

export function create${modelCap}(params) {
  return http.post('/${modelPlur}', params);
}

export function update${modelCap}({ id, ...params }) {
  return http.put(\`/${modelPlur}/\${id}\`, params);
}

export function delete${modelCap}(id) {
  return http.delete(\`/${modelPlur}/\${id}\`);
}
`;

process.chdir('./src/api');
fs.writeFileSync(`${model}.js`, apiTemplate);

process.chdir('../store/modules');
fs.writeFileSync(`${model}.js`, modelTemplate);

console.log('Don\'t forget to add module to @src/store/index.js');

process.exit(0);
