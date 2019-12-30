<template>
  <div class="CalculatioinsList">
    <van-nav-bar title="金融计算列表"
                 left-text="返回"
                 right-text=""
                 left-arrow
                 @click-left="onClickLeft" />
    <el-card shadow="always"
             class="box-card">
      <div slot="header"
           class="clearfix">
        <span>添加产品</span>
      </div>
      <div @click="$router.push('./Calculatioins')">
        +
      </div>
    </el-card>

    <el-card shadow="always"
             class="box-card"
             v-for="(item,index) in productData"
             :key="index">
      <div slot="header"
           class="clearfix">
        <span>{{item.productId}}({{item.productName}})</span>
        <i class="el-icon-delete"
           style="float: right; padding: 3px 0"
           @click="delProduct(item)"></i>
      </div>
      <div @click="$router.push('./Calculatioins?id='+item._id)">
        {{'操作次数：' + item.productPriceArrs.length }}
      </div>
    </el-card>

  </div>
</template>
<script>
import { NavBar } from "vant";
export default {
  name: "CalculatioinsList",
  components: {
    vanNavBar: NavBar
  },
  data() {
    return {
      productData: []
    };
  },
  created() {
    this.loadListData();
  },
  methods: {
    delProduct(item) {
      this.$confirm("确认删除该记录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios.post(this.$url.delProduct, item).then(msg => {
            this.$alert(msg.data.msg, "消息", {
              confirmButtonText: "确定",
              callback: () => {
                this.loadListData();
              }
            });
          });
        })
        .catch(() => {});
    },
    onClickLeft() {
      this.$router.push("/index");
    },
    loadListData() {
      this.$axios.post(this.$url.findAllList).then(msg => {
        if (msg.data.status === false) {
          this.$alert(msg.data.msg, "消息", {
            confirmButtonText: "确定",
            callback: () => {}
          });
        } else {
          this.productData = msg.data;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.CalculatioinsList {
  text-align: center;
}
</style>