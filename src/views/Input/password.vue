<template>
  <div class='input'>
    <Tlp-input v-model="input" show-password></Tlp-input>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      input: '',
      codeList:[
        {code:'<Tlp-input v-model="input" show-password></Tlp-input>'}
      ]
    };
  },
}
</script>
<style  >
.input {
  padding: 20px;
}

.input .tlp-icon i {
  font-size: 20px;
}
</style>