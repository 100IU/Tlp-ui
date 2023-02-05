<template>
  <div style="padding: 20px">
    <Tlp-checkboxGroup v-model="checkList">
      <Tlp-checkBox label="选中且禁用" disabled></Tlp-checkBox>
      <Tlp-checkBox label="复选框"></Tlp-checkBox>
      <Tlp-checkBox label="复选框1"></Tlp-checkBox>
      <Tlp-checkBox label="复选框2"></Tlp-checkBox>
    </Tlp-checkboxGroup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkList: ['选中且禁用', '复选框'],
      codeList:[
        {code:'<Tlp-checkboxGroup v-model="checkList">'},
          {code:'<Tlp-checkBox label="选中且禁用" disabled></Tlp-checkBox>'},
          {code:'<Tlp-checkBox label="复选框"></Tlp-checkBox>'},
          {code:'<Tlp-checkBox label="复选框1"></Tlp-checkBox>'},
          {code:'<Tlp-checkBox label="复选框2"></Tlp-checkBox>'},

      ]
    };
  },
};
</script>
