<template>
  <div class="UserList">
    <van-sticky>
      <van-nav-bar title="用户列表"
                   left-text="返回"
                   right-text=""
                   left-arrow
                   @click-left="onClickLeft" />
    </van-sticky>
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <van-cell v-for="(item,index) in list"
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
  name: "Register",
  components: {
    vanNavBar: NavBar,
    vanCell: Cell,
    vanSticky: Sticky,
    vanList: List
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      this.$axios
        .get("/user/queryAll")
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
      //   setTimeout(() => {
      //     for (let i = 0; i < 10; i++) {
      //       this.list.push(this.list.length + 1);
      //     }
      //     // 加载状态结束
      //     this.loading = false;

      //     // 数据全部加载完成
      //     if (this.list.length >= 40) {
      //       this.finished = true;
      //     }
      //   }, 500);
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.UserList {
  .userOption {
    text-align: center;
    margin-top: 20px;
    .van-button {
      margin-right: 10px;
    }
  }
}
</style>
