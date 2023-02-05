<template>
  <div >
    <div class="s0">
      <h3><a>¶</a>
        Select选择器</h3>
      <span>当选项过多时，使用下拉框</span>
    </div>
    <div class="s0">
      <h3><a>¶</a>
        基础用法</h3>
    
    </div>
    <ShowCode>
      <Selectdefault></Selectdefault>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>
        禁用状态</h3>
      <span>选择器为不可用状态</span>
    </div>
    <ShowCode>
       <Selectdisable></Selectdisable>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>
        可清空单选</h3>
      <span>包含清空按钮，可清空选择器</span>
    </div>
    <ShowCode>
      <Selectclear></Selectclear>
    </ShowCode>
   
  </div>
</template>

<script>


import Selectclear from "./clear.vue";
import Selectdefault from "./default.vue";
import Selectdisable from '../Input/disable.vue';
export default {
  components:{
    Selectdefault,
    Selectclear,
    Selectdisable
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
