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
    <Christmas></Christmas>
    <picture>
      <source media="(max-width: 768px )" srcset="https://cdnimg.vivaia.com/VA/image/Banner/20221116_5032/m41@2x.png">
      <img class="swiper-pic" src="https://cdnimg.vivaia.com/VA/image/Banner/20221116_5032/3@2x.png" alt="VIVAIA">
    </picture>
    <div class="Category-wrapper">
      <p class="title">· Shop by Category ·</p>
      <div class="category-contents">
      <Category v-for="(item,index) in category" :key="index" :category="item"></Category>
    </div>
    </div>
    <div class="bottomicon-bg">
    <bottomicon :bottomicon="bottomicondata" ></bottomicon>
  </div>

 
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
  category,
  bottomicondata
} from './content.json'
import bottomicon from './components/bottomicon.vue'
import Category from './components/Category.vue'
import Christmas from '@/components/Christmas'
export default {
  name: 'App',
  components: {
    Banner,
    topicon,
    picturebanner,
    bottomicon,
    Category,
    Christmas,
    vmbutton,
  },
  data() {
    return {
      thepicturebanner,
      thepicturebanner1,
      bannerTitle,
      bannerbg,
      ViewMore,
      category,
      bottomicondata
    }
  },
}
</script>

<style lang="less">
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
.bottomicon-bg{
  display: flex;
  background-color: #6B0000;
}
.Category-wrapper{
  width: 84%;
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 80px;
  .title{
    font-size: 40px;
    color: #6B0000;
    text-align: center;
    margin-bottom: 40px;
  }
  .category-contents{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
.swiper-pic{
  width: 84%;
  padding: 20px;
  display: block;
  margin: 0 auto;
}
@media screen and(max-width:768px) {
  .Category-wrapper{
    width: 100%;
    .title{
      font-size: 32px;
    }
    .category-contents{
      justify-content: space-evenly;
    }
  }
}
</style>
