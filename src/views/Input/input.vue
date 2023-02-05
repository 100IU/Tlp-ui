<template>
  <div>
    <div class="s0">
      <h3><a>¶</a>
        Input输入框</h3>
      <span>通过键盘输入字符</span>
    </div>
    <div class="s0">
      <h3><a>¶</a>
        基础用法</h3>
    
    </div>
    <ShowCode>
      <Inputdefault></Inputdefault>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>
        禁用状态</h3>
      
    </div>
    <ShowCode desc="通过 disabled 属性指定是否禁用 input 组件">
      <Inputdisable></Inputdisable>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>
        可清空</h3>
     
    </div>
    <ShowCode desc="使用clearable>属性即可得到一个可清空的输入框">
      <Inputclear></Inputclear>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>
        密码框</h3>
      
    </div>
    <ShowCode desc="使用show-password属性即可得到一个可切换显示隐藏的密码框">
      <Inputpwd></Inputpwd>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>
        尺寸</h3>
      
    </div>
    <ShowCode desc="可通过 size 属性指定输入框的尺寸">
      <Disize></Disize>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>
        文本域</h3>
      <span>用于输入多行文本信息，通过将type属性变为textarea</span>
    </div>
    <ShowCode desc="文本域高度可通过 rows 属性控制">
      <Textarea></Textarea>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>
        自适应文本高度的文本域</h3>
    </div>
    <ShowCode desc="通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，">
      <Inputasize></Inputasize>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>
        输入长度限制</h3>
      
    </div>
    <ShowCode desc="maxlength 和 minlength 是原生属性，用来限制输入框的字符长度">
      <Inputlength></Inputlength>
    </ShowCode>
  </div>
</template>

<script>
import Inputdefault from "./default.vue";
import Inputdisable from "./disable.vue";
import Inputclear from "./clear.vue";
import Inputpwd from "./password.vue";
import Inputasize from "./autosize.vue";
import Inputlength from "./length.vue";
import Disize from "./disize.vue";
import Textarea from "./textarea.vue";
import ShowCode from "@/components/ShowCode.vue";
export default {
  components: {
    Inputdefault,
    Inputdisable,
    Inputclear,
    Inputpwd,
    Inputasize,
    Inputlength,
    Disize,
    Textarea,
    ShowCode,
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
