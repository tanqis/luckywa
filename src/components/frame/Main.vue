<template>
  <div class="Main">
    <van-swipe :autoplay="3000"
               class="bounceIn"
               indicator-color="white"
               style="height: 180px;">
      <van-swipe-item v-for="(arr, items) in carouselData"
                      :key="items">
        <ul>
          <li v-for="(item, index) in arr"
              :key="index">{{ item }}</li>
        </ul>
      </van-swipe-item>
    </van-swipe>
    <van-grid :gutter="10"
              style="margin:10px 0;"
              :clickable="true">
      <van-grid-item v-for="(item, index) in cardsData"
                     :key="index"
                     :icon="item.icon"
                     :text="item.name"
                     class="bounceIn"
                     :style="styles[index]"
                     :to="item.url" />
    </van-grid>

    <van-notice-bar text="本页面电脑访问与手机访问差别较大，推荐使用手机浏览器访问"
                    color="#1989fa"
                    background="#ecf9ff"
                    left-icon="volume-o" />

    <van-panel class="newsBoxs"
               title="宗旨"
               desc=""
               status="">
      <div>
        <p class="left">搞钱搞钱搞钱，一切都是是为了搞钱</p>
        <p class="right">--《系统》</p>
      </div>
    </van-panel>

    <van-panel class="newsBoxs"
               title="自省"
               desc=""
               status="">
      <div>
        <p class="left">我辈男儿</p>
        <p class="left">吾日三省吾身,见贤思齐焉,见不贤而自省也</p>
        <p class="right">--《论语》</p>
      </div>
    </van-panel>

    <van-panel class="newsBoxs"
               title="兵法"
               desc=""
               status="">
      <div>
        <p class="left">
          夫未战而庙算胜者，得算多也；未战而庙算不胜者，得算少也。多算胜，少算不胜，而况于无算乎！
        </p>
        <p class="right">--《孙子兵法》</p>
      </div>
    </van-panel>
    <van-panel class="newsBoxs"
               title="小伙伴招募"
               desc="有偿开发"
               status="有效">
      <div>
        <p class="left">
          当前网站正在紧急开发中，有兴趣小伙伴可以加入一起完成。
        </p>
        <p class="right">联系方式-->个人简介</p>
      </div>
    </van-panel>
    <van-panel class="newsBoxs"
               title="空白"
               desc=""
               status="">
      <div>
        <p class="left">
          什么都没有
        </p>
        <p class="right">--</p>
      </div>
    </van-panel>
    <van-divider>我是有底线的</van-divider>
  </div>
</template>
<script>
import homeDatas from "@/assets/js/homeConfig";
import {
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  NoticeBar,
  Panel,
  Divider
} from "vant";
export default {
  name: "Main",
  components: {
    vanSwipe: Swipe,
    vanSwipeItem: SwipeItem,
    vanGrid: Grid,
    vanGridItem: GridItem,
    vanNoticeBar: NoticeBar,
    vanPanel: Panel,
    vanDivider: Divider
  },
  data() {
    return {
      styles: this.randomColor(),
      user: this.$user,
      cardsData: [],
      carouselData: []
    };
  },
  created() {
    this.cardsData = homeDatas.menus;
    this.carouselData = homeDatas.carousels;
  },
  mounted() {},
  methods: {
    randomColor() {
      let styleArr = [];
      for (let i = 0; i < 10; i++) {
        const random = Math.random() * 10;
        styleArr.push("color:" + homeDatas.colors[parseInt(random)] + ";");
      }
      return styleArr;
    }
  }
};
</script>
<style lang="less" scoped>
.Main {
  .van-swipe {
    .van-swipe-item {
      text-align: left;
      // font-size: 14px;
      height: 30px;
      line-height: 30px;
      color: #fff;
    }
    .van-swipe-item:nth-child(2n) {
      background: #d87aec;
    }
    .van-swipe-item:nth-child(2n + 1) {
      background: #62c1fe;
    }
  }

  .newsBoxs {
    border-bottom: 10px solid #f2f3f8;
    padding: 0 10px;
    font-size: 12px;
    line-height: 18px;
    color: #8f8f8f;
    .van-panel__header {
      border-bottom: 1px solid rgb(98, 193, 254);
    }
    .left {
      text-align: left;
      text-indent: 30px;
    }
    .right {
      text-align: right;
    }
  }
}
</style>
