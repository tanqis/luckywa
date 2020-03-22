<template>
  <div>
    <van-nav-bar title="代办管理"
                 left-text="返回"
                 left-arrow
                 @click-left="onClickLeft">
      <div slot="right">保存</div>
    </van-nav-bar>
    <quill-editor v-model="content"
                  ref="myQuillEditor"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @change="onEditorChange($event)">
    </quill-editor>

  </div>
</template>
<script>
import { NavBar } from "vant";
import xss from "xss";
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  name: "TodosManage",
  data() {
    return {
      content: null,
      editorOption: {}
    };
  },
  components: {
    vanNavBar: NavBar
  },
  mounted() {
    const str = xss.filterXSS("<sacript>alert</sacript>");
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onEditorBlur() {
      //失去焦点事件
    },
    onEditorFocus() {
      //获得焦点事件
    },
    onEditorChange() {
      //内容改变事件
    }
  }
};
</script>
<style lang="less">
.quill-editor {
  .ql-toolbar,
  .ql-container {
    border-top: 0;
    border-right: 0;
    border-left: 0;
    border-bottom: 1px solid #f5f5f5;
  }
  .ql-container {
    height: 450px;
    min-height: 360px;
  }
}
</style>
