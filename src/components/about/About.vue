<template>
  <div class="About">
    <van-nav-bar title="关于"
                 left-text="返回"
                 right-text=""
                 left-arrow
                 @click-left="onClickLeft" />
    <p>
      本站初衷：记录生活点滴的美好，顺便搞点小钱过美好生活
    </p>
    <p>我是一个会码代码的男人，曾经励志码出一个世界Top10，无奈被现实打败...快来安慰吧
    </p>
    <p>来跟我探讨股票、基金、期货、外汇吧，不求大富大贵，但求每月生活费。</p>
    <p>撸了5年代码，从Java撸到JavaWeb，已经用坏8个键盘，三台电脑</p>
    <p>离地中海还远着，So...我还能撸10年</p>
    <p>运动类：跑步、游泳、篮球、乒乓球、羽毛球、撸铁...</p>
    <p>艺术类：阅读、油画...</p>
    <p>厨艺类：湘菜、粤菜、烘焙...</p>
    <p>理财类：股票、基金、期货、外汇...</p>
    <p>生活类：喝酒、吹牛...</p>
    <p>工作类：码农...</p>
    <p>手机：189暂时保密9411</p>
    <p>Email：stqzq123@163.com</p>
    <p>微信：475877345</p>
    <p>加个微信一起“搞事”</p>

  </div>
</template>
<script>
import { NavBar } from "vant";
export default {
  name: "About",
  data() {
    return {};
  },
  components: {
    vanNavBar: NavBar
  },
  methods: {
    onClickLeft() {
      this.$router.push("/index");
    }
  }
};
</script>
<style scoped>
.About {
}
</style>