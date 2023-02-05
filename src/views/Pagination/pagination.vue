<template>
<div >
  <div class="s0">
      <h3><a>¶</a>
        Pagination 分页
</h3>
      <span>当数据量过多时，使用分页分解数据。</span>
    </div>
    <div class="s0">
      <h3><a>¶</a>
        基础用法</h3>
      <span>除了基本的分页功能，还有选择设置每页最大显示页数</span>
    </div>
  <ShowCode >
    <Default></Default>
  </ShowCode>
  <div class="s0">
      <h3><a>¶</a>
        带有背景色的分页</h3>
     
    </div>
  <ShowCode desc="设置background属性可以为分页按钮添加背景色。">
    <Button></Button>
  </ShowCode>
</div>
</template>

<script>
import ShowCode from '@/components/ShowCode.vue';
import Button from './button.vue';
import Default from './default.vue';

export default {
    
    components: { ShowCode, Default, Button }
}
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