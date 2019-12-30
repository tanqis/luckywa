<template>
  <div class="myHeaderBox">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">主页</van-tabbar-item>
      <van-tabbar-item icon="search">搜索</van-tabbar-item>
      <van-tabbar-item icon="like-o">Love</van-tabbar-item>
      <van-tabbar-item icon="friends-o">朋友</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="/user/userCenter"
        >个人中心</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  components: {
    vanTabbar: Tabbar,
    vanTabbarItem: TabbarItem
  },
  data() {
    return {
      active: '0'
    };
  }
};
</script>
