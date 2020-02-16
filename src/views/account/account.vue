<template>
  <div :class="$style['account']">
    account
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';

Vue.use(Button);

export default {
  name: 'account',
  metaInfo: { title: '' },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('user/current');
  },
  computed: {},
};
</script>

<style module lang="less">
.account {}
</style>
