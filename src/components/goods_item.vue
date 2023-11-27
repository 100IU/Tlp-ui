<template>
    <div class="fengniao-margot space-w margot_swiper" :class="{new_top:tabs_item.length>0}">

<div class="fengniao_tab-container"  v-if="tabs_item.length>0">
  
  <div class="fengniao-tab">
   
      <div :class="`tab_item ${index === cur_index ? 'active' : ''}`" v-for="(item, index) in tabs_item"
        :key="index" @click="show_one(index)" style="cursor: pointer;">
        {{ item.tab_name }}
      </div>
</div>
</div>
<div class="fengniao_margot-swiper" style="position: relative;">
  <div class="fengniao_swiper_one swiper_one  space-w" style="overflow: hidden;" :ref="swiper_name">
    <div class="swiper_btn show_big" v-show="goods_data.length>4">
      <div class="swiper-button swiper-button-prev" >

        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M10.0607 2.45129L9 1.39062L1.3934 8.99723L2.45406 10.0579L2.45412 10.0578L9.00013 16.6038L10.0608 15.5432L3.51478 8.99716L10.0607 2.45129Z"
            fill="#FFFFFF" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17 9.75H3V8.25H17V9.75Z" fill="#FFFFFF" />
        </svg>
      </div>
      <div class="swiper-button swiper-button-next">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M7.93934 2.45129L9 1.39062L16.6066 8.99723L15.5459 10.0579L15.5459 10.0578L8.99987 16.6038L7.93921 15.5432L14.4852 8.99716L7.93934 2.45129Z"
            fill="#FFFFFF" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1 9.75H15V8.25H1V9.75Z" fill="#FFFFFF" />
        </svg>
      </div>
    </div>
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(item) in goods_data"
        :key="item.goods_sn"
      >
      <a :href="`https://www.vivaia.com${item.goods_url}`" style="position: relative;display: flex;justify-content: center;">
                  <img  v-lazy="item.goods_thumb" />
             <!-- <img src="https://cdnimg.vivaia.com/VA/image/Banner/20230919_6294/2862c4e09c5a8f67149e53a0d81d62fd.jpg" alt=""> -->
              <div class="inner_btns">Shop Now</div>
                </a>

                <div class="slide_info">
                  <p class="new_title_one"> {{ item.goods_name}}</p>
                   
                  <!-- <p class="new_title_one"> {{ item.title}}</p> -->
          
                  <p class="new_title_one" v-if="item.pc_shop_price_converted !==item.old_shop_price_converted">
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
    <div class="swiper-pagination" v-if="width<768"></div>
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
    goods_data:{
      type:Array,
      default: () => []
    },
    tabs_item:{
      type:Array,
      default: () => []
    },
    str:{
      type:String,
      default:''
    }

  },
data() {
return {
 
  // all_goods:[],
width:window.innerWidth,
  swiperInstance:null,
  cur_index:0
}
},

watch: {
    width(newWidth) {
    
    this.width = window.innerWidth
  }
},

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
    show_one (index) {
    this.cur_index = index
  
    this.$emit('show',index)
this.$nextTick(() => {
  this.swiperInstance.update()
  this.swiperInstance.slideTo(0, 0, false);//切换到第一个slide，速度为1秒
})
},
}
}
</script>
<style  scoped>
 
 .margot_swiper {
  margin-top: 3.125vw !important;
}
/* .fengniao-margot{
  padding-bottom:3.125vw;
} */
.fengniao-margot a:hover .inner_btns{
opacity: 1;
}
.inner_btns{
  position: absolute;
  bottom: 10px;
  width: 91.6%;
  opacity: 0;
  margin: 0 auto;
  background: #FFFFFF;
  color: #191817;
  padding: 0.625vw 0;
  font-family: Roboto;
font-size: 0.833vw;
font-weight: 500;
line-height: 1.25vw;
letter-spacing: 0px;
text-align: center;

}
.inner_btns:hover{
  color: #FFFFFF;
  background: #191817;
}
@media screen and (max-width: 768px) {
  .margot_swiper {
    margin-top: 5.333vw !important;
  }
  .new_top{
    margin-top: 6.4vw !important;
  }
  .fengniao-margot{
  padding-bottom:0;
}
  .fengniao_new .fengniao-outer .fengniao-margot .fengniao_tab-container .fengniao-tab {
    height: auto;
    margin-bottom: 3.2vw;
    /* margin-top: 6.4vw; */
  }
  .inner_btns{
   display: none;

}
}
</style>