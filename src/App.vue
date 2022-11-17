<template>
  <div id="app"
       class="the-black-friday">
    <Banner />
    <topicon />
    <div class="the-title-area the-banner1-bg the-pb">
      <div class="the-title-area-pt the-text-h1 the-text-desc-mb fwb tc">{{bannerTitle.title1}}</div>
      <div class="the-picture-flex">
        <picturebanner v-for="(picdata,index) in content.picturebanner"
                       :key="index"
                       :picdata="picdata" />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import picturebanner from './components/PicturesBanner.vue'
import topicon from './components/TopIcon.vue'
import content, { bannerTitle } from './content.json'
export default {
  name: 'App',
  components: {
    Banner,
    topicon,
    picturebanner,
  },
  data() {
    return { content, bannerTitle }
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
