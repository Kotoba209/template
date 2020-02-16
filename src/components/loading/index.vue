<template>
  <div>
    <van-loading
      v-if="loading"
      :class="$style.loading"
      :color="color"
      type="spinner"
      :size="size" />
    <slot v-if="!loading"></slot>
  </div>
</template>

<script>
import { Loading, Skeleton } from 'vant';

export default {
  name: 'loading',
  components: {
    [Loading.name]: Loading,
    [Skeleton.name]: Skeleton,
  },
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
    size: {
      type: String,
      default: '24px',
    },
    color: {
      type: String,
      default: '#1989fa',
    },
  },
};
</script>

<style module lang="less">
.loading {
  position: absolute !important;
  top: calc(50%);
  left: calc(50%);
  transform: translate(-50%, -50%);
}
</style>
