<template>
  <div :class="$style['cart']">
    <van-cell
      v-for="i in 3"
      :key="i"
    >
      <van-checkbox
        v-model="checked"
        checked-color="#fc5859"
      >
        <van-card
          num="2"
          price="2.00"
          title="金都一号(8斤装)"
          thumb="http://shoptest.zhihuasoft.com/images/2a/f1/92/a8/2af192a885974cee3c27dbc30c233576.png"
        >
          <div
            slot="num"
            @click.stop=""
          >
            <van-stepper v-model="step" />
          </div>
        </van-card>
      </van-checkbox>
    </van-cell>
    <van-submit-bar
      :price="3050"
      button-text="结算（ 3 ）"
      @submit="onSubmit"
    >
      <van-checkbox
        v-model="checked"
        checked-color="#fc5859"
      >全选</van-checkbox>
      <van-tag
        type="danger"
        size="medium"
      >清空</van-tag>
    </van-submit-bar>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  Button,
  Cell,
  Card,
  Checkbox,
  CheckboxGroup,
  Stepper,
  SubmitBar,
  Tag,
} from 'vant';

Vue.use(Button)
  .use(Cell)
  .use(Card)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Stepper)
  .use(SubmitBar)
  .use(Tag);

export default {
  name: 'cart',
  metaInfo: { title: '购物车' },
  data() {
    return {
      checked: true,
      step: 1,
    };
  },
  created() { },
  computed: {},
  methods: {
    onSubmit() { },
  },
};
</script>

<style module lang="less" src="./cart.module.less"></style>
