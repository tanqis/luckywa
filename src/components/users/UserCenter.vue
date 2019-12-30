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
            stq***23@163.com
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
      <van-cell clickable
                style="margin-top:10px;"
                to="/user/logIn">
        <div solt="default"
             style="text-align:center;">
          登录
        </div>
      </van-cell>
      <van-cell clickable>
        <div solt="default"
             style="text-align:center;">切换账号</div>
      </van-cell>
      <van-cell clickable
                @click="logOut">
        <div solt="default"
             style="text-align:center;">退出</div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
// Divider,
import { NavBar, Cell, CellGroup, Row, Col, Image } from "vant";
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
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.push("/index");
    },
    logOut() {
      this.$axios
        .get(this.$url.userLogOut)
        .then(msg => {
          console.error("logOut");
        })
        .catch(error => {
          console.error("logOut error");
        });
    }
  }
};
</script>
<style lang="less" socped>
.UserCenter {
}
</style>
