<template>
  <div :class="$style['checkout']">
    <div :class="$style.address">
      <van-cell-group>
        <van-cell
          title="单元格"
          label="海南澄迈县金江镇嘉乐镇"
          is-link
          to="/addresses"
        >
          <div
            :class="$style['name-phone']"
            slot="title"
          >
            <span>家家乐</span>
            <span :class="$style.phone">186663333</span>
          </div>
        </van-cell>
      </van-cell-group>
    </div>
    <div :class="$style.goods">
      <div :class="$style['goods-title']">
        <van-cell title="订单商品" />
      </div>
      <van-cell
        v-for="i in 3"
        :key="i"
      >
        <van-card
          num=" 2"
          price="2.00"
          title="金都一号(8斤装)"
          thumb="http://shoptest.zhihuasoft.com/images/2a/f1/92/a8/2af192a885974cee3c27dbc30c233576.png"
        >
        </van-card>
      </van-cell>
      <div :class="$style.amount">
        <van-cell
          title="总金额"
          value="￥ 1250"
        />
      </div>
    </div>
    <van-submit-bar
      :price="3050"
      label="应付"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import {
  Button,
  Cell,
  SubmitBar,
  Card,
  CellGroup,
} from 'vant';

Vue.use(Button)
  .use(Cell)
  .use(SubmitBar)
  .use(Card)
  .use(CellGroup);

export default {
  name: 'checkout',
  metaInfo: { title: '订单结算' },
  data() {
    return {};
  },
  created() { },
  computed: {},
  methods: {
    onSubmit() { },
  },
};
</script>

<style module lang="less" src="./checkout.module.less" />
