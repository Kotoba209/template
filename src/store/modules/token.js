import { getToken, removeToken, setToken } from '@utils/auth';

const token = getToken() || '';

export default {
  namespaced: true,
  state: {
    token,
  },
  mutations: {
    set(state, newToken) {
      setToken(newToken);
      state.token = newToken;
    },
    remove(state) {
      removeToken();
      state.token = '';
    },
  },
};
