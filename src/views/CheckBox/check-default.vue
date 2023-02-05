<template>
  <div style="padding: 20px">
    <Tlp-checkBox label="复选框" v-model="checked">备选项</Tlp-checkBox>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      codeList:[
        {code:'<Tlp-checkBox label="复选框" v-model="checked">备选项</Tlp-checkBox>'}
      ]
    };
  },
};
</script>
<style scoped></style>
