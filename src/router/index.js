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
        component: () => import(/* webpackChunkName: "order" */ '@/views/order-list/order-list.vue'),
      },
      {
        path: '/category',
        name: 'category',
        component: () => import(/* webpackChunkName: "category" */ '@/views/category/category.vue'),
      },
      {
        path: '/bbs',
        name: 'bbs',
        component: () => import(/* webpackChunkName: "bbs" */ '@/views/bbs/bbs-section.vue'),
      },
      {
        path: '/bbs/:id',
        name: 'message',
        component: () => import(/* webpackChunkName: "message" */ '@/views/bbs/bbs-message.vue'),
      },
      {
        path: '/addresses',
        name: 'addresses',
        component: () => import(/* webpackChunkName: "address" */ '@/views/addresses/address-list.vue'),
      },
      {
        path: '/addresses/edit',
        name: 'edit',
        component: () => import(/* webpackChunkName: "edit" */ '@/views/addresses/address-edit.vue'),
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "cart" */ '@/views/cart/cart.vue'),
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
