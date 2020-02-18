<template>
  <div id="basic" :class="$style.basic">
    <router-view />
    <van-tabbar v-model="activeTab" :safe-area-inset-bottom="true" active-color="#fc5859">
      <van-tabbar-item icon="shop-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/account">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);

export default {
  name: 'BasicLayout',
  data() {
    return {
      activeTab: 0,
    };
  },
};
</script>
<style module lang="less">
.basic{
  padding-bottom: 20vw;
}
</style>
