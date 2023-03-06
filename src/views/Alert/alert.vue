<template>
  <div>
    <div class="s0">
      <h3><a>¶</a>
        Alert警告</h3>
      <span>一组备选项中进行多选</span>
    </div>
    <div class="s0">
      <h3><a>¶</a>
        基础用法</h3>
      <span>页面中的非浮层元素，不会自动消失</span>
    </div>
    <ShowCode desc="Alert 组件提供四种主题，由type属性指定，默认值为info。">
      <Default></Default>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>
        主题</h3>
      <span>Alert组件提供了light和dark两个不同的主题</span>
    </div>
    <ShowCode desc="通过设置effect属性来改变主题，默认为light。">
      <Dark></Dark>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>
        带有icon</h3>
      <span>表示某种状态</span>
    </div>
    <ShowCode desc="通过设置show-icon属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。">
      <Icon></Icon>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>
        辅助性文字介绍</h3>
      <span>包含图标，文字内容</span>
    </div>
    <ShowCode desc="设置description属性来帮助你更好地介绍，我们称之为辅助性文字">
      <Atext></Atext>
    </ShowCode>
  </div>
</template>

<script>
import Dark from './dark.vue'
import Default from './default.vue'
import Icon from './icon.vue'
import Atext from './text.vue'
export default {
  data () {
    return {}
  },
  components: { Dark, Default, Icon, Atext }
}
</script>
<style scoped lang="less">
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
