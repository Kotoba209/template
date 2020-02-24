<template>
  <div :class="$style['shop-stats']">
    <div :class="$style.top">
      <van-card
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <div
          :class="$style.site"
          slot="title"
        >
          <span :class="$style['site-name']">保罗服务站</span>
          <span>上架商品0件</span>
        </div>
        <div
          :class="$style.person"
          slot="desc"
        >
          联系人：wang 18289353885
        </div>
      </van-card>
    </div>
    <van-tabs type="card">
      <van-tab title="畅销商品">
        <div :class="$style.goods">
          <van-cell
            v-for="i in 3"
            :key="i"
          >
            <van-card
              price="2.00"
              title="金都一号(8斤装)"
              thumb="http://shoptest.zhihuasoft.com/images/2a/f1/92/a8/2af192a885974cee3c27dbc30c233576.png"
            >
            </van-card>
          </van-cell>
        </div>
      </van-tab>
      <van-tab title="销量统计">
        <van-row
          type="flex"
          justify="center"
        >
          <van-col span="8">总销售额</van-col>
          <van-col span="8">销售件数</van-col>
          <van-col span="8">购买人数</van-col>
        </van-row>
        <van-row
          type="flex"
          justify="center"
          :class="$style.sta"
        >
          <van-col span="8">￥ 0</van-col>
          <van-col span="8">0</van-col>
          <van-col span="8">0</van-col>
        </van-row>
      </van-tab>
      <van-tab title="店铺信息">
        <van-cell title="店铺名称" value="保罗村服务站" />
        <van-cell title="联系人" value="wnag" />
        <van-cell title="联系电话" value="18289353885" />
        <van-cell title="店铺地址" value="baoluozhen" />
        <van-cell title="管理者" value="chan,admin" />
      </van-tab>
    </van-tabs>
    <powered-by />
  </div>
</template>

<script>
import Vue from 'vue';
import {
  Button,
  Card,
  Tab,
  Tabs,
  Cell,
  Col,
  Row,
} from 'vant';

Vue.use(Button)
  .use(Card)
  .use(Tab)
  .use(Tabs)
  .use(Cell)
  .use(Col)
  .use(Row);

export default {
  name: 'shop-stats',
  metaInfo: { title: '店铺数据统计' },
  data() {
    return {};
  },
  created() { },
  computed: {},
};
</script>

<style module lang="less" src="./shop-stats.module.less" />
