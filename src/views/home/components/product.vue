<template>
  <div :class="$style['product']">
    <van-card v-for="item in 4"
              :key="item"
              desc="产地: 海南"
              price="2.00">
      <div :class="$style['thumb-wrap']"
           slot="thumb">
        <div :class="$style.decorator">
          <van-icon name="fire"
                    size="14px" />
          <span :class="$style.decoratorText">热销</span>
        </div>
        <van-image slot="icon"
                   width="100%"
                   height="100%"
                   src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div :class="$style['cart-title']"
           slot="title">
        <van-tag color="#fc5859">热销</van-tag>
        【爱心助农】乐东农家南瓜 特供精品农家南瓜先仅需3.50元特供精品农家南瓜先仅需3.50元
      </div>
      <div slot="num">
        <van-icon color="#fff"
                  name="cart" />
      </div>
    </van-card>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';

Vue.use(Button);

export default {
  name: 'product',
  components: {},
  props: {},
  methods: {},
};
</script>

<style module lang="less">
.product {
  :global {
    .van-card {
      background-color: #fff;
      margin-top: 0;
    }

    .van-card__thumb {
      width: 200px;
      height: 200px;
      position: relative;
    }

    .van-card__thumb img {
      border-radius: 0;
    }

    .van-card__desc {
      padding: 15px 0;
    }

    .van-card__bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .van-card__price {
      color: #fc5859;
      font-size: 32px;
    }
    .van-icon-cart {
      padding: 10px;
      background-color: #fc5859;
      border-radius: 50%;
    }
  }
}

.thumb-wrap {
  height: 100%;
}

.decorator {
  width: 108px;
  height: 42px;
  line-height: 42px;
  font-size: 24px;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  background-color: #fc5859;
  position: absolute;
  top: 18px;
  left: 0;
  color: #fff;
  display: flex;
  align-items: center;
  padding-left: 8px;
  z-index: 9999;
}

.decoratorText {
  margin-left: 8px;
}

.cart-title {
  font-size: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
