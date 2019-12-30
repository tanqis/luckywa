<template>
  <div class="Register">
    <van-nav-bar
      title="用户注册"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
    />

    <van-cell-group>
      <!-- <van-field v-model="registerForm.userEmail"
                 clearable
                 label="Email"
                 placeholder="请输入邮箱账号，用于登陆系统" /> -->
      <van-field
        v-model="registerForm.userAccount"
        clearable
        label="账号"
        placeholder="请输入昵称"
      />
      <van-field
        v-model="registerForm.userPwd"
        type="password"
        label="密码"
        clearable
        placeholder="请输入密码"
      />
      <van-field
        v-model="checkUserPwd"
        type="password"
        label="确认密码"
        clearable
        placeholder="请输入相同密码"
      />
    </van-cell-group>
    <div class="userOption">
      <van-button type="info" size="small" @click="registerUser"
        >注册</van-button
      >
      <span class="logIn" @click="toLogIn">登陆</span>
    </div>
  </div>
</template>
<script>
// const Qs = require('qs');
import { NavBar, CellGroup, Field, Button, Notify } from 'vant';
import Tool from '@/assets/js/tool';
export default {
  name: 'Register',
  components: {
    vanNavBar: NavBar,
    vanCellGroup: CellGroup,
    vanButton: Button,
    vanField: Field
  },
  data() {
    return {
      registerForm: {},
      checkUserPwd: ''
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    registerUser() {
      // const reg = new RegExp(
      //   "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
      // );
      // const rex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      // if (Tool.isNull(this.registerForm.userEmail)) {
      //   Notify({ type: "warning", message: "请输入Email" });
      //   return;
      // } else if (!rex.test(this.registerForm.userEmail)) {
      //   Notify({ type: "warning", message: "请输入正确的邮箱账号" });
      //   return;
      // } else
      if (
        Tool.isNull(this.registerForm.userAccount) ||
        this.registerForm.userAccount.length > 10
      ) {
        Notify({ type: 'warning', message: '请输入小于10位数昵称' });
        return;
      } else if (
        Tool.isNull(this.registerForm.userPwd) ||
        this.registerForm.userPwd.length < 8 ||
        this.registerForm.userPwd.length > 16
      ) {
        Notify({ type: 'warning', message: '请输入8-16位数密码' });
        return;
      } else if (this.registerForm.userPwd !== this.checkUserPwd) {
        Notify({ type: 'warning', message: '两次输入密码不一致' });
        return;
      }

      this.registerForm.userAccount = encodeURIComponent(
        this.registerForm.userAccount
      );
      this.$axios
        .post(this.$url.userRegister, this.registerForm)
        .then(msg => {
          const data = msg.data;
          if (data.code === 200 && data.status === false) {
            Notify({ type: `warning`, message: data.msg });
          } else {
            Notify({ type: `success`, message: `注册成功` });
          }
        })
        .catch(err => {
          Notify({ type: `danger`, message: `注册异常，请联系管理员` });
        });
    },
    toLogIn() {
      this.$router.push(`/user/logIn`);
    }
  }
};
</script>
<style lang="less" scoped>
.Register {
  .userOption {
    text-align: center;
    margin-top: 20px;
    .van-button {
      margin-right: 10px;
    }
    .logIn {
      font-size: 12px;
      color: #1989fa;
    }
  }
}
</style>
