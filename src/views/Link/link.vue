<template>
  <div class="">
    <div class="s0">
      <!-- <h2><>¶</></h2> -->
      <h3><a>¶</a>
        Link 文字链接</h3>
      <span>文字超链接</span>
    </div>
    <div class="s0">
      <h3><a>¶</a>基础用法</h3>
      <span>基础的文字链接用法。</span>
    </div>

    <ShowCode>
      <linkDefault></linkDefault>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>禁用状态</h3>
      <span>文字链接变为不可用状态</span>
    </div>
    <ShowCode>
      <linkDisabled></linkDisabled>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>下划线</h3>
      <span>文字链接下划线。</span>
    </div>
    <ShowCode>
      <linkUnderline></linkUnderline>
    </ShowCode>
  </div>
</template>

<script>
import linkDefault from './link-default.vue';
import linkDisabled from './link-disabled.vue';
import linkUnderline from './link-underline.vue';
export default {
  components: {
    linkDefault,
    linkDisabled,
    linkUnderline
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
