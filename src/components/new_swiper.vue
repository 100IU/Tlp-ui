<template>
<div class="space-w" id="common_swiper">


<div  style="position: relative;">
  <div class="new_swiper space-w" style="overflow: hidden;" :ref="swiper_name">
    <div class="swiper_btn show_big show-first-swiper" >
      <div class="swiper-button swiper-button-prev" style="top: 52%;">

        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M10.0607 2.45129L9 1.39062L1.3934 8.99723L2.45406 10.0579L2.45412 10.0578L9.00013 16.6038L10.0608 15.5432L3.51478 8.99716L10.0607 2.45129Z"
            fill="#FFFFFF" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17 9.75H3V8.25H17V9.75Z" fill="#FFFFFF" />
        </svg>
      </div>
      <div class="swiper-button swiper-button-next" style="top: 52%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M7.93934 2.45129L9 1.39062L16.6066 8.99723L15.5459 10.0579L15.5459 10.0578L8.99987 16.6038L7.93921 15.5432L14.4852 8.99716L7.93934 2.45129Z"
            fill="#FFFFFF" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1 9.75H15V8.25H1V9.75Z" fill="#FFFFFF" />
        </svg>
      </div>
    </div>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="banner_one">
          <div class="right_title show_small">All-Day Walking Flats</div>
          <div class="_left">
            <picture>
              <source srcset="https://cdnimg.vivaia.com/VA/image/loadpage/20231120_6489/12.jpg"
                media="(max-width:768px)" />
              <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/loadpage/20231120_6489/2.jpg"
                alt="" />
            </picture>
          </div>
          <div class="_right">
            <div class="right_title show_big">
              All-Day Walking Flats
            </div>
          
            <div class="right_desc">
              Featuring supportive EVA outsoles and pressure-relief insoles with doubled arch support.
            </div>
            <a href="" class="button">Discover</a>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="banner_one">
          <div class="right_title show_small">
            Trendy Balletcore Mary-Janes
          </div>
          <div class="_left">
            <picture>
              <source srcset="https://cdnimg.vivaia.com/VA/image/loadpage/20231120_6489/13.jpg"
                media="(max-width:768px)" />
              <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/loadpage/20231120_6489/3.jpg"
                alt="" />
            </picture>
          </div>
          <div class="_right">
            <div class="right_title show_big">
              Trendy Balletcore Mary-Janes
            </div>
          
            <div class="right_desc">
              Elegant knitted styles with the AdaptAll™ Strap for maximum comfort.
            </div>
            <a href="" class="button">Discover</a>
          </div>
        </div>
      </div>

    </div>
    <div class="swiper-pagination" ></div>
  </div>
  
</div>
</div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  props:{
    swiper_name:{
      type:String,
    
    },
   
  },
data() {
return {
  swiper:null
}
},

mounted () {
  this.initSwiper()
 
},

methods: {
    initSwiper () {
        const self = this;
        this.$nextTick(()=>{
            self.swiper = new Swiper(this.$refs[this.swiper_name], {
                allowTouchMove: true,
                initialSlide: 0,
                  pagination: {
         el: ".swiper-pagination",
         type: "progressbar",
       },
                navigation: {
                    nextEl: ".show-first-swiper .swiper-button-next",
                    prevEl: ".show-first-swiper .swiper-button-prev",
                },
            });
        })
    },
}
}
</script>
<style  scoped>

</style>