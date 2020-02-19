<template>
  <div :class="$style['account']">
    <!-- <div :class="$style['not-login']">
      <div :class="$style['not-login-text']">未登录</div>
      <img :class="$style.avatar" src="@/assets/images/avatar.png">
    </div> -->
    <div :class="$style['am-card']">
      <div :class="$style['am-card-header']" style="padding: 15px;">
        <div :class="$style['am-card-header-content']">
          <img :class="$style.avatar" src="@/assets/images/avatar.png">
          <div style="margin-left: 4vw;">
            <h3 style="margin: 1.6vw auto;"></h3>
            <div @click="changeTagStatus()"
            :class="[$style['am-tag-active'], {[$style['am-tag-normal']]: activeMember}]">
              <div :class="$style['am-tag-text']">
                <svg-icon :class="$style.member" icon-class="member" />
                普通用户
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style['am-card']" style="margin-top: 10px;">
        <van-cell title="我的订单" value="全部订单" is-link url="/order" />
        <van-row type="flex" justify="center">
            <van-col span="6" >
              <svg-icon :class="$style['status-icon']" icon-class="wallet" />
              <div>待付款</div>
            </van-col>
            <van-col span="6" >
              <svg-icon :class="$style['status-icon']" icon-class="unshipped" />
              <div>待发货</div>
            </van-col>
            <van-col span="6" >
              <svg-icon :class="$style['status-icon']" icon-class="truck" />
              <div>已发货</div>
            </van-col>
            <van-col span="6" >
              <svg-icon :class="$style['status-icon']" icon-class="message" />
              <div>已完成</div>
            </van-col>
          </van-row>
    </div>
    <div :class="$style['am-card']" style="margin-top: 10px;">
        <van-cell title="更多服务" />
        <van-row type="flex">
            <van-col span="6" >
              <svg-icon :class="[$style.icon, $style.phone]" icon-class="phone" />
              <div>联系客服</div>
            </van-col>
            <van-col span="6" >
              <svg-icon :class="[$style.icon, $style.address]" icon-class="address" />
              <div>收获地址</div>
            </van-col>
            <van-col span="6" >
              <svg-icon :class="[$style.icon, $style.bbs]" icon-class="bbs" />
              <div>论坛互动</div>
            </van-col>
            <van-col span="6" >
              <svg-icon :class="[$style.icon, $style.qualification]" icon-class="qualification" />
              <div>企业资质</div>
            </van-col>
          </van-row>
          <van-row type="flex">
            <van-col span="6" >
              <svg-icon :class="[$style.icon, $style.home]" icon-class="home" />
              <div>店铺管理</div>
            </van-col>
            <van-col span="6" >
              <svg-icon :class="[$style.icon, $style.delete]" icon-class="delete" />
              <div>清理缓存</div>
            </van-col>
          </van-row>
    </div>
    <PoweredBy></PoweredBy>
  </div>
</template>

<script>
import Vue from 'vue';
import PoweredBy from '@/components/PoweredBy';
import {
  Button,
  Icon,
  Cell,
  Col,
  Row,
} from 'vant';

Vue.use(Button)
  .use(Icon)
  .use(Cell)
  .use(Col)
  .use(Row);

export default {
  name: 'account',
  metaInfo: { title: '个人中心' },
  components: {
    [PoweredBy.name]: PoweredBy,
  },
  data() {
    return {
      activeMember: false,
    };
  },
  created() {
    this.$store.dispatch('user/current');
  },
  computed: {},
  methods: {
    changeTagStatus() {
      this.activeMember = !this.activeMember;
    },
  },
};
</script>

<style module lang="less">
  @import './Account.module.less';
</style>
