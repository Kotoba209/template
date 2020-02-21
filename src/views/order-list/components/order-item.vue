<template>
  <div :class="$style['index']">
    <van-list>
      <van-panel
        v-for="i in 3"
        :key="i"
      >
        <van-cell
          slot="header"
          title="2020-02-14 19:17:30"
          value="未支付"
          :class="$style.header"
        />
        <van-card
          thumb="url"
          v-for="i in 2"
          :key="i"
          centered
        >
          <div
            :class="$style['goods-desc']"
            slot="title"
          >
            <div :class="$style['goods-name']">菠萝蜜(17-20斤)菠萝蜜(17-20斤)菠萝蜜</div>
            <div :class="$style['goods-price']">¥ 100.00
              <div :class="$style['goods-num']">x1</div>
            </div>
          </div>
          <div
            :class="$style.desc"
            slot="desc"
          >5斤 省外</div>
        </van-card>
        <van-cell
          slot="footer"
          :class="$style.footer"
        >
          <div :class="$style.stats">
            <span class="qty">共2件商品，合计:</span>
            <span :class="$style['price-sum']">￥ 20</span>（含运费￥ 0.00）
          </div>
          <div :class="$style['btn-wrap']">
            <van-button size="small">删除</van-button>
          </div>
        </van-cell>
      </van-panel>
    </van-list>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  List,
  Cell,
  CellGroup,
  Card,
  Button,
  Panel,
} from 'vant';

Vue.use(List)
  .use(Cell)
  .use(CellGroup)
  .use(Card)
  .use(Button)
  .use(Panel);

export default {
  name: 'index',
  components: {
  },
  props: {},
};
</script>

<style module lang="less" src='./order-item.module.less'></style>
