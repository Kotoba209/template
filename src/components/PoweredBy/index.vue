<template>
  <div :class="$style['index']">
    海南智华科技有限公司提供技术支持
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {},
  props: {},
};
</script>

<style module lang="less">
.index {
    display: flex;
    justify-content: center;
    color: rgba(0, 0, 0, 0.45);
    position: absolute;
    bottom: 120px;
    transform: translateX(-50%);
    left: 50%;
    width: 100%;
    font-size: 24px;
}
</style>
