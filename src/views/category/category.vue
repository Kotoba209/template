<template>
  <div :class="$style['category']">
    <van-search placeholder="请输入搜索关键词" />
    <van-tree-select
      :items="items"
      :main-active-index.sync="active"
    >
      <van-list
        slot="content"
        v-if="active === 0"
        :class="$style['right-content']"
      >
        <van-grid :column-num="3">
          <van-grid-item
            v-for="value in 6"
            :key="value"
            icon="photo-o"
            text="文字"
            to="/product"
          >
            <van-image
              slot="icon"
              width="100%"
              height="100%"
              src="http://shoptest.zhihuasoft.com/images/8c/79/ee/90/8c79ee90313117bea1ccc1cddc3627e8.png"
              alt="商品图片"
            />
            <span
              slot="text"
              :class="$style['goods-title']"
            >
              【公益扶贫】万车村万盛养殖专业合作社的五脚猪（不支持线上交易）
            </span>
          </van-grid-item>
        </van-grid>
      </van-list>
    </van-tree-select>
    <powered-by />
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
  Grid,
  GridItem,
} from 'vant';


Vue.use(Button)
  .use(List)
  .use(Cell)
  .use(Image)
  .use(TreeSelect)
  .use(Search)
  .use(Grid)
  .use(GridItem);

export default {
  name: 'category',
  // metaInfo: { title: '商品分类' },
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
