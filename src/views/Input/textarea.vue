<template>
  <div class='input'>
    <Tlp-input type="textarea" v-model="input" :rows="1"></Tlp-input>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      input: '',
      codeList:[{code:'<Tlp-input type="textarea" v-model="input" :rows="1"></Tlp-input>'}]
    };
  },
}
</script>
<style  scoped>

</style>