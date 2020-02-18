import Vue from 'vue';
import '@/assets/icons';
import App from './App';
import router from './router';
import store from './store';
import './components';
import * as filters from './filters';
import '@/styles/global.less';

Object.keys(filters)
  .forEach((key) => {
    Vue.filter(key, filters[key]);
  });

Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//   next();
// });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
