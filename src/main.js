import Vue from 'vue';
import '@/assets/icons';
import '@/assets/fonts/iconfont.css';
import { createToken } from '@api/token';
import { setToken } from '@utils/auth';
import App from './App';
import router from './router';
import store from './store';
import * as filters from './filters';
import './components';

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development') {
  setToken('oLENw05LJYxUD9_W5iQeoNvHSx88');
}

router.beforeEach((to, from, next) => {
  const { token = '' } = store.getters;
  if (token) {
    return next();
  }
  const { code } = to.query;
  const retoreUriKey = 'RESTORE_URI';
  if (!code) {
    localStorage.setItem(retoreUriKey, window.location.href);
    // prettier-ignore
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${process.env.VUE_APP_WECHAT_APPID}&redirect_uri=${encodeURIComponent(`${process.env.VUE_APP_REDIRECT_URI}`)}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`;
    return next(false);
  }
  createToken({ code })
    .then(data => {
      const { token: newToken = '' } = data;
      if (newToken) {
        store.commit('token/set', newToken);
        window.location.href = localStorage.getItem(retoreUriKey) || '/';
      } else {
        window.location.reload();
      }
    })
    .catch(() => {
      window.location.reload();
    });
  return next();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
