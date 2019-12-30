<template>
  <div class="todosBox">

    <el-checkbox-group v-model="checkedCities">
      <!-- <el-checkbox v-model="checkAll"
                   @change="handleCheckAllChange">全选</el-checkbox> -->
      <el-checkbox v-for="city in cities"
                   :label="city"
                   :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
    <div class="todosOption">
      <el-button size="mini">取消</el-button>
      <el-button type="primary"
                 @click="fn"
                 size="mini">完成</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkAll: [],
      checkedCities: [],
      cities: [
        "娶100个老婆",
        "看100本书",
        "吹100个牛皮",
        "赚TM100W",
        "深圳买一套房"
      ]
    };
  },
  methods: {
    handleCheckAllChange(v) {
      this.checkAll = v;
    },
    fn() {
      if (this.checkedCities.length <= 0) {
        this.$message({
          type: "info",
          message: `请先选择`
        });
      } else {
        this.$alert("这你都敢点，你还要不要脸？", "提示", {
          showCancelButton: true,
          cancelButtonText: "要脸(取消)",
          confirmButtonText: "不要脸(确定)",
          callback: action => {
            if (action != "cancel") {
              this.$message({
                type: "info",
                message: `臭不要脸`
              });
            }
          }
        });
      }
    }
  }
};
</script>
<style scoped>
.todosBox {
  margin-top: 20px;
  height: 510px;
}
.todosOption {
  margin-top: 10px;
}
.el-checkbox {
  display: block;
  text-align: left;
}
</style>


