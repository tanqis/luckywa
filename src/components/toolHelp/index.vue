<template>
  <div>

    <router-link tag="p"
                 to="./fontHelp">
      <el-button type="primary"
                 icon="fa fa-font">字体图标示例</el-button>
    </router-link>
    <router-link tag="p"
                 to="./activeAnimat">
      <el-button type="primary"
                 :loading="true">动态效果示例</el-button>
    </router-link>
  </div>
</template>
<style scoped>
div {
  height: 500px;
}
</style>