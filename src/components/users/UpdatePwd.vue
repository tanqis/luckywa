<template>
  <div class="UpdatePwd">
    <van-nav-bar
      title="修改密码"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
    />
      <van-cell-group> 
      <van-field
        v-model="logInForm.userPwd"
        type="password"
        label="旧密码"
        clearable
        placeholder="请输入密码"
      />
      <br>
      <van-field
        v-model="logInForm.userPwd"
        type="password"
        label="新密码"
        clearable
        placeholder="请输入密码"
      />
      <van-field
        v-model="logInForm.userPwd"
        type="password"
        label="确认新密码"
        clearable
        placeholder="请输入密码"
      />
    </van-cell-group>  
    <div class="userOption">
      <van-button type="info" size="small" @click="submitForm()"
        >确认</van-button
      >
      <van-button plain type="info" size="small" @click="$router.go(-1)"
        >取消</van-button
      >
    </div>
  </div>
</template>
<script>
import { NavBar, CellGroup, Field, Button, Notify } from 'vant';
import Tool from '@/assets/js/tool';
export default {
  name: 'UpdatePwd',
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
      if (Tool.isNull(this.logInForm.userEmail)) {
        Notify({ type: 'warning', message: '请输入账号' });
        return;
      } else if (!rex.test(this.logInForm.userEmail)) {
        Notify({ type: 'warning', message: '请输入正确的邮箱账号' });
        return;
      } else if (Tool.isNull(this.logInForm.userPwd)) {
        Notify({ type: 'warning', message: '请输入密码' });
        return;
      } else if (
        this.logInForm.userPwd.length < 8 ||
        this.logInForm.userPwd.length > 16
      ) {
        Notify({ type: 'warning', message: '请输入8-16位数密码' });
        return;
      }
      //obj
      this.$axios
        .post(this.$url.userLogIn)
        .then(msg => {
          const errMsg = msg.data.data.msg;
          if (errMsg) {
            this.$message({
              showClose: true,
              message: errMsg,
              type: 'error'
            });
          } else {
            this.$message({
              showClose: true,
              message: '登录成功',
              type: 'success'
            });
            window.setTimeout(() => {
              window.location.href = '#/';
            }, 1000);
          }
        })
        .catch(err => {
          this.$message({
            showClose: true,
            message: '登录失败请确认账号或者密码正确',
            type: 'error'
          });
        });
    },
    register() {
      window.location.href = '#/user/register';
    },
    forgetPwd() {
      window.location.href = '#/user/forgetPwd';
    },
    submitForm() {
      this.userLogIn(this.logInForm);
    }
  }
};
</script>
<style lang="less" scoped>
.UpdatePwd {
  .userOption {
    text-align: center;
    margin-top: 20px;
    .van-button {
      margin-right: 10px;
    }
  }
}
</style>
