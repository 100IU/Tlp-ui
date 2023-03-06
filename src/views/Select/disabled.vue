<template>
  <div class="">
    <Tlp-select v-model="input" disabled></Tlp-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      codeList: [{ code: '<Tlp-select v-model="input" disabled></Tlp-select>' }]
    }
  }
}
</script>
<style scoped></style>
