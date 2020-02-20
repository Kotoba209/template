<template>
  <div :class="$style['message']">
    <van-cell value="0条留言">
      <div
        slot="title"
        :class="$style.title"
      >
        <van-icon
          size="40"
          name="http://shoptest.zhihuasoft.com/images/89/6e/41/a7/896e41a7c08bab91594dde523bb0ec2f.png"
        ></van-icon>
        <div :class="$style.text">
          <span :class="$style.name">论坛留言</span>
          <span :class="$style.synopsis">简介</span>
        </div>
      </div>
    </van-cell>
    <van-panel>
      <div :class="$style.content">
        <div :class="$style.user">
          <van-image
            round
            fit="cover"
            width="3rem"
            height="3rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            alt="用户头像"
          />
        </div>
        <div :class="$style.input">
          <div :class="$style['inp-nav']">
            <span :class="$style['nick-name']">昵称</span>
            <van-button
              size="small"
              type="danger"
            >留言</van-button>
          </div>
          <van-field
            rows="2"
            autosize
            type="textarea"
            placeholder="请输入留言"
            show-word-limit
          />
        </div>
      </div>
    </van-panel>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  Button,
  Cell,
  Grid,
  GridItem,
  Icon,
  Panel,
  Image,
  Field,
} from 'vant';

Vue.use(Button)
  .use(Cell)
  .use(Grid)
  .use(GridItem)
  .use(Icon)
  .use(Panel)
  .use(Image)
  .use(Field);

export default {
  metaInfo: { title: '留言板' },
  components: {},
  data() {
    // 这里存放数据
    return {

    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  methods: {

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
};
</script>
<style module lang='less' src='./message.module.less'></style>
