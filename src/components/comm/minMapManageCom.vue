<template>
  <div class="minMapManageCom">
    <div v-for="(item,index) in childrens"
         :key="index"
         class="nodes">
      <div class="nodeItem">
        <van-icon name="stop" />
        <span class="nodeName">{{item.name}}</span></div>
      <template v-if="item.children">
        <min-map-manage-com :childrens='item.children'
                            class="nodeChilden"></min-map-manage-com>
      </template>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  name: "minMapManageCom",
  components: {
    vanIcon: Icon
  },
  props: {
    childrens: Array
  }
};
</script>

<style lang="less" scoped>
.minMapManageCom {
  .nodes {
    .nodeItem {
      height: 32px;
      line-height: 32px;
      .nodeName {
        margin-left: 10px;
      }
    }
    .nodeChilden {
      border-left: 1px solid #ccc;
      margin-left: 10px;
      padding-left: 20px;
    }
  }
}
</style>