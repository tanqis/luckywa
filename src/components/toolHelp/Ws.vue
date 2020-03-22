<template>
  <div class="WS">
    <van-nav-bar title="聊天室"
                 left-text="返回"
                 right-text=""
                 left-arrow
                 @click-left="onClickLeft" />
    <div>{{title}}</div>
    <div class="msgBox"
         v-html="msg">
    </div>
    <div>
      <van-field v-model="inputVal" />
      <van-button type="danger"
                  size="small"
                  class="sendBtn"
                  @click="sendMsg">发送</van-button>
    </div>
  </div>
</template>
<script>
import { NavBar, Field, Button } from "vant";
export default {
  name: "WS",
  components: {
    vanNavBar: NavBar,
    vanButton: Button,
    vanField: Field
  },
  data() {
    return {
      inputVal: "",
      title: "ws:",
      msg: "",
      ws: null
    };
  },
  created() {
    let _this = this;
    let ws = new WebSocket("ws://localhost:8087/ws/socketTest");
    this.ws = ws;
    ws.onopen = e => {
      console.log("服务器连接【成功】");
    };
    ws.onclose = e => {
      console.log("服务器连接【断开】");
    };
    ws.onerror = e => {
      console.log("服务器连接【异常】");
    };
    ws.onmessage = e => {
      const data = JSON.parse(e.data);
      if (data.type === "title") {
        _this.title += data.msg;
      } else if (data.type === "selfMsg") {
        _this.msg += "@" + data.msg + "<br>";
      } else if (data.type === "sysMsg") {
        _this.msg += "$" + data.msg + "<br>";
      }
    };
    // ws.send()
    // ws.close()
  },
  methods: {
    sendMsg() {
      this.ws.send(this.inputVal);
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.WS {
  .msgBox {
    height: 300px;
    width: 100%;
  }
  .sendBtn {
    width: 100%;
  }
}
</style>