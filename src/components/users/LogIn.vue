<template>
  <div class="LogIn">
    <van-nav-bar title="用户登录"
                 left-text="返回"
                 right-text=""
                 left-arrow
                 @click-left="onClickLeft" />
    <van-cell-group>
      <van-field v-model="logInForm.userAccount"
                 clearable
                 label="用户名"
                 placeholder="请输入账号" />
      <!-- right-icon="question-o" @click-right-icon="$toast('账号为邮箱格式')" -->
      <van-field v-model="logInForm.userPwd"
                 type="password"
                 label="密码"
                 clearable
                 placeholder="请输入密码" />
    </van-cell-group>
    <div class="userOption">
      <van-button type="info"
                  size="small"
                  @click="userLogIn()">登录</van-button>
      <van-button plain
                  type="info"
                  size="small"
                  @click="toRegister">注册</van-button>
      <span class="forgetPwd"
            @click="toForgetPwd"> 忘记密码</span>
    </div>
  </div>
</template>
<script>
import { NavBar, CellGroup, Field, Button, Notify } from "vant";
import Tool from "@/assets/js/tool";
export default {
  name: "LogIn",
  components: {
    vanNavBar: NavBar,
    vanCellGroup: CellGroup,
    vanButton: Button,
    vanField: Field
  },
  data() {
    return {
      logInForm: {}
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    userLogIn() {
      const rex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      // if (Tool.isNull(this.logInForm.userEmail)) {
      //   Notify({ type: 'warning', message: '请输入账号' });
      //   return;
      // } else if (!rex.test(this.logInForm.userEmail)) {
      //   Notify({ type: 'warning', message: '请输入正确的邮箱账号' });
      //   return;
      // } else
      if (Tool.isNull(this.logInForm.userPwd)) {
        Notify({ type: "warning", message: "请输入密码" });
        return;
      } else if (
        this.logInForm.userPwd.length < 8 ||
        this.logInForm.userPwd.length > 16
      ) {
        Notify({ type: "warning", message: "请输入8-16位数密码" });
        return;
      }

      this.$axios
        .post(this.$url.userLogIn, this.logInForm)
        .then(msg => {
          const data = msg.data;
          if (data.code === 200 && data.status === false) {
            Notify({ type: `warning`, message: data.msg });
          } else {
            Notify({ type: `success`, message: `登录成功` });
          }
        })
        .catch(err => {
          Notify({ type: `danger`, message: `登录异常，请联系管理员` });
        });
    },
    toRegister() {
      this.$router.push(`/user/register`);
    },
    toForgetPwd() {
      this.$router.push(`/user/forgetPwd`);
    }
  }
};
</script>
<style lang="less" scoped>
.LogIn {
  .userOption {
    text-align: center;
    margin-top: 20px;
    .van-button {
      margin-right: 10px;
    }
    .forgetPwd {
      font-size: 12px;
      color: #1989fa;
    }
  }
}
</style>
