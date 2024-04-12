<template>
  <div id="app">

    <texts ></texts>
  </div>
</template>

<script>

import texts from './components/HelloWorld.vue'
export default {
  components: {
    texts
  },
 
}
</script>
<style >
* {
  margin: 0;
  padding: 0;
}
@font-face {
      font-family: "Roboto";
      src: url("https://staticdn.vivaia.com/oneapi/fonts/Roboto-Regular.ttf");
    }

    @font-face {
      font-family: "Roboto Bold";
      src: url("https://staticdn.vivaia.com/oneapi/fonts/Roboto-Bold.ttf");
    }

    @font-face {
      font-family: "Noto Serif";
      src: url("https://staticdn.vivaia.com/oneapi/fonts/NotoSerif-Regular.ttf");
    }

    @font-face {
      font-weight: 300;
      font-family: "Roboto Light";
      src: url("https://staticdn.vivaia.com/oneapi/fonts/Roboto-Light.ttf");
    }

</style>