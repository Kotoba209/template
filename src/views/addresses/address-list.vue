<template>
  <div :class="$style['addresses']">
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
    <powered-by />
  </div>
</template>

<script>
import Vue from 'vue';
import { Button, AddressList, Toast } from 'vant';

Vue.use(Button)
  .use(AddressList)
  .use(Toast);

export default {
  name: 'addresses',
  metaInfo: { title: '我的收货地址' },
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
      ],
    };
  },
  created() { },
  computed: {},
  methods: {
    onAdd() {
      Toast('新增地址');
      this.$router.push('/addresses/edit');
    },
    onEdit(item, index) {
      Toast(`编辑地址:${index}`);
      this.$router.push('/addresses/edit');
    },
  },
};
</script>

<style module lang="less">
.addresses {
  min-height: 80vh;
  padding-bottom: 200px;
  :global {
    .van-address-list {
      position: relative;
      .van-address-list__bottom {
        transform: translateY(-100%);
      }
    }
  }
}
</style>
