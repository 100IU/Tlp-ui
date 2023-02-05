<template>
  <div>
    <div class="s0">
      <h3><a>¶</a>
        Checkbox多选框</h3>
      <span>一组备选项中进行多选</span>
    </div>
    <div class="s0">
      <h3><a>¶</a>
        基础用法</h3>
    </div>
    <ShowCode desc="在tlp-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。">
      <checkDefault></checkDefault>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>
        禁用状态</h3>
      <span>多选框为不可用状态</span>
    </div>
    <ShowCode desc="在对应元素上设置disabled属性即可。">
      <checkDisabled></checkDisabled>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>
        多选按钮</h3>
      <span>按钮样式的多选组合</span>
    </div>
    <ShowCode desc="使用多选按钮，只需要把tlp-checkbox元素替换为tlp-checkbox-button元素即可">
      <checkButton></checkButton>
    </ShowCode>
  </div>
</template>

<script>
import checkDefault from "./check-default.vue";
import checkDisabled from "./check-disabled.vue";
import checkButton from "./check-button.vue";

export default {
  components: {
    checkDefault,
    checkDisabled,
    checkButton,

  },
  data () {
    return {};
  },
};
</script>
<style scoped lang="less">
.s0 {
  text-align: left;
  margin-top: 50px;

  h3 {
    margin-bottom: 10px;

    color: #1f2f3d;

    a {
      padding-right: 4px;
      opacity: 0;
      cursor: pointer;
      color: rgb(171, 164, 164)
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
