<template>
  <div :class="$style['product-detail']">
    <van-swipe
      :autoplay="3000"
      :width="400"
      :height="400"
    >
      <van-swipe-item
        v-for="(image, index) in images"
        :key="index"
      >
        <img
          v-lazy="image"
          width="400px"
          height="100%"
        />
      </van-swipe-item>
    </van-swipe>
    <van-cell>
      <div slot="title">
        <van-tag
          round
          type="danger"
        >包邮</van-tag>
        <span :class="$style.name">金都一号(5斤装)</span>
      </div>
      <div
        :class="$style.label"
        slot="label"
      >
        <span :class="$style.price">￥68.80</span>
        <span>销量： 233件</span>
      </div>
    </van-cell>
    <div :class="$style.date">
      <van-cell
        title="乐东积分商城Vue"
        label="2019-09-11 16:36:00"
      />
    </div>
    <div :class="$style.spec">
      <van-cell
        title="选择：规格名称"
        is-link
        @click="showBase = !showBase"
      />
    </div>
    <van-divider :style="{ color: '#ff8400', borderColor: '#ff8400', padding: '0 16px' }">
      产品详情
    </van-divider>
    <!-- <div v-html="html"></div> -->
    <van-goods-action>
      <van-goods-action-icon
        icon="wap-home"
        text="首页"
        color="#000"
      />
      <van-goods-action-icon
        icon="phone"
        text="客服"
        color="#000"
      />
      <van-goods-action-icon
        icon="cart"
        text="购物车"
        color="#000"
      />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
      />
    </van-goods-action>
    <van-sku
      v-model="showBase"
      :sku="skuData.sku"
      :goods="skuData.goods_info"
      :goods-id="skuData.goods_id"
      :hide-stock="skuData.sku.hide_stock"
      :initial-sku="initialSku"
      reset-stepper-on-hide
      reset-selected-sku-on-hide
      disable-stepper-input
      :close-on-click-overlay="closeOnClickOverlay"
      :custom-sku-validator="customSkuValidator"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import {
  Button,
  Swipe,
  SwipeItem,
  Lazyload,
  Cell,
  Tag,
  Divider,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Sku,
} from 'vant';
import skuData from './TestData';

Vue.use(Button)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Cell)
  .use(Tag)
  .use(Divider)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(Sku);

export default {
  name: 'product-detail',
  metaInfo: { title: '商品详情' },
  data() {
    return {
      images: [
        'http://shoptest.zhihuasoft.com/images/e0/4f/58/e4/e04f58e4ff715b75beaa040080bddf37.png',
        'http://shoptest.zhihuasoft.com/images/1a/7c/8f/35/1a7c8f35d39ff24d585eb4d04c2a5d03.png',
        'http://shoptest.zhihuasoft.com/images/17/88/f0/ad/1788f0add4c28644127ffdd77e1a9ca1.png',
      ],
      skuData,
      showBase: false,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      closeOnClickOverlay: true,
      initialSku: {
        s1: '30349',
        s2: '1193',
        selectedNum: 3,
      },
      customSkuValidator: () => '请选择商品规格!',
    };
  },
  created() { },
  computed: {},
  methods: {
    onBuyClicked(data) {
      // this.$toast('buy:' + JSON.stringify(data));
      console.log(JSON.stringify(data));
    },

    onAddCartClicked(data) {
      // this.$toast('add cart:' + JSON.stringify(data));
      console.log(data, '<-data->');
    },
  },
};
</script>

<style module lang="less" src="./product-detail.module.less" />
