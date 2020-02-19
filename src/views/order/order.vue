<template>
  <div :class="$style['order']">
    <van-tabs v-model="active" sticky>
      <van-tab title="全部">
        <OrderList></OrderList>
      </van-tab>
      <van-tab title="待付款">
        <OrderList></OrderList>
      </van-tab>
      <van-tab title="待发货">
        <OrderList></OrderList>
      </van-tab>
      <van-tab title="待收获">
        <OrderList></OrderList>
      </van-tab>
      <van-tab title="已完成">
        <OrderList></OrderList>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import OrderList from '@/components/OrderList';
import {
  Button,
  Tab,
  Tabs,
} from 'vant';

Vue.use(Button)
  .use(Tab)
  .use(Tabs);

export default {
  name: 'order',
  metaInfo: { title: '我的订单' },
  components: {
    [OrderList.name]: OrderList,
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
  :global{
    .van-tab{
      max-width: 150px;
    }
  }
}
</style>
