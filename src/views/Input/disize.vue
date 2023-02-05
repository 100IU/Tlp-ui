<template>
  <div class="input">
    <Tlp-input v-model="input" size="medium"></Tlp-input>
    <Tlp-input v-model="input" size="small"></Tlp-input>
    <Tlp-input v-model="input" size="mini"></Tlp-input>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      input: "",
      codeList: [
        { code: '<Tlp-input v-model="input" size="medium"></Tlp-input>' },
        { code: '<Tlp-input v-model="input" size="small"></Tlp-input>' },
        {
          code: '<Tlp-input v-model="input" size="mini"></Tlp-input>',
        },
      ],
    };
  },
};
</script>
<style scoped>
.input {
  padding: 20px;
  display: flex;
}

.tlp-input {
  padding: 4px;
}
</style>
