<template>
  <div id="app">
   
    <text1></text1>
  </div>
</template>

<script>
import text1 from './components/HelloWorld.vue'
export default {
  components: {
    text1,
  },

}
</script>
<style  scoped>
 .snow-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 100001;
    }
</style>