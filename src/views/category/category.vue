<template>
  <div :class="$style['category']">
    <van-search placeholder="请输入搜索关键词" />
    <van-tree-select
      :items="items"
      :main-active-index.sync="active"
    >
      <template slot="content">
        <van-list
          v-if="active === 0"
          :class="$style['right-content']"
        >
          <div
            :class="$style['goods-wrap']"
            v-for="i in 8"
            :key="i"
          >
            <van-image
              width="90"
              height="90"
              src="http://shoptest.zhihuasoft.com/images/8c/79/ee/90/8c79ee90313117bea1ccc1cddc3627e8.png"
              alt="商品图片"
            />
            <span :class="$style['goods-title']">
              【公益扶贫】万车村万盛养殖专业合作社的五脚猪（不支持线上交易）
            </span>
          </div>
        </van-list>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  Button,
  List,
  Cell,
  Image,
  TreeSelect,
  Search,
} from 'vant';


Vue.use(Button)
  .use(List)
  .use(Cell)
  .use(Image)
  .use(TreeSelect)
  .use(Search);

export default {
  name: 'category',
  metaInfo: { title: '商品分类' },
  data() {
    return {
      active: 0,
      items: [
        {
          text: '全部',
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
    };
  },
  created() { },
  computed: {},
};
</script>

<style module lang="less" src='./category.module.less'></style>
