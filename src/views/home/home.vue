<template>
  <div :class="$style.home">
    <loading :loading="loading">
      <van-tabs v-model="active">
        <van-tab v-for="item in items"
                 :key="item.text"
                 :title="item.text">
          <div :class="$style['desc-images']">
            <van-image width="100%"
                       height="150"
                       src="http://spic.zhihuasoft.com/image/topic_banner.jpg" />
          </div>

          <!-- <van-swipe :autoplay="3000"
                 :height='150'>
        <van-swipe-item v-for="(image, index) in images"
                        :key="index">
          <img v-lazy="image"
               width="100%"
               height="100%" />
        </van-swipe-item>
      </van-swipe> -->

          <div :class="$style['grid-list']">
            <van-grid :border="false">
              <van-grid-item v-for="item in GridData"
                             :key="item.text"
                             :text="item.text"
                             :to="item.link">
                <i slot="icon"
                   :class="[item.icon, $style.icon, $style[`${item.class}`]]"></i>
              </van-grid-item>
            </van-grid>
          </div>
          <!-- <van-notice-bar color="#f76a24"
                      background="#fff"
                      left-icon="info-o"
                      @click="$router.push('/account')">
        乐东旅游节大热爆款发售
        <div slot="left-icon" :class="$style['notice-icon']">
          <span :class="$style['notice-title']">
            商城头条
          </span>
        </div>
      </van-notice-bar> -->
          <van-row type="flex"
                   justify="center">
            <van-col span="10"
                     :class="$style['left-item']">
              <van-image width="100%"
                         height="100%"
                         src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </van-col>
            <van-col :class="$style['right-items']"
                     span="16">
              <van-grid icon-size=40
                        :column-num="2"
                        :border="false">
                <van-grid-item v-for="i in 4"
                               :key="i"
                               icon="photo-o"
                               text="文字">
                  <van-image slot="icon"
                             width="100%"
                             height="100%"
                             src="https://img.yzcdn.cn/vant/cat.jpeg" />
                  <div slot="text">
                    <span :class="$style['product-name']">这是一款一款一款产品</span>
                    <span :class="$style['left-price']">
                      <span :class="$style['left-price-tag']">￥
                      </span>39.00</span>
                  </div>
                </van-grid-item>
              </van-grid>
            </van-col>
          </van-row>

          <van-swipe :autoplay="3000"
                     :height='150'>
            <van-swipe-item v-for="(image, index) in images"
                            :key="index">
              <img v-lazy="image"
                   width="100%"
                   height="100%" />
            </van-swipe-item>
          </van-swipe>

          <div :class="$style.recommend">
            <van-cell title="爆款推荐">
              <van-icon size="18px"
                        slot="icon"
                        name="fire"
                        color="#fc5859" />
            </van-cell>
          </div>

          <!-- <van-card v-for="item in 4" :key="item" desc="产地: 海南"
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
          <van-icon color="#fff" name="cart" />
        </div>
      </van-card> -->
          <Product />
          <van-cell-group :class="$style['product-model']">
            <van-cell title="海产品"
                      is-link
                      value="更多" />
            <div :class="$style['model-image']">
              <van-image width="100%"
                         height="150"
                         src="http://spic.zhihuasoft.com/image/topic_banner.jpg" />
            </div>
            <van-grid :border="false"
                      :column-num="2"
                      :class="$style['product-list']">
              <van-grid-item v-for="item in 4"
                             :key="item"
                             text="文字">
                <div slot="icon">
                  <van-image width="100%"
                             height="100%"
                             src="http://api.shop.zhihuasoft.com/images/8c/79/ee/90/8c79ee90313117bea1ccc1cddc3627e8.png" />
                  <div :class="$style.decorator">
                    <van-icon name="fire"
                              size="14px" />
                    <span :class="$style.decoratorText">推荐</span>
                  </div>
                </div>
                <div :class="$style['grid-bottom']"
                     slot="text">
                  <div :class="$style['product-title']">
                    【公益扶贫】乐东晶顺农民专业合作社的黑山羊（不支持线上交易）
                  </div>
                  <div :class="$style['price-cart']">
                    <span :class="$style.price">￥368.00</span>
                    <van-icon color="#fff"
                              size="8px"
                              name="cart" />
                  </div>
                </div>
              </van-grid-item>
            </van-grid>
          </van-cell-group>
        </van-tab>
      </van-tabs>
    </loading>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  Button,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  NoticeBar,
  Col,
  Row,
  Image,
  CellGroup,
  Cell,
  Icon,
  Card,
  Tag,
} from 'vant';
import Loading from '@/components/loading';
import Product from './components/product';

Vue.use(Button)
  .use(Tab)
  .use(Tabs)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Grid)
  .use(GridItem)
  .use(NoticeBar)
  .use(Col)
  .use(Row)
  .use(Image)
  .use(CellGroup)
  .use(Cell)
  .use(Icon)
  .use(Card)
  .use(Tag);

export default {
  name: 'home',
  components: {
    [Loading.name]: Loading,
    Product,
  },
  data() {
    return {
      active: 0,
      items: [
        {
          text: '精选推荐',
        },
        {
          text: '热带水果',
        },
        {
          text: '家禽',
        },
        {
          text: '测试',
        },
      ],
      images: [
        'http://spic.zhihuasoft.com/image/topic_banner.jpg',
        'http://spic.zhihuasoft.com/image/topic_banner.jpg',
      ],
      GridData: [
        { icon: 'iconfont icon-love', class: 'i-love', text: '战"疫"助农', link: '/topics/1' },
        { icon: 'iconfont icon-brand', class: 'i-brand', text: '九大品牌', link: '' },
        { icon: 'iconfont icon-gift-sm', class: 'i-gift', text: '新人专享', link: '' },
        { icon: 'iconfont icon-order', class: 'i-order', text: '订单管理', link: '/orders' },
        { icon: 'iconfont icon-fruit', class: 'i-fruit', text: '时令水果', link: '' },
        { icon: 'iconfont icon-fish', class: 'i-fish', text: '海产干货', link: '' },
        { icon: 'iconfont icon-meet', class: 'i-meet', text: '肉禽蛋奶', link: '' },
        { icon: 'iconfont icon-account', class: 'i-account', text: '会员中心', link: '/account' },
      ],
    };
  },
  computed: {
    loading() {
      return this.$store.state.loading.global;
    },
  },
};
</script>

<style module lang="less" src="./home.module.less" />
