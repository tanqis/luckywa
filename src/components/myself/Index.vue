<template>
  <div class="myselfBox">
    <el-card shadow="always">
      <div class="myPic"></div>
    </el-card>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="基本资料"
                        name="1">
        <p>姓名：苏谭琦</p>
        <p>性别：男</p>
        <p>生日：1992-11-22</p>
        <p>属性：帅</p>
      </el-collapse-item>
      <el-collapse-item title="自我介绍"
                        name="2">
        <p>我是一个会码代码的男人，曾经励志码出一个世界Top10，无奈被现实打败...快来安慰吧
        </p>
        <p>来跟我探讨股票、基金、期货、外汇吧，不求大富大贵，但求每月生活费。</p>
      </el-collapse-item>
      <el-collapse-item title="工作经验"
                        name="3">
        <p>撸了5年代码，从Java撸到JavaWeb，已经用坏8个键盘，三台电脑</p>
        <p>离地中海还远着，So...我还能撸10年</p>
      </el-collapse-item>
      <el-collapse-item title="技能特长"
                        name="4">
        <p>什么都特长</p>
      </el-collapse-item>
      <el-collapse-item title="未来规划"
                        name="5">
        <p>不用上班，有钱花，还有美女来勾搭</p>
      </el-collapse-item>
      <el-collapse-item title="生活爱好"
                        name="6">
        <p>运动类：跑步、游泳、篮球、乒乓球、羽毛球、撸铁...</p>
        <p>艺术类：看书、油画...</p>
        <p>厨艺类：湘菜、粤菜、烘焙...</p>
        <p>理财类：股票、基金、期货、外汇...</p>
        <p>生活类：喝酒、吹牛...</p>
        <p>工作类：html、css、js、vue、d3、java、mongoDB...</p>
      </el-collapse-item>
      <el-collapse-item title="Hi!交个朋友"
                        name="7">
        <p>手机：189暂时保密9411</p>
        <p>Email：stqzq123@163.com</p>
        <p>微信：475877345</p>
        <p>加微信备注：tool</p>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1"]
    };
  },
  methods: {}
};
</script>
<style scoped>
.myselfBox {
  margin-top: 20px;
}
.myselfBox .el-card__body {
  padding: 10px 0;
}
.myselfBox .el-card__body .myPic {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin: 0 auto;
  /* background: url("@/assets/imgs/myself.png") no-repeat; */
  background-size: 80px 80px;
}
p {
  text-indent: 30px;
  text-align: left;
}
</style>