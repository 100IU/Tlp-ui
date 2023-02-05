<template>
  <div class="headr">
    <div class="head-one">
      <img src="../assets/logo.png" alt="" />
      <p @click="$router.push('/')">Tlpment</p>
    </div>
    <div class="head-two">
      <span @click="$router.push('/about/Start')">组件</span>

      <a href="https://gitee.com/tlp-ui/tlp-ui">gitee地址</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped lang="less">
.headr {
  display: flex;
  height: 100px;
  /* justify-content: center; */
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  font-size: 20px;
  span ,a{ 
    cursor: pointer;
    color:#9499d4;
    text-decoration: none;
  &:hover{
    color:#616ae5;
  }
  }
  .head-one {
    display: flex;
    cursor: pointer;
    // background-color: blue;
    align-items: center;
    color: #616ae5;
    font-weight: bold;
    font-size: 30px;
    img {
      width: 50px;
      height: 50px;
      margin-right: 8px;

      vertical-align: bottom;
    }
  }
  .head-two {
    span {
      margin: 0 20px;
    }
  }
}
</style>
