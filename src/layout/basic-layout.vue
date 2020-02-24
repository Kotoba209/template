<template>
  <div id="basic" :class="$style.basic">
    <router-view />
    <van-tabbar
      v-if="activeTab !== undefined"
      v-model="activeTab"
      :safe-area-inset-bottom="true"
      active-color="#fc5859"
    >
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
  metaInfo() {
    return { title: this.title };
  },
  data() {
    const { tabIndex, title } = this.$route.meta;
    return {
      title,
      activeTab: tabIndex,
    };
  },
};
</script>
<style module lang="less">
.basic {
  padding-bottom: 20vw;
  :global {
    .van-tabbar::before {
      content: '';
      position: absolute;
      background-color: #ddd;
      display: block;
      z-index: 1;
      top: 0;
      right: auto;
      bottom: auto;
      left: 0;
      width: 100%;
      height: 1px;
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
  }
}
</style>
