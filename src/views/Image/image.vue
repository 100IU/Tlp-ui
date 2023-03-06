<template>
  <div>
    <div class="s0">
      <h3><a>¶</a>
        Image 图片</h3>
      <span>图片容器，在保留原生img的特性下，支持懒加载，大图预览等</span>
    </div>
    <div class="s0">
      <h3><a>¶</a>
        基础用法</h3>
      <span>除了普通的显示以外，点击图片还可以显示大图。</span>
    </div>
    <ShowCode>
      <Default></Default>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>
        懒加载</h3>
      <span>可通过lazy开启懒加载功能，当图片滚动到可视范围内才会加载。</span>
    </div>
    <ShowCode>
      <Lazy></Lazy>
    </ShowCode>
  </div>
</template>

<script>
import Default from './default.vue'
import Lazy from './lazy.vue'
export default {

  components: { Lazy, Default }
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
