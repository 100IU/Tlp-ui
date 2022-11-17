<template>
  <div id="app"
       class="the-black-friday">
    <Banner />
    <topicon />
    <div class="the-picture-flex other">
      <picturebanner v-for="item in picturebanner"
                     :key="index" />
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import picturebanner from './components/PicturesBanner.vue'
import topicon from './components/TopIcon.vue'

export default {
  name: 'App',
  components: {
    Banner,
    topicon,
    picturebanner,
  },
}
</script>

<style>
@font-face {
  font-family: 'Roboto';
  src: url('https://staticdn.vivaia.com/oneapi/fonts/Roboto-Regular.ttf');
}

@font-face {
  font-family: 'Roboto-Bold';
  src: url('https://staticdn.vivaia.com/oneapi/fonts/Roboto-Bold.ttf');
}

@font-face {
  font-family: 'Noto Serif';
  src: url('https://staticdn.vivaia.com/oneapi/fonts/NotoSerif-Regular.ttf');
}
@font-face {
  font-family: 'Roboto-Light';
  src: url('https://staticdn.vivaia.com/oneapi/fonts/Roboto-Light.ttf');
}
</style>
