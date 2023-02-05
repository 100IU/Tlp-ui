<template>
  <div class="radio">
    <Tlp-radio v-model="radio" label="1">备选项1</Tlp-radio>
    <Tlp-radio v-model="radio" label="2">备选项2</Tlp-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      codeList: [
        { code: '<Tlp-radio v-model="radio" label="1">备选项1</Tlp-radio>' },
        { code: '<Tlp-radio v-model="radio" label="2">备选项2</Tlp-radio>' },
      ],
    };
  },
};
</script>
<style scoped>
.radio {
  padding: 20px;
}
</style>
