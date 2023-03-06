<template>
  <div>
    <div class="s0">
      <h3>
        <a>¶</a>
        Popover 弹出框
      </h3>
    </div>
    <div class="s0">
      <h3>
        <a>¶</a>
        基础用法
      </h3>
    </div>
    <ShowCode desc="trigger属性用于设置何时触发 Popover，支持2种触发方式：hover,click">
      <Default></Default>
    </ShowCode>
    <div class="s0">
      <h3>
        <a>¶</a>
        嵌套操作
      </h3>
      <span>当然，你还可以嵌套操作</span>
    </div>
    <ShowCode>
      <Delete></Delete>
    </ShowCode>
  </div>
</template>

<script>
import ShowCode from '@/components/ShowCode.vue'
import Default from './default.vue'
import Delete from './delete.vue'

export default {
  components: { ShowCode, Default, Delete }
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
      color: rgb(171, 164, 164);
    }

    &:hover a {
      opacity: 1;
    }
  }

  span {
    color: var(--color);
    font-size: 14px;
    margin-left: 18px;
  }
}
</style>
