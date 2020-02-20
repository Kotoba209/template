<template>
  <div :class="$style['bbs']">
    <van-grid
      :gutter="10"
      :column-num="2"
    >
      <van-grid-item
        v-for="value in 6"
        :key="value"
        icon="http://shoptest.zhihuasoft.com/images/89/6e/41/a7/896e41a7c08bab91594dde523bb0ec2f.png"
        text="论坛留言"
        to="/bbs/1"
      />
    </van-grid>
    <powered-by></powered-by>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  Button,
  Grid,
  GridItem,
} from 'vant';

Vue.use(Button)
  .use(Grid)
  .use(GridItem);

export default {
  name: 'bbs',
  metaInfo: { title: '论坛互动' },
  data() {
    return {};
  },
  created() { },
  computed: {},
};
</script>

<style module lang="less">
.bbs {
  padding-top: 40px;
  min-height: 80vh;
}
</style>
