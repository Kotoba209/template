<template>
  <div :class="$style['qualification']">
    <img
      v-for="img in imageList"
      :key="img"
      v-lazy="img"
      width="100%"
      alt="企业资质"
    >
  </div>
</template>

<script>
import Vue from 'vue';
import {
  Button,
  Lazyload,
} from 'vant';

Vue.use(Button)
  .use(Lazyload);

export default {
  name: 'qualification',
  metaInfo: { title: '企业资质' },
  data() {
    return {
      imageList: [
        'http://spic.zhihuasoft.com/image/qualification_1.jpg',
        'http://spic.zhihuasoft.com/image/qualification_2.jpg',
        'http://spic.zhihuasoft.com/image/qualification_3.jpg',
        'http://spic.zhihuasoft.com/image/qualification_4.jpg',
        'http://spic.zhihuasoft.com/image/qualification_5.jpg',
        'http://spic.zhihuasoft.com/image/qualification_6.jpg',
        'http://spic.zhihuasoft.com/image/qualification_7.jpg',
      ],
    };
  },
  created() { },
  computed: {},
};
</script>

<style module lang="less">
@import '~@styles/main.less';
</style>
