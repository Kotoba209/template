<template>
  <div :class="$style.home">
    <loading :loading="loading">
      <h1 :class="$style.title">Home page</h1>
<<<<<<< Updated upstream
      <svg-icon :class="$style.user" icon-class="user" />
      <van-button block type="primary" @click="$router.push('/about')">About page</van-button>
=======
      <svg-icon
        :class="$style.user"
        icon-class="user"
      />
      <van-button
        block
        type="primary"
        @click="$router.push('/about')"
      >About page</van-button>
>>>>>>> Stashed changes
    </loading>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';
import Loading from '@/components/loading';

Vue.use(Button);

export default {
  name: 'home',
  metaInfo: { title: '首页' },
  components: {
    [Loading.name]: Loading,
  },
  computed: {
    loading() {
      return this.$store.state.loading.global;
    },
  },
};
</script>

<<<<<<< Updated upstream
<style module lang="less" src="./home.module.less" />
=======
<style module lang="less">
/*@import "~@styles/main";*/
@import '~@/styles/global.less';
.home {
  :global {
    .van-button--primary {
      background-color: #ccc;
    }
  }
}

/* .title {
  font-size: @font-size-lg;
} */

.user {
  width: 6vw;
  height: 6vw;
  fill: #fff;
  background: linear-gradient(45deg, rgba(202, 157, 251, 1) 0%, rgba(162, 96, 245, 1) 100%);
  border-radius: 50%;
  padding: 4px;
}
</style>
>>>>>>> Stashed changes
