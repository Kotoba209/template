<template>
  <div :class="$style['shop-login']">
    <div :class="$style.title">
      <van-image
        width="60px"
        height="60px"
        fit="contain"
        src="../../../public/favicon.ico"
        alt="logo"
      />
      <div :class="$style['title-text']">乐东优选</div>
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div :class="$style['btn-wrap']">
        <van-button
          round
          block
          type="info"
          native-type="submit"
        >
          提交
        </van-button>
      </div>
    </van-form>
    <powered-by />
  </div>
</template>

<script>
import Vue from 'vue';
import {
  Button,
  Field,
  Form,
  Image,
} from 'vant';

Vue.use(Button)
  .use(Field)
  .use(Form)
  .use(Image);

export default {
  name: 'shop-home',
  // metaInfo: { title: '账号绑定' },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  created() { },
  computed: {},
  methods: {
    onSubmit() {
      this.$router.push('/shop-stats/4');
    },
  },
};
</script>
<style module lang="less" src="./shop-login.module.less"></style>
