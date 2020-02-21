<template>
  <div :class="$style['account']">
    <!-- <div :class="$style['not-login']"
      <div :class="$style['not-login-text']">未登录</div>
      <img :class="$style.avatar" src="@/assets/images/avatar.png">
    </div> -->
    <van-panel :class="$style['card']">
      <div :class="$style['card-content']">
        <div :class="$style['user-info']">
          <img
            :class="$style.avatar"
            src="@/assets/images/avatar.png"
            alt="用户头像"
          >
          <div :class="$style.name">
            <div
              @click="changeTagStatus()"
              :class="[$style['tag-active'], {[$style['tag-normal']]: activeMember}]"
            >
              <div :class="$style['tag-text']">
                <svg-icon
                  :class="$style.member"
                  icon-class="member"
                />
                普通用户
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-panel>
    <van-panel :class="$style['panel']">
      <van-cell
        slot="header"
        title="我的订单"
        value="全部订单"
        is-link
        url="/order"
      />
      <van-grid>
        <van-grid-item
          icon="photo-o"
          text="待付款"
        >
          <svg-icon
            slot="icon"
            :class="$style['status-icon']"
            icon-class="wallet"
          />
        </van-grid-item>
        <van-grid-item
          icon="photo-o"
          text="待发货"
        >
          <svg-icon
            slot="icon"
            :class="$style['status-icon']"
            icon-class="unshipped"
          />
        </van-grid-item>
        <van-grid-item
          icon="photo-o"
          text="已发货"
        >
          <svg-icon
            slot="icon"
            :class="$style['status-icon']"
            icon-class="message"
          />
        </van-grid-item>
        <van-grid-item
          icon="photo-o"
          text="已完成"
        >
          <svg-icon
            slot="icon"
            :class="$style['status-icon']"
            icon-class="message"
          />
        </van-grid-item>
      </van-grid>
    </van-panel>
    <van-panel :class="[$style.others, $style.panel]">
      <van-cell
        slot="header"
        title="更多服务"
      />
      <van-grid :column-num="4">
        <van-grid-item
          icon="photo-o"
          text="联系客服"
          @click="handleContactService"
        >
          <svg-icon
            slot="icon"
            :class="[$style.icon, $style.phone]"
            icon-class="phone"
          />
        </van-grid-item>
        <van-grid-item
          icon="photo-o"
          text="收货地址"
          to="/addresses"
        >
          <svg-icon
            slot="icon"
            :class="[$style.icon, $style.address]"
            icon-class="address"
          />
        </van-grid-item>
        <van-grid-item
          icon="photo-o"
          text="论坛互动"
          to="/bbs"
        >
          <svg-icon
            slot="icon"
            :class="[$style.icon, $style.bbs]"
            icon-class="bbs"
          />
        </van-grid-item>
        <van-grid-item
          icon="photo-o"
          text="企业资质"
        >
          <svg-icon
            slot="icon"
            :class="[$style.icon, $style.qualification]"
            icon-class="qualification"
          />
        </van-grid-item>
        <van-grid-item
          icon="photo-o"
          text="店铺管理"
        >
          <svg-icon
            slot="icon"
            :class="[$style.icon, $style.home]"
            icon-class="home"
          />
        </van-grid-item>
        <van-grid-item
          icon="photo-o"
          text="清理缓存"
          @click="handleCleanCache"
        >
          <svg-icon
            slot="icon"
            :class="[$style.icon, $style.delete]"
            icon-class="delete"
          />
        </van-grid-item>
      </van-grid>
    </van-panel>
    <powered-by />
  </div>
</template>

<script>
import Vue from 'vue';
import {
  Button,
  Icon,
  Cell,
  Panel,
  Grid,
  GridItem,
  Dialog,
} from 'vant';

Vue.use(Button)
  .use(Icon)
  .use(Cell)
  .use(Panel)
  .use(Grid)
  .use(GridItem)
  .use(Dialog);

export default {
  name: 'account',
  metaInfo: { title: '个人中心' },
  components: {
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
    handleContactService() {
      Dialog.confirm({
        title: '温馨提示',
        message: '确定拨打客服电话吗？',
      }).then(() => {
        // on confirm
      }).catch(() => {
        // on cancel
      });
    },
    handleCleanCache() {
      Dialog.confirm({
        title: '温馨提示',
        message: '确定清空缓存吗？',
      }).then(() => {
        // on confirm
      }).catch(() => {
        // on cancel
      });
    },
  },
};
</script>

<style module lang="less" src="./account.module.less"></style>
