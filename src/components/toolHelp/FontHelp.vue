<template>
  <div>
    <p>字体图标示例ddd</p>
    <hr>
    <ol>
      <li v-for="(item, index) in fontData"
          :key="index"><i :class="'fa '+item"></i> <span>{{item}}</span></li>
    </ol>
  </div>
</template>

<script>
// import "../../static/fontIcon ";
export default {
  data() {
    return {
      fontData: []
    };
  },
  methods: {
    getFontIconData() {
      this.$axios("./static/fontIcon.json").then(msg => {
        this.fontData = msg.data.data;
      });
    }
  },
  created() {
    this.getFontIconData();
    // console.log("created");
  },
  mounted() {
    // console.log("mounted");
  }
};
</script>
<style scoped>
ol {
  overflow: auto;
  font-size: 1.4em;
}
ol li {
  float: left;
  padding: 5px 10px;
  margin-right: 30px;
}

ol li span {
  /* display: inline-block; */
  padding: 0 10px;
  color: #fff;
  background: #5ad5b6;
  border-radius: 3px;
}
</style>

