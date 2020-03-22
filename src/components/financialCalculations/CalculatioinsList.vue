<template>
  <div class="CalculatioinsList">
    <van-sticky>
    <van-nav-bar title="商品期货统计"
                 left-text="返回"
                 right-text=""
                 left-arrow
                 @click-left="onClickLeft" />
     </van-sticky>
      <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
          <van-cell v-for="(item,index) in dataList"
                :key="index"
                :title="item.UserAccount"
                :value="item.UserStatus===1?'有效':'冻结'"
                :label="item.UpdateTime" />
    </van-list>
  </div>
</template>
<script>
import { NavBar, Cell, Notify, Sticky, List } from "vant";
import Tool from "@/assets/js/tool";
export default {
  name: "CalculatioinsList",
  components: {
    vanNavBar: NavBar,
    vanCell: Cell,
    vanSticky: Sticky,
    vanList: List
  },
  data() {
    return { 
      dataList: [],
      loading: false,
      finished: false
    };
  },
  
  methods: {
    onLoad() {
      this.$axios
        .get(this.$url.futuresQueryAll)
        .then(msg => {
          const datas = msg.data;
          if (datas.status) {
            this.list = datas.data;
          } else {
            Notify({ type: `warning`, message: datas.msg });
          }
          this.loading = false;
          this.finished = true;
        })
        .catch(err => {
          Notify({ type: `danger`, message: `登录异常，请联系管理员` });
          this.loading = false;
          this.finished = true;
        }); 
    },
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