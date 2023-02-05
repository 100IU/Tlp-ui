<template>
  <div class="input">
    <Tlp-input type="textarea" v-model="input" autosize></Tlp-input>
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
          code: '<Tlp-input type="textarea" v-model="input" autosize></Tlp-input>',
        },
      ],
    };
  },
};
</script>
<style scoped></style>
