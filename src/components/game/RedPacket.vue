<template>
  <div class="RedPacket">
    <van-row class="infoTop">
      <van-col span="10">
        <van-image round
                   width="48px"
                   height="48px"
                   style="margin-top: 6px;"
                   src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="userAccount">账号：木有</div>
        <div class="userBalance">金币：<span>0.00</span></div>
      </van-col>
      <van-col span="14"
               style="text-align:right;">
        <span class="topIn">
          <van-icon name="paid" />
          提现
        </span>
        <span class="topIn">
          <van-icon name="refund-o" />
          充值
        </span>
        <span class="topIn">
          <van-icon name="contact" />
          推广
        </span>

      </van-col>
    </van-row>
    <div class="message">
      <br>
      <van-cell-group title="">
        <van-cell title="红包1"
                  :border="false"
                  clickable></van-cell>
        <br>
        <van-cell title="红包2"
                  :border="false"
                  clickable></van-cell>
        <br>
        <van-cell title="红包3"
                  :border="false"
                  clickable></van-cell>
      </van-cell-group>
    </div>
    <div class="footBox">
      <van-button type="danger"
                  size="small"
                  class="sendLeft"
                  @click="sendRedPacket=true">点击发送红包</van-button>
      <div class="sendRight">
        <span @click="settingShow=true">
          <van-icon name="setting" />
        </span>
        <span @click="moreShow = true">
          <van-icon name="weapp-nav"
                    style="transform: rotate(90deg);" /></span>
      </div>
    </div>

    <van-dialog v-model="sendRedPacket"
                title="发送红包设置"
                show-cancel-button
                @confirm="createFoldConfirm"
                @cancel="createFoldCancel">
      <van-cell-group title=" ">
        <van-cell title="红包大小(金币)"
                  icon="underway"
                  :border="false"
                  clickable>
          <van-stepper v-model="value"
                       slot="default"
                       min="10"
                       max="100"
                       integer />
        </van-cell>
        <van-cell title="红包雷号"
                  icon="underway"
                  :border="false"
                  clickable>
          <van-stepper v-model="value"
                       slot="default"
                       min="10"
                       max="100"
                       integer />
        </van-cell>
      </van-cell-group>
    </van-dialog>

    <van-popup v-model="moreShow"
               position="bottom">
      <van-grid clickable
                :column-num="4">
        <van-grid-item icon="description"
                       text="玩法介绍" />
        <van-grid-item icon="paid"
                       text="记录明细" />
        <van-grid-item icon="paid"
                       text="下级概念" />
        <van-grid-item icon="paid"
                       text="复制ID" />

        <van-grid-item icon="paid"
                       text="金币互转" />
        <van-grid-item icon="paid"
                       text="代理交流" />
        <van-grid-item icon="paid"
                       text="佣金福利" />
        <van-grid-item icon="paid"
                       text="联系客服" />
      </van-grid>
    </van-popup>

    <van-popup v-model="settingShow"
               position="bottom">
      <van-cell-group title="机器人托管设置"
                      icon="cluster-o">
        <van-divider>自动抢包设置</van-divider>
        <van-cell title="时间频率(秒)"
                  icon="underway"
                  :border="false"
                  clickable>
          <van-stepper v-model="value"
                       slot="default"
                       min="10"
                       max="100"
                       integer />
        </van-cell>
        <van-switch-cell v-model="checked"
                         title="自动抢包是否开启"
                         icon="good-job"
                         :border="false"
                         clickable />

        <van-divider>自动发包设置</van-divider>
        <van-cell title="红包大小(金币)"
                  icon="underway"
                  :border="false"
                  clickable>
          <van-stepper v-model="value"
                       slot="default"
                       min="10"
                       max="100"
                       integer />
        </van-cell>
        <van-cell title="红包雷号"
                  icon="underway"
                  :border="false"
                  clickable>
          <van-stepper v-model="value"
                       slot="default"
                       min="10"
                       max="100"
                       integer />
        </van-cell>

        <van-cell title="时间频率(秒)"
                  icon="underway"
                  :border="false"
                  clickable>
          <van-stepper v-model="value"
                       slot="default"
                       min="10"
                       max="100"
                       integer />
        </van-cell>

        <van-switch-cell v-model="checked"
                         title="自动发包是否开启"
                         icon="good-job"
                         :border="false"
                         clickable />

      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
import {
  //   NavBar,
  //   Search,
  Icon,
  Dialog,
  Field,
  Popup,
  Grid,
  GridItem,
  SwitchCell,
  Button,
  Row,
  Col,
  Stepper,
  Image,
  Cell,
  CellGroup,
  Divider
} from "vant";
export default {
  name: "RedPacket",
  components: {
    // vanNavBar: NavBar,
    // vanSearch: Search,
    vanPopup: Popup,
    // vanField: Field,
    vanStepper: Stepper,
    vanGrid: Grid,
    vanGridItem: GridItem,
    vanSwitchCell: SwitchCell,
    vanCell: Cell,
    vanCellGroup: CellGroup,
    vanButton: Button,
    vanIcon: Icon,
    vanDivider: Divider,
    vanImage: Image,
    vanRow: Row,
    vanCol: Col,
    [Dialog.Component.name]: Dialog.Component,
    vanDialog: Dialog
  },
  data() {
    return {
      value: "",
      checked: false,
      sendRedPacket: false,
      settingShow: false,
      moreShow: false
    };
  },
  //   watch() {},
  created() {},
  mounted() {},
  methods: {
    createFoldConfirm() {
      this.sendRedPacket = false;
    },
    createFoldCancel() {
      this.sendRedPacket = false;
    }
  }
};
</script>

<style lang="less" scoped>
.RedPacket {
  height: 100%;
  font-size: 14px;
  .infoTop {
    background: #e9e9e9;
    .van-col {
      height: 60px;
      line-height: 60px;
      position: relative;
      .van-image {
        margin-left: 8px;
      }
      .userAccount {
        height: 24px;
        line-height: 24px;
        position: absolute;
        left: 64px;
        top: 6px;
      }
      .userBalance {
        height: 24px;
        line-height: 24px;
        position: absolute;
        left: 64px;
        top: 30px;
      }
      .topIn {
        margin-right: 10px;

        height: 30px;
        line-height: 30px;
        display: inline-block;
        i {
          font-size: 18px;
          position: relative;
          top: 2px;
        }
      }
    }
  }
  .message {
    height: calc(~"100% - 100px");
    background: #dfdfdf;
  }
  .footBox {
    height: 40px;
    line-height: 40px;
    background: #e9e9e9;
    .sendLeft {
      height: 40px;
      width: calc(~"100% - 60px");
    }
    .sendRight {
      display: inline-block;
      span {
        display: inline-block;
        text-align: center;
        width: 30px;
        font-size: 20px;
        top: 4px;
        position: relative;
        color: #ee0a24;
      }
    }
  }
}
</style>