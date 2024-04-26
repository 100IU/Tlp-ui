<template>
  <div class="button">
    <div class="s0">
      <h3><a>¶</a> Button按钮</h3>
      <span>常用的按钮操作</span>
    </div>
    <div class="s0">
      <h3><a>¶</a> 基础用法</h3>
      <span>基础的按钮用法</span>
    </div>
    <ShowCode desc="使用type、plain、round属性来定义 Button 的样式">
      <ButtonDefault ref="code"></ButtonDefault>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a> 禁用状态</h3>
      <span>按钮为不可用状态</span>
    </div>

    <ShowCode desc="使用disabled属性来定义按钮是否可用">
      <ButtonDisabled ref="code"></ButtonDisabled>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a> 不同尺寸</h3>
      <span>Button组件提供了除默认值外的三种尺寸</span>
    </div>
    <ShowCode
      desc="额外的尺寸:medium、small、mini，通过设置size属性来配置它们。"
    >
      <ButtonSize ref="code"></ButtonSize>
    </ShowCode>
  </div>
</template>
<script>
import ButtonDefault from "./button-dedault.vue";
// import ButtonDisabled from "./button-disabled.vue";

import ButtonSize from "./button-size.vue";
export default {
  components: {
    ButtonDefault,
    ButtonDisabled,
    ButtonSize
  }
}
</script>
<style lang="less">
.button {
  width: 80%;
  margin-left: 20px;
}

.s0 {
  text-align: left;
  margin-top: 50px;

  h3 {
    margin-bottom: 10px;

    color: var(--color);

    a {
      padding-right: 4px;
      opacity: 0;
      cursor: pointer;
      color: rgb(171, 164, 164);
    }

    &:hover a {
      opacity: 1;
    }
  }

  span {
    color: #5e6d82;
    font-size: 14px;
    margin-left: 18px;
  }
}
</style>
