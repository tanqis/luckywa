<template>
  <div class="lifeBox">
    <div>
      <ol>
        <li v-for="(user, index) in users" :key="index">
          {{ user.userName }}--{{ user.userEmail }}--{{ user.createDate }}
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$axios
        .get(this.$url.userFindAll)
        .then(msg => {
          const errMsg = msg.data.data.msg;
          if (errMsg) {
            this.users = [];
            this.$message({
              showClose: true,
              message: errMsg,
              type: 'error'
            });
          } else {
            this.users = msg.data.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.lifeBox {
  height: 100%;
  /* background: url("@/assets/imgs/life.jpg"); */
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
