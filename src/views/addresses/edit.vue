<template>
  <div :class="$style['edit']">
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
    <powered-by></powered-by>
  </div>
</template>

<script>
import Vue from 'vue';
import { AddressEdit, Toast } from 'vant';

Vue.use(AddressEdit)
  .use(Toast);

export default {
  metaInfo: { title: '地址编辑' },
  components: {},
  data() {
    return {
      areaList: {},
      searchResult: [],
    };
  },
  computed: {},
  methods: {
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区',
        }];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>
<style module lang='less'>
.edit {
  min-height: 80vh;
}
</style>
