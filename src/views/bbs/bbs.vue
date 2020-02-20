<template>
  <div :class="$style['bbs']">
    <div :class="$style.BbsArea">
      <div :class="$style.flexContainer">
        <div
          v-for="i in 6"
          :key='i'
          :class="$style.area"
          onClick='() => history.push(`/bbs/${val.id}`)'
        >
          <div :class="$style.iconWrapper">
            <img
              src="http://shoptest.zhihuasoft.com/images/89/6e/41/a7/896e41a7c08bab91594dde523bb0ec2f.png"
              alt="论坛版块图片"
              :class="$style.icon"
            />
          </div>
          <div :class="$style.titleWrapper">
            <div :class="$style.title">论坛版块</div>
            <div :class="$style.extra">0条留言</div>
          </div>
        </div>
      </div>
    </div>
    <powered-by />
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

<style module lang="less" src="./bbs.module.less"></style>
