<template>
  <div class="Calculatioins">
    <div class="conditions">
      <el-row>
        <el-col :span="6">
          基础信息：
        </el-col>
        <el-col :span="8"
                class="labelCol">
          <el-input v-model.number="formData.productId"
                    size="mini"
                    :disabled="initArgs.id === undefined ? false : true"
                    placeholder="产品代码"></el-input>
        </el-col>
        <el-col :span="10">
          <el-input v-model.number="formData.productName"
                    size="mini"
                    :disabled="initArgs.id === undefined ? false : true"
                    placeholder="产品名称"></el-input>
        </el-col>
      </el-row>

      <el-row v-for="(item, index) in formData.productPriceArrs"
              :key="index">
        <el-col :span="2"
                class="labelCol">
          {{ index + 1 }}
        </el-col>
        <el-col :span="4"
                class="labelCol">
          <el-input v-model.number="item.buyPrice"
                    size="mini"
                    placeholder="价格"></el-input>
        </el-col>
        <el-col :span="8">
          <el-switch v-model.number="item.buyType"
                     size="mini"
                     active-text="买"
                     :active-value="1"
                     inactive-text="卖"
                     :inactive-value="0">
          </el-switch>
        </el-col>
        <el-col :span="8">
          <el-input-number v-model.number="item.buyNum"
                           :min="0"
                           :max="20"
                           size="mini"></el-input-number>
        </el-col>
        <el-col :span="2">
          <i class="el-icon-setting"
             @click="toolFormItem(index)"> </i>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-button type="primary"
                     size="mini"
                     icon="el-icon-plus"
                     circle
                     @click="addFormItem(false)"></el-button>
        </el-col>
      </el-row>
    </div>
    <hr />
    <div class="options">
      <el-button type="primary"
                 size="mini"
                 @click="run">执行</el-button>

      <el-button type="primary"
                 size="mini"
                 @click="save">保存</el-button>
      <el-button type="primary"
                 size="mini"
                 @click="exports">导出</el-button>
      <el-button type="primary"
                 size="mini"
                 @click="imports">导入</el-button>
      <el-button v-if="initArgs.id === undefined"
                 size="mini">重置</el-button>
    </div>
    <hr />
    <div>
      <el-input type="textarea"
                :autosize="{ minRows: 2, maxRows: 6 }"
                v-model="result">
      </el-input>
    </div>
    <el-dialog title="操作区"
               :visible.sync="toolDialogVisible"
               width="60%">
      <span><i class="el-icon-delete"
           @click="delFormItem()"></i>
        <i class="el-icon-upload2"
           @click="upMoveItem()"></i>
        <i class="el-icon-download"
           @click="downMoveItem()"></i>
        <i class="el-icon-plus"
           @click="upAddItem()"></i>
        <i class="el-icon-plus"
           @click="downAddItem()"></i>
      </span>
      <!-- <span slot="footer"
            class="dialog-footer">
        <el-button @click="toolDialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="dialogVisible = false">确 定</el-button>
      </span> -->
    </el-dialog>
  </div>
</template>
<script>
import tool from "@/assets/js/tool";
export default {
  name: "Calculatioins",
  data() {
    return {
      itemIndex: null,
      toolDialogVisible: false,
      initArgs: {},
      productId: "",
      productName: "",
      result: "",
      formData: {
        productId: "",
        productName: "",
        productPriceArrs: [{ buyPrice: 0, buyType: 1, buyNum: 0 }],
        isPublic: false
      },
      products: [
        {
          value: "p2001",
          label: "棕榈油"
        },
        {
          value: "fu2001",
          label: "燃油"
        }
      ]
    };
  },
  created() {
    this.initArgs = tool.getArgsByUrl();
    if (this.initArgs.id) {
      this.getBaseData();
    }
  },
  methods: {
    toolFormItem(index) {
      this.itemIndex = index;
      this.toolDialogVisible = true;
    },
    addFormItem(index) {
      const def = {
        buyPrice: 0,
        buyType: 1,
        buyNum: 0
      };
      if (index) {
        this.formData.productPriceArrs.splice(index, 0, def);
      } else {
        this.formData.productPriceArrs.push(def);
      }
    },
    delFormItem() {
      this.formData.productPriceArrs.splice(this.itemIndex, 1);
    },
    run() {
      let totalPrice = 0,
        lastPrice = 0,
        totalNums = 0;
      for (let i = 0; i < this.formData.productPriceArrs.length; i++) {
        const obj = this.formData.productPriceArrs[i];
        const type = obj.buyType ? 1 : -1;
        lastPrice = obj.buyPrice;
        totalPrice += obj.buyPrice * type * obj.buyNum;
        totalNums += type * obj.buyNum;
      }
      const argPrice = parseFloat((totalPrice / totalNums).toFixed(2));
      this.result = `最终手数：${totalNums}，平均价格：${argPrice}，最终价格：${lastPrice}，盈亏：${(lastPrice -
        argPrice) *
        totalNums *
        10}`;
    },
    save() {
      const url = this.initArgs.id
        ? this.$url.updateById
        : this.$url.addProduct;
      // url = this.$url.updateById;
      this.$axios.post(url, this.formData).then(msg => {
        this.$alert(msg.data.msg, "消息", {
          confirmButtonText: "确定",
          callback: () => {
            this.$router.push("/calculatioinsList");
          }
        });
      });
    },
    exports() {
      this.result = JSON.stringify(this.formData);
    },
    imports() {
      try {
        this.formData = JSON.parse(this.result);
      } catch (e) {
        console.log(e);
      }
    },
    getBaseData() {
      this.$axios
        .get(this.$url.findListByObj + "?_id=" + this.initArgs.id)
        .then(msg => {
          // const datas = msg.data;
          // this.productId = datas.productId;
          // this.productName = datas.productName;
          // this.formData = datas.productPriceArrs;
          this.formData = msg.data;
        });
    }
  }
};
</script>
<style lang="less" scoped>
.Calculatioins {
  text-align: center;
  .el-row {
    height: 36px;
    line-height: 36px;
  }
}
</style>
