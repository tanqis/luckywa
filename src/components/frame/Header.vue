<template>
  <div class="myHeaderBox">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
import { NavBar } from 'vant';
export default {
  components: {
    vanNavBar: NavBar
  },
  data() {
    return {
      user: this.$user
    };
  },
  methods: {
    onClickLeft() {
      // Toast('返回');
    },
    onClickRight() {
      // Toast('按钮');
    }
  }
};
</script>
<style lang="less" socped>
.myHeaderBox {
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding: 0 10px;
  font-size: 28px;
  color: #fff;
  position: relative;
}
</style>
