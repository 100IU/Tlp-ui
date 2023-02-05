<template>
  <div class="home">
    <div class="head">
      <Header></Header>
    </div>

    <div class="info">
      Tlpment-ui 一套基于 Vue 2.0 的桌面端组件库,参考Element-ui
    </div>
    <img src="../assets/bg.svg" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header.vue";
export default {
  components: {
    Header,
  },
  name: "HomeView",
};
</script>
<style lang="less" scoped>
.info {
  margin: 200px auto;
  position: absolute;
  margin: auto;
  top: 30%;
  left: 30%;
  font-size: 28px;
  line-height: 28px;
  color: #888;
  margin: 10px 0 5px;
}

.home {
  height: 110vh;

  // overflow: hidden;
  img {
    height: 100%;
  }

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    border-radius: 10px;
  }

  .head {
    width: 90%;
    position: sticky;
    height: 100px;
    margin: 0 auto;
    top: 0;
    z-index: 999;
    background-color: #fff;
    border-bottom: 1px solid #dcdfe6;
  }
}
</style>
