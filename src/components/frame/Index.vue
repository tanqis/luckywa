<template>
  <div class="myPage">
    <!-- <Header class="myHeader"></Header> -->
    <router-view class="myContenter"></router-view>
    <Footer class="myFooter"></Footer>
  </div>
</template>

<script>
// import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  components: {
    // Header,
    Footer
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scope>
.myPage {
  height: 100%;
  .myContenter {
    padding-top: 0;
    overflow: auto;
    height: calc(~'100% - 50px');
  }
  .myFooter {
    height: 50px;
    .van-tabbar {
      background: linear-gradient(#7c8df3, #83bbf5);
      .van-tabbar-item {
        color: #fff;
      }
    }
  }
}
</style>
