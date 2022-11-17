<template>
  <div id="app"
       class="the-black-friday">
    <Banner />
    <topicon />
    <div class="the-title-area the-banner1-bg the-pb">
      <div class="the-title-area-pt the-text-h1 the-text-mb fwb tc">{{bannerTitle.title1}}</div>
      <div class="the-picture-flex the-desc-item-banner ">
        <picturebanner v-for="(picdata,index) in thepicturebanner"
                       :key="index"
                       :picdata="picdata"
                       class="the-a-number" />
      </div>
    </div>
    <div class="the-title-area the-pb ">
      <div class="the-bannerbg-re the-desc-item-banner">
        <picture>
          <source :srcset=bannerbg.m_bgsrc
                  media="(max-width: 768px)" />
          <img class="sp_img"
               alt="VIVAIA"
               :src=bannerbg.pc_bgsrc />
        </picture>
        <div class="the-text-h1  fwb tc the-text-re-ab">{{bannerTitle.title3}}</div>
      </div>
      <div class="the-picture-flex the-desc-item-banner ">
        <picturebanner v-for="(picdata,index) in thepicturebanner1"
                       :key="index"
                       :picdata="picdata"
                       class="the-a-number" />
      </div>
    </div>
    <vmbutton :viewmore="ViewMore"
              :bannerTitle='bannerTitle' />
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import picturebanner from './components/PicturesBanner.vue'
import topicon from './components/TopIcon.vue'
import vmbutton from './components/VMButton.vue'
import {
  bannerbg,
  bannerTitle,
  thepicturebanner,
  thepicturebanner1,
  ViewMore,
} from './content.json'
export default {
  name: 'App',
  components: {
    Banner,
    topicon,
    picturebanner,
    vmbutton,
  },
  data() {
    return {
      thepicturebanner,
      thepicturebanner1,
      bannerTitle,
      bannerbg,
      ViewMore,
    }
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
  font-family: 'Noto Serif-Medium';
  src: url('https://staticdn.vivaia.com/onem/vivaia/fonts/NotoSerif-Medium.1fd6218.ttf');
}
@font-face {
  font-family: 'Roboto-Light';
  src: url('https://staticdn.vivaia.com/oneapi/fonts/Roboto-Light.ttf');
}
</style>
