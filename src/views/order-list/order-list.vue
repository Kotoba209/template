<template>
  <div :class="$style['order']">
    <van-tabs
      v-model="active"
      sticky
    >
      <van-tab title="全部">
        <order-item />
      </van-tab>
      <van-tab title="待付款">
        <order-item />
      </van-tab>
      <van-tab title="待发货">
        <order-item />
      </van-tab>
      <van-tab title="待收获">
        <order-item />
      </van-tab>
      <van-tab title="已完成">
        <order-item />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  Button,
  Tab,
  Tabs,
} from 'vant';
import OrderItem from './components/order-item';

Vue.use(Button)
  .use(Tab)
  .use(Tabs);

export default {
  name: 'order',
  metaInfo: { title: '我的订单' },
  components: {
    OrderItem,
  },
  data() {
    return {
      active: 0,
    };
  },
  created() { },
  computed: {},
};
</script>

<style module lang="less">
.order {
  :global {
    .van-tab {
      max-width: 150px;
    }
  }
}
</style>
