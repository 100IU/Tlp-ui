<template>
  <div class="fengniao-margot space-w">
    <slot></slot>
   
    <div class="fengniao_margot-swiper" style="position: relative;">
      <div class="fengniao_swiper_one swiper_one  space-w"  :ref="swiper_name">
       
        <div class="swiper-wrapper new_wrapper">
          <div class="swiper-slide" v-for="(item) in goods_data" :key="item.goods_sn
            ">
            <a :href="`https://www.vivaia.com${item.goods_url}`" style="position: relative;display: flex;align-items: center;justify-content: center;" class="a_link">
              <img  v-lazy="item.goods_thumb" />
              <!-- <img src="https://cdnimg.vivaia.com/VA/image/Banner/20230919_6294/2862c4e09c5a8f67149e53a0d81d62fd.jpg"
                alt="" style="height: auto;"> -->
                <div class="shop_btn" style="position: absolute;">
                  Shop Now
                </div>
            </a>

            <div class="slide_info">
              <p class="new_title_one" :class="item.goods_sn==='1' ? 'new_weight' : ''"> {{ item.goods_name }}</p>

              <p class="new_title_one" v-if="item.pc_shop_price_converted !== item.old_shop_price_converted">
                <span style="margin-right: 4px;">{{ item.pc_shop_price_converted }}</span>
                <span>{{ item.old_shop_price_converted
                }} </span>


              </p>
              <p v-else class="new_title_one">
                <span>{{ item.pc_shop_price_converted }}</span>
              </p>

            </div>
          </div>
        </div>
        <div class="swiper-pagination "></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  props: {
    swiper_name: {
      type: String,

    },
    goods_data: {
      type: Array,
      default: () => []
    },
    tabs_item: {
      type: Array,
      default: () => []
    },
    str: {
      type: String,
      default: ''
    },
    show: {
      default: Boolean,
      // eslint-disable-next-line no-dupe-keys
      default: true
    }

  },
  data() {
    return {
      swiperInstance:null
    }
  },
//  mounted () {
//   if(window.innerWidth<768){
//     this.initSwiper()
//   }
//  },

  methods:{
 
 initSwiper () {
  
   
     const self = this;
      this.$nextTick(()=>{
       self.swiperInstance = new Swiper(this.$refs[this.swiper_name], {
         allowTouchMove: true,
         initialSlide: 0,
         slidesPerView: "auto",
         breakpoints: {
           768: {
             spaceBetween: 10,
           },
           1024: {
             //当屏幕宽度大于等于768
             spaceBetween: 15,
           },
           1730:{
             spaceBetween:20
           }
         },
         pagination: {
           el: ".swiper-pagination",
           type: "progressbar",
         },
         navigation: {
           nextEl: ".swiper-button-next",
           prevEl: ".swiper-button-prev",
         },
       });
      })
     

     
    
   },
  }
 
}
</script>
<style  scoped>
.new_weight{
   font-weight: 500 !important;
}


.fengniao_margot-swiper{
  margin-top:1.042vw ;
}
.fengniao_new .fengniao-outer .fengniao-margot .fengniao_tab-container .fengniao-tab {
  display: flex;
  align-items: center;
  margin-top: 0.5208333vw;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_tab-container .tab_item {
  font-family: Roboto;
  font-size: 0.833vw;
  font-weight: 500;
  line-height: 0.99vw;
  text-align: center;
  padding: 0.417vw 1.25vw;
  border-radius: 5.938vw;
  margin-left: 0.833vw;
  background-color: #ffffff;
  border: 0.052vw solid #191817;
  opacity: 0.3;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_tab-container .active {
  opacity: 1;
  background: #191817;
  color: #ffffff;
}
.a_link:hover .shop_btn{
  opacity: 1;
 
}
.shop_btn:hover{
  color: #fff;
    background: #191817;
}
.shop_btn{
  bottom: 10px;
    width: 91.6%;
    opacity: 0;
    margin: 0 auto;
    background: #fff;
    color: #191817;
    padding: 12px 0;
    font-family: Roboto;
    font-size: 0.833vw;
    font-weight: 500;
    line-height: 1.25vw;
    letter-spacing: 0;
    text-align: center;
}
@media screen and (min-width: 1024px) and (max-width: 1440px) {
  .shop_btn{
    font-size: 14px;
    line-height: 1.14;
  }
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  .shop_btn{
    font-size: 12px;
    line-height: 1.12;
  }
}
@media screen and (min-width:769px) {
  .new_wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.new_wrapper .swiper-slide{
  width: 19.896vw !important;
}
}
@media screen and (max-width: 768px) {
  .fengniao_margot-swiper {
    margin-top: 5.333vw
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper-slide {
    width: 59.4666667vw;
    margin-right: 2.6666667vw
}
  .fengniao_new .fengniao-outer .fengniao-margot .fengniao_tab-container .tab_item {
    font-family: Roboto;
    font-size: 3.2vw;
    font-weight: 500;
    line-height: 3.7333333vw;
    text-align: center;
    padding: 1.6vw 4.2666667vw;
    border-radius: 114px;
    margin-right: 2.1333333vw;
    margin-left: 0px;
    background-color: #ffffff;
    border: 1px solid #191817;
    opacity: 0.3;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao_tab-container .active {
    opacity: 1;
    background: #191817;
    color: #ffffff;
  }
  .shop_btn{
    display: none;
  }
}
</style>