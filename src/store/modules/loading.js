export default {
  namespaced: true,
  state: {
    global: false,
    models: {},
    effects: {},
  },
  mutations: {
    show(state, payload) {
      const { namespace, actionType } = payload;
      state.global = true;
      state.models = {
        ...state.models,
        [namespace]: true,
      };
      state.effects = {
        ...state.effects,
        [actionType]: true,
      };
    },
    hide(state, payload) {
      const { namespace, actionType } = payload;
      state.global = false;
      state.models = {
        ...state.models,
        [namespace]: false,
      };
      state.effects = {
        ...state.effects,
        [actionType]: false,
      };
    },
  },
};
