import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';
import Home from '@/views/home/home';
import BasicLayout from '@/layout/basic-layout';

Vue.use(VueRouter);
Vue.use(Meta);

const routes = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/account',
        name: 'account',
        component: () => import(/* webpackChunkName: "account" */ '@/views/account/account.vue'),
      },
      {
        path: '/order',
        name: 'order',
        component: () => import(/* webpackChunkName: "order" */ '@/views/order/order.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
