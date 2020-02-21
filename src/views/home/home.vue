<template>
  <div :class="$style.home">
    <loading :loading="loading">
      <h1 :class="$style.title">Home page</h1>
      <svg-icon :class="$style.user" icon-class="user" />
      <van-button block type="primary" @click="$router.push('/about')">About page</van-button>
    </loading>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';
import Loading from '@/components/loading';

Vue.use(Button);

export default {
  name: 'home',
  metaInfo: { title: '首页' },
  components: {
    [Loading.name]: Loading,
  },
  computed: {
    loading() {
      return this.$store.state.loading.global;
    },
  },
};
</script>

<style module lang="less" src="./home.module.less" />
