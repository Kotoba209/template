import { defaultHandler } from '@/utils/request';
import {
  createUser, deleteUser, queryCurrentUser, queryUserItem, queryUserList, updateUser,
} from '@/api/user';
import Paging from '@/utils/paging';

const initialPaging = Paging.initialValue();

export default {
  namespaced: true,
  state: {
    current: {},
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
    saveCurrent(state, data) {
      state.current = data;
    },
  },
  actions: {
    fetch({ commit }, params = {}) {
      return queryUserList(params)
        .then((data) => commit('saveList', data))
        .catch(defaultHandler);
    },
    view({ commit }, params = {}) {
      return queryUserItem(params)
        .then((data) => commit('saveProfile', data))
        .catch(defaultHandler);
    },
    add(_, params = {}) {
      return createUser(params).catch(defaultHandler);
    },
    update({ commit }, params = {}) {
      return updateUser(params)
        .then((data) => commit('updateListItem', data))
        .catch(defaultHandler);
    },
    remove({ commit }, params = {}) {
      return deleteUser(params)
        .then((data) => commit('deleteListItem', data))
        .catch(defaultHandler);
    },
    current({ commit }, params = {}) {
      return queryCurrentUser(params)
        .then((data) => commit('saveCurrent', data))
        .catch(defaultHandler);
    },
  },
};
