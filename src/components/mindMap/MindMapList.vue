<template>
  <div class="mindMapList">
    <van-nav-bar
      title="思维导图列表"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <van-search
      v-model="searchValue"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>

    <div class="listOption">
      <ul>
        <li
          v-for="(item, index) in mindMapData"
          :key="index"
          class="listOptionLi"
        >
          <div @click="goView" style="height:60px;">
            <div class="mindMapImg">
              <van-icon name="cluster-o" />
            </div>
            <div class="mindMapInfo">
              <div class="infoName">{{ item.name }}</div>
              <div class="infoDate">{{ item.date }}</div>
            </div>
          </div>
          <span class="itemMore">
            <van-icon name="ellipsis" @click="setPopupShow = true" />
          </span>
        </li>
      </ul>
    </div>

    <span class="addOption">
      <van-icon name="plus" @click="addPopupShow = true"
    /></span>
    <van-popup v-model="addPopupShow" position="bottom">
      <van-grid clickable :column-num="2">
        <van-grid-item
          icon="description"
          text="新建文档"
          @click="createDocument"
        />
        <van-grid-item
          icon="paid"
          text="新建文件夹"
          @click="createFoldDialog = true"
        />
      </van-grid>
    </van-popup>
    <van-popup v-model="setPopupShow" position="bottom">
      <van-cell-group title="所选内容" icon="cluster-o">
        <van-cell
          title="重命名"
          icon="edit"
          :border="false"
          clickable
          @click="reName"
        />
        <van-cell title="移动" icon="exchange" :border="false" clickable />
        <van-cell title="复制" icon="description" :border="false" clickable />
        <van-cell title="分享" icon="share" :border="false" clickable />
        <van-divider :style="{ padding: '0 16px', margin: 0 }"></van-divider>
        <van-cell title="加密" icon="lock" clickable />
        <van-switch-cell
          v-model="checked"
          title="标星"
          icon="label-o"
          :border="false"
          clickable
        />
        <van-divider
          :style="{ padding: '0 16px', margin: '2px 0' }"
        ></van-divider>
        <van-cell title="删除" icon="delete" clickable />
      </van-cell-group>
    </van-popup>

    <van-dialog
      v-model="createFoldDialog"
      title="新建文件夹"
      show-cancel-button
      @confirm="createFoldConfirm"
      @cancel="createFoldCancel"
    >
      <van-field v-model="foldName" placeholder="输入标题" />
    </van-dialog>

    <van-dialog
      v-model="reNameDialog"
      title="重命名文档"
      show-cancel-button
      @confirm="reNameConfirm"
      @cancel="reNameCancel"
    >
      <van-field v-model="foldName" placeholder="输入标题" />
    </van-dialog>
  </div>
</template>
<script>
import {
  NavBar,
  Search,
  Icon,
  Dialog,
  Field,
  Popup,
  Grid,
  GridItem,
  SwitchCell,
  Cell,
  CellGroup,
  Divider
} from 'vant';
export default {
  name: 'mindMapList',
  components: {
    vanNavBar: NavBar,
    vanSearch: Search,
    vanPopup: Popup,
    vanField: Field,
    vanGrid: Grid,
    vanGridItem: GridItem,
    vanSwitchCell: SwitchCell,
    vanCell: Cell,
    vanCellGroup: CellGroup,
    vanIcon: Icon,
    vanDivider: Divider,
    [Dialog.Component.name]: Dialog.Component
    // vanDialog: Dialog,
  },
  data() {
    return {
      checked: false,
      createFoldDialog: false,
      reNameDialog: false,
      addPopupShow: false,
      setPopupShow: false,
      searchValue: '',
      foldName: '',
      isAll: 'me',
      mapName: '',
      moreVisible: false,
      mindMapData: [
        { name: '欢迎使用思维导图1', date: '12月19日 20:47' },
        { name: '欢迎使用思维导图2', date: '12月20日 20:47' },
        { name: '欢迎使用思维导图3', date: '12月21日 20:47' }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.push('/index');
    },
    onSearch() {},
    moreComm() {},
    goView() {
      this.$router.push('/mindMapView');
    },
    createFoldConfirm() {
      this.addPopupShow = false;
    },
    createFoldCancel() {
      this.addPopupShow = false;
    },
    reName() {
      this.setPopupShow = false;
      this.reNameDialog = true;
    },
    reNameConfirm() {},
    reNameCancel() {},
    createDocument() {
      this.$router.push('./mindMapManage');
    }
  }
};
</script>

<style lang="less" scoped>
.mindMapList {
  position: relative;
  .listOption {
    .listOptionLi {
      width: 100%;
      height: 60px;
      line-height: 60px;
      list-style: none;
      position: relative;
      .mindMapImg {
        float: left;
        width: 60px;
        border-bottom: 1px solid transparent;
        text-align: center;
      }
      .mindMapInfo {
        float: left;
        width: calc(~'100% - 60px');
        border-bottom: 1px solid #e6e6e6;
        text-align: left;
        .infoName {
          height: 40px;
          line-height: 40px;
          margin-top: 5px;
          font-size: 14px;
        }
        .infoDate {
          margin-top: -5px;
          height: 20px;
          line-height: 20px;
          font-size: 10px;
          color: #c6c6c6;
        }
      }
      .itemMore {
        position: absolute;
        top: 0px;
        right: 20px;
        i {
          transform: rotate(90deg);
        }
      }
    }
  }

  .addOption {
    position: absolute;
    right: 40px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 25px;
    background: #666;
    color: #fff;
    text-align: center;
    font-size: 20px;
  }
}
</style>
