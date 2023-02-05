<template>
  <div class="input">
    <Tlp-input
      type="text"
      v-model="input"
      show-word-limit
      maxlength="10"
      style="padding-bottom: 10px"
    ></Tlp-input>
    <Tlp-input
      type="textarea"
      v-model="input"
      show-word-limit
      maxlength="10"
    ></Tlp-input>
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
          code: '<Tlp-input type="text" v-model="input" show-word-limit maxlength="10"></Tlp-input>',
        },
        {
          code: '<Tlp-input type="textarea" v-model="input" show-word-limit maxlength="10"></Tlp-input>',
        },
      ],
    };
  },
};
</script>
