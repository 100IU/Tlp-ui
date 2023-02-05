<template>
  <div class="input">
    <Tlp-input v-model="input" placeholder="请输入内容" disabled></Tlp-input>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      input: "",
      codeList: [
        {
          code: '<Tlp-input v-model="input" placeholder="请输入内容" disabled></Tlp-input>',
        },
      ],
    };
  },
};
</script>
<style scoped>
.input {
  padding: 20px;
}
</style>
