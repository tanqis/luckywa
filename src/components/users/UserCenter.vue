<template>
  <div class="UserCenter">
    <van-nav-bar title="个人中心"
                 left-text="返回"
                 right-text=""
                 left-arrow
                 @click-left="onClickLeft" />
    <!--  -->
    <van-cell-group>
      <van-cell clickable
                is-link>
        <van-row solt="default">
          <van-col span="8">
            <van-image width="80"
                       height="80"
                       src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="16">
            昵称
            <br />
            {{userInfo.userAccount||''}}
          </van-col>
        </van-row>
      </van-cell>
      <van-cell icon="chat-o"
                title="消息"
                is-link
                value="" />
      <!-- <van-divider></van-divider> -->
      <van-cell icon="star-o"
                style="margin-top:10px;"
                :border="false"
                title="收藏"
                is-link
                value="" />
      <van-cell icon="photo-o"
                title="相册"
                :border="false"
                is-link
                value="" />
      <van-cell icon="smile-o"
                title="表情"
                is-link
                value="" />
      <!-- <van-divider></van-divider> -->
      <van-cell icon="setting-o"
                style="margin-top:10px;"
                title="设置"
                is-link
                value="" />
      <!-- <van-divider></van-divider> -->
      <!-- <van-cell v-if='!hasToken'
                clickable
                style="margin-top:10px;"
                to="/user/logIn">
        <div solt="default"
             style="text-align:center;">
          登录
        </div>
      </van-cell> -->
      <van-cell v-if='hasToken'
                clickable
                style="margin-top:10px;">
        <div solt="default"
             style="text-align:center;"
             @click="switchAccount">切换账号</div>
      </van-cell>
      <van-cell v-if='hasToken'
                clickable
                style="margin-top:10px;">
        <div solt="default"
             style="text-align:center;"
             @click="updatePwd">修改密码</div>
      </van-cell>
      <van-cell v-if='hasToken'
                clickable
                @click="logOut">
        <div solt="default"
             style="text-align:center;">退出</div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
// Divider,
import { NavBar, Cell, CellGroup, Row, Col, Image, Notify } from "vant";
export default {
  name: "UserCenter",
  components: {
    // vanTabbar: Tabbar,
    // vanTabbarItem: TabbarItem
    vanNavBar: NavBar,
    vanCell: Cell,
    vanCellGroup: CellGroup,
    // vanDivider: Divider,
    vanImage: Image,
    vanRow: Row,
    vanCol: Col
  },
  data() {
    return {
      hasToken: false,
      userInfo: {}
    };
  },
  created() {},
  mounted() {
    this.hasToken = this.$store.state.Authorization ? true : false;
    if (this.hasToken) {
      // this.getBaseData()
    }
  },
  methods: {
    getBaseData() {
      this.$axios.get(this.$url.queryAllById).then(msg => {
        const datas = msg.data;
        if (datas.status) {
          this.userInfo = datas.data[0];
        } else {
          Notify({ type: `warning`, message: datas.msg });
        }
      });
    },
    onClickLeft() {
      this.$router.push("/index");
    },
    switchAccount() {
      Notify({ type: `success`, message: "退出成功,请登录" });
      this.$store.commit("logOut");
      this.$router.push("/user/logIn");
    },
    updatePwd() {
      this.$router.push("/user/updatePwd");
    },
    logOut() {
      Notify({ type: `success`, message: "退出成功" });
      this.$store.commit("logOut");
      this.$router.push("/");
      // this.$axios
      //   .get(this.$url.userLogOut)
      //   .then(msg => {
      //     const datas = msg.data;
      //     if (datas.status) {
      //       Notify({ type: `success`, message: datas.msg });
      //       this.$store.commit("logOut");
      //     } else {
      //       Notify({ type: `warning`, message: datas.msg });
      //     }
      //     this.$router.push("/");
      //   })
      //   .catch(error => {
      //     Notify({ type: `danger`, message: `登录异常，请联系管理员` });
      //   });
    }
  }
};
</script>
