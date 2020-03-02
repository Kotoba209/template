import Vue from 'vue';
import Vuex from 'vuex';

import getters from '@/store/getters';
import loading from '@/store/modules/loading';
import user from '@/store/modules/user';
import token from '@/store/modules/token';

Vue.use(Vuex);

function getLoadingActionPayload(action) {
  const [namespace = ''] = action.type.split('/');
  return {
    namespace,
    actionType: action.type,
  };
}

// 全局处理Loading状态
const loadingPlugin = (store) => {
  store.subscribeAction({
    before: (action) => {
      store.commit('loading/show', getLoadingActionPayload(action));
    },
    after: (action) => {
      store.commit('loading/hide', getLoadingActionPayload(action));
    },
  });
};

const store = new Vuex.Store({
  modules: {
    user,
    loading,
    token,
  },
  getters,
  plugins: [loadingPlugin],
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
