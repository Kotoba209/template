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
        meta: { tabIndex: 0 },
      },
      {
        path: '/account',
        name: 'account',
        component: () => import(/* webpackChunkName: "account" */ '@/views/account/account.vue'),
        meta: { tabIndex: 3 },
      },
      {
        path: '/order',
        name: 'order',
        component: () => import(/* webpackChunkName: "order" */ '@/views/order-list/order-list.vue'),
        meta: { tabIndex: 3 },
      },
      {
        path: '/category',
        name: 'category',
        component: () => import(/* webpackChunkName: "category" */ '@/views/category/category.vue'),
        meta: { tabIndex: 1 },
      },
      {
        path: '/bbs',
        name: 'bbs',
        component: () => import(/* webpackChunkName: "bbs" */ '@/views/bbs/bbs-section.vue'),
        meta: { tabIndex: 3 },
      },
      {
        path: '/bbs/:id',
        name: 'message',
        component: () => import(/* webpackChunkName: "message" */ '@/views/bbs/bbs-message.vue'),
        meta: { tabIndex: 3 },
      },
      {
        path: '/addresses',
        name: 'addresses',
        component: () => import(/* webpackChunkName: "address" */ '@/views/addresses/address-list.vue'),
        meta: { tabIndex: 3 },
      },
      {
        path: '/addresses/edit',
        name: 'edit',
        component: () => import(/* webpackChunkName: "edit" */ '@/views/addresses/address-edit.vue'),
        meta: { tabIndex: 3 },
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "cart" */ '@/views/cart/cart.vue'),
        meta: { tabIndex: 2 },
      },
      {
        path: '/checkout',
        name: 'checkout',
        component: () => import(/* webpackChunkName: "checkout" */ '@/views/checkout/checkout.vue'),
      },
    ],
  },
  {
    path: '/product',
    name: 'product-detail',
    component: () => import(/* webpackChunkName: "product-detail" */ '@/views/product/product-detail.vue'),
  },
  {
    path: '/exception/404',
    name: 'exception',
    component: () => import(/* webpackChunkName: "exception" */ '@/views/exception/404.vue'),
  },
  {
    path: '*',
    redirect: '/exception/404',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
