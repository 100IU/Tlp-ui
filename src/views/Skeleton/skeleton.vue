<template>
  <div>
    <div class="s0">
      <h3><a>¶</a>
        Skeleton 骨架屏</h3>
      <span>在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。</span>
    </div>
    <ShowCode>
      <SKdefault></SKdefault>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>
        基础用法</h3>
      <span>基础的骨架效果。</span>
    </div>
    <ShowCode>
      <Skanimate></Skanimate>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>
        自定义内容</h3>
      <span>以通过一个具名 Slot 来自己设定内容</span>
    </div>
    <ShowCode>
      <Skslot></Skslot>
    </ShowCode>
  </div>
</template>

<script>
import SKdefault from './default.vue'
import Skslot from './slot.vue'
import Skanimate from './animate.vue'

export default {
  components: {
    Skanimate,
    Skslot,
    SKdefault

  }

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
