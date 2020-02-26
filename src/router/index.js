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
        meta: { tabIndex: 0, title: '首页' },
      },
      {
        path: '/account',
        name: 'account',
        component: () => import(/* webpackChunkName: "account" */ '@/views/account/account.vue'),
        meta: { tabIndex: 3, title: '我的' },
      },
      {
        path: '/category',
        name: 'category',
        component: () => import(/* webpackChunkName: "category" */ '@/views/category/category.vue'),
        meta: { tabIndex: 1, title: '产品分类' },
      },
      {
        path: '/bbs',
        name: 'bbs',
        component: () => import(/* webpackChunkName: "bbs" */ '@/views/bbs/bbs-section.vue'),
        meta: { tabIndex: 3, title: '论坛互动' },
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
        // prettier-ignore
        component: () => import(/* webpackChunkName: "address" */ '@/views/addresses/address-list.vue'),
        meta: { tabIndex: 3, title: '地址列表' },
      },
      {
        path: '/addresses/edit',
        name: 'edit',
        // prettier-ignore
        component: () => import(/* webpackChunkName: "edit" */ '@/views/addresses/address-edit.vue'),
        meta: { tabIndex: 3, title: '地址编辑' },
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "cart" */ '@/views/cart/cart.vue'),
        meta: { tabIndex: 2, title: '购物车' },
      },
      {
        path: '/checkout',
        name: 'checkout',
        component: () => import(/* webpackChunkName: "checkout" */ '@/views/checkout/checkout.vue'),
        meta: { tabIndex: 2, title: '订单结算' },
      },
      {
        path: '/shop',
        name: 'shop-login',
        component: () => import(/* webpackChunkName: "shop-home" */ '@/views/shop/shop-login.vue'),
        meta: { tabIndex: 3, title: '账号绑定' },
      },
      {
        path: '/shop-stats/:id',
        name: 'shop-stats',
        component: () => import(/* webpackChunkName: "shop-stats" */ '@/views/shop/shop-stats.vue'),
        meta: { tabIndex: 3 },
      },
      {
        path: '/qualification',
        name: 'qualification',
        // prettier-ignore
        component: () => import(/* webpackChunkName: "qualification" */ '@/views/qualification/qualification.vue'),
        meta: { tabIndex: 3, title: '企业资质' },
      },
    ],
  },
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "order" */ '@/views/order-list/order-list.vue'),
    meta: { title: '我的订单' },
  },
  {
    path: '/product',
    name: 'product-detail',
    // prettier-ignore
    component: () => import(/* webpackChunkName: "product-detail" */ '@/views/product/product-detail.vue'),
    meta: { title: '' },
  },
  {
    path: '/exception/404',
    name: 'exception',
    component: () => import(/* webpackChunkName: "exception" */ '@/views/exception/404.vue'),
    meta: { title: '404页面' },
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
