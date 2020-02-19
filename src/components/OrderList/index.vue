<template>
  <div :class="$style['index']">
    <!-- v-model="loading" -->
    <van-list lass="order-list-component">
              <!-- @load="onLoad" -->
      <van-cell-group v-for="i in 3" :key="i">
        <van-cell title="2020-02-14 19:17:30"
                  value="未支付"
                  :class="$style.header" />
        <van-card thumb="product.product_url"
                  currency=""
                  v-for="i in 2"
                  :key="i"
                  centered>
          <div :class="$style['goods-desc']"
               slot="title">
            <div :class="$style['goods-name']">菠萝蜜(17-20斤)菠萝蜜(17-20斤)菠萝蜜</div>
            <div :class="$style['goods-price']">¥ 100.00
              <div :class="$style['goods-num']">x1</div>
            </div>
          </div>
          <div :class="$style.desc" slot="desc">5斤 省外</div>
        </van-card>
        <van-cell :class="$style.footer">
          <div :class="$style.stats">
            <span class="qty">共2件商品，合计:</span>
            <span :class="$style['price-sum']">￥ 20</span>（含运费￥ 0.00）
          </div>
          <div :class="$style['btn-wrap']">
            <van-button size="small">删除</van-button>
          </div>
        </van-cell>
      </van-cell-group>
    </van-list>
  </div>
</template>

<script>
import {
  List,
  Cell,
  CellGroup,
  Card,
  Button,
} from 'vant';

export default {
  name: 'index',
  components: {
    [List.name]: List,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Card.name]: Card,
    [Button.name]: Button,
  },
  props: {},
};
</script>

<style module lang="less">
.index {
  :global {
    .van-cell-group {
      padding-bottom: 12px;
      margin-bottom: 16px;
      .van-card {
        background-color: #fff;
        border-bottom: 1px solid #f2f3f5;
        .van-card__title {
          font-size: 28px;
        }
        .van-card__bottom {
          font-size: 24px;
          margin-top: 32px;
        }
      }
    }
  }
}
.desc{
  padding-top: 10px;
  color: #888;
  font-size: 30px;
  line-height: 1.5;
}
.header {
  font-size: 28px;
  :global {
    .van-cell__title {
      flex: 3;
      color: #555;
      font-size: 26px;
    }
    .van-cell__value {
      color: red;
      font-size: 24px;
    }
  }
}
.stats {
  text-align: right;
  color: #000;
}
.price-sum {
  color: rgb(252, 88, 89);
}
.footer {
  padding: 0 15px;
}
.goods-desc {
  display: flex;
  justify-content: space-between;
}
.goods-name,
.goods-price {
  display: inline-block;
}
.goods-name {
  flex: 2;
  font-size: 32px;
  font-weight: 500;
  color: #000;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-price {
  font-size: 32px;
  flex: 1;
  text-align: right;
}
.goods-price-text {
  font-size: 32px;
}
.goods-num {
  text-align: right;
  font-size: 26px;
  color: #888;
}
.btn-wrap {
  display: flex;
  justify-content: flex-end;
  margin-top: 22px;
  :global {
    .van-button {
      color: #fff;
      background-color: #e94f4f;
      border-radius: 10px;
    }
  }
}
</style>
