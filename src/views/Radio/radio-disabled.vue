<template>
  <div class="radio">
    <Tlp-radio v-model="radio" label="禁用" disabled>备选项1</Tlp-radio>
    <Tlp-radio v-model="radio" label="选中并禁用" disabled>备选项2</Tlp-radio>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '选中并禁用',
      codeList: [
        { code: '<Tlp-radio v-model="radio" label="禁用" disabled>备选项1</Tlp-radio>' },
        { code: '<Tlp-radio v-model="radio" label="选中并禁用" disabled>备选项2</Tlp-radio>' }
      ]
    }
  }
}
</script>
<style scoped>
.radio {
  padding: 20px;
}
</style>
