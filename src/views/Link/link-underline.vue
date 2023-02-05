<template>
  <div style="padding: 20px">
    <Tlp-link :underline="false">无下划线</Tlp-link>
    <Tlp-link>有下划线</Tlp-link>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        codeList:[
          {code:'<Tlp-link :underline="false">无下划线</Tlp-link>'},
          {code:'<Tlp-link>有下划线</Tlp-link>'}
        ]
      }
    },
  }
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
