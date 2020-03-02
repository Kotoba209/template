<template>
  <div :class="$style['exception']">
    <image-wrapper
      :src="require('@/assets/images/404.png')"
      alt="404 not found"
      msg="访问出问题了~"
    >
    </image-wrapper>
    <div :class="$style.flexbox">
      <van-button
        :class="$style['success-btn']"
        @click="$router.go(-1)"
      >返回上一页</van-button>
    </div>
    <div :class="$style.flex">
      <van-button
        :class="$style['home-btn']"
        @click="$router.replace('/')"
      >返回首页</van-button>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant';
import Vue from 'vue';

Vue.use(Button);

export default {
  name: 'exception',
  // metaInfo: { title: '404' },
  components: {
    // 'image-wrapper': ImageWrapper,
  },
};
</script>

<style module lang="less" src='./404.module.less' >
</style>
