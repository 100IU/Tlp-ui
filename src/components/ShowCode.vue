<template>
  <div class="tlp">
    <slot></slot>
    <div class="border"></div>
    <div class="icon" @click="showCode" v-if="!show">
      <Tlp-icon icon="down_"></Tlp-icon>
      <span class="span">显示代码</span>
    </div>
    <div class="code" v-else>
      <div class="info" v-if="desc">{{ desc }}</div>
      <div class="code_">
        <p v-for="(v, i) in code" :key="i">{{ v.code }}</p>
      </div>

      <div class="border"></div>
      <div class="icon" @click="ClearCode">
        <Tlp-icon icon="up_"></Tlp-icon>
        <span class="span">隐藏代码</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowCode",
  data() {
    return {
      show: false,
      code: [],
    };
  },
  props: {
    
    desc: {
      type: String,
    },
  },
  methods: {
    showCode() {
      console.log(this);
      this.code = this.$children[0].codeList;
      this.show = true;
    },
    ClearCode() {
      this.show = false;
    },
  },
};
</script>
<style scoped lang="less">
.tlp {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  padding-bottom: 20px;
  // justify-content: center;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;

  margin: 10px;

  .border {
    width: 100%;
    background-color: #eaeefb;
    height: 2px;
    margin-top: 6px;
  }
  .icon {
    cursor: pointer;
    width: 100%;
    // height: 44px;
    transform: translateX(0px);
    transition: 0.5s;
    margin-top: 10px;
    // border-bottom: 1px solid #eaeefb;
    .span {
      font-size: 14px;
      margin-left: 4px;

      display: none;
    }
    &:hover {
      color: #409eff;
      transform: translateX(-30px);
    }
    &:hover .span {
      display: inline-block;
    }
  }
  .code {
    width: 100%;

    margin-top: 20px;
    .info {
      width: calc(100%-40px);
      margin: 0 20px 30px 20px;
      padding: 20px 10px;
      font-size: 14px;
      display: flex;
      align-items: center;
      border: 1px solid #ebebeb;
      border-radius: 3px;
      color: #5e6d82;
    }
    .code_ {
      margin-bottom: 20px;
    }
    p {
      margin: 0 30px;
      padding-top: 10px;
      font-size: 14px;
      color: #a0a6ac;
      text-align: left;
    }
  }
}
</style>
