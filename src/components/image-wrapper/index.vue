<template>
  <div :class="$style['image-wrapper']">
    <div :class="$style.card">
      <img
        :src="src"
        :alt="alt"
      >
    </div>
    <div
      :class="$style.flex"
      v-if="msg"
    >
      <span :class="$style.info">{{ msg }}</span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';

Vue.use(Button);

export default {
  name: 'image-wrapper',
  components: {},
  props: {
    src: String,
    alt: {
      type: String,
      default: '',
    },
    msg: {
      type: String,
      default: '',
    },
  },
};
</script>

<style module lang="less">
.image-wrapper {
  background: #fff;
  padding: 46px 30px;
}
.card {
  text-align: center;
  border: 0;
  border-radius: 26px;
  box-shadow: 0 8px 32px 0 rgba(143, 143, 143, 0.14);
  color: #3d3d3d;
  :global {
    img {
      max-width: 100%;
    }
  }
}
.flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
  font-size: 32px;
  color: #8d8a8a;
}
</style>
