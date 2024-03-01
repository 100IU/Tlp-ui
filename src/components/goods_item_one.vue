<template>
  <!-- m -->
  <div class="fengniao-margot">
    <slot></slot>
    <!-- <div class="tab_name">
      <span style="opacity: .7;">
        {{ tabs_item }}
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
        <path d="M4.66669 1.83333L11.0098 8.17647L4.66669 14.5196" stroke="#191817" />
      </svg>
      <span>{{ tabs_item_one }}</span>
    </div> -->
    <div class="fengniao_margot-swiper" style="position: relative;">
      <div class="fengniao_swiper_one swiper_one" style="overflow: hidden;" :ref="swiper_name">

        <div class="swiper-wrapper new_wrapper">
          <div class="swiper-slide" v-for="(item,i) in goods_data" :key="i
            ">
            <a :href="`https://www.vivaia.com${item.goods_url}`"
              style="position: relative;display: flex;align-items: center;justify-content: center;" class="a_link">
              <img v-lazy="item.goods_thumb" />
              <!-- <img src="https://cdnimg.vivaia.com/VA/image/Banner/20230919_6294/2862c4e09c5a8f67149e53a0d81d62fd.jpg"
                alt="" style="height: auto;"> -->
              <div class="shop_btn" style="position: absolute;">
                Shop Now
              </div>
            </a>

            <div class="slide_info">
              <p class="new_title_one" :class="item.goods_sn === '1' ? 'new_weight' : ''"> {{
                item.goods_name }}</p>

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
        <!-- <div class="swiper-pagination" style="width: 89.333vw;margin: 0 auto;" v-show="goods_data.length>2"></div> -->
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
      default: "swiper_1"

    },
    goods_data: {
      type: Array,
      default: () => []
    },
    tabs_item: {
      type: String,
      
    },
    tabs_item_one: {
      type: String,
    
    },
   


  },
  data () {
    return {
      // swiperInstance: null
    }
  },
  mounted () {

    
      this.initSwiper()    
    
   
  },
//   watch: {
//     swiper_name(newValue, oldValue) {

//       this.$nextTick(() => {
//   this.swiperInstance.update()
//   this.swiperInstance.slideTo(0, 0, false);//切换到第一个slide，速度为1秒
// })

//     }
//   },

  methods: {

    initSwiper () {
     

      const self = this;
      this.$nextTick(() => {
       new Swiper(this.$refs[this.swiper_name], {
          allowTouchMove: false,

          initialSlide: 0,
          slidesPerView: "auto",
          breakpoints: {
            375: {
              // slidesPerView: 2,
              // spaceBetween:7,
            },
            768: {
              // spaceBetween:7,
              // slidesPerView: 1.4
            },
            1024: {
              //当屏幕宽度大于等于768
              spaceBetween: 15,
            },
            1730: {
              spaceBetween: 20
            }
          },
          // pagination: {
          //   el: ".swiper-pagination",
          //   type: "progressbar",
          // },
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
<style  lang="less">
.fengniao_margot-swiper{
  // width: 89.333vw;
  // overflow: hidden;
}

// .swiper-pagination .swiper-pagination-progressbar-fill {
//   background: #191817 !important;
// }

.fengniao-margot {
  margin-bottom: 1.875vw;
  padding: 0 15.625vw;

  .tab_name {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 1.042vw;
    display: flex;
    align-items: center;

  }

  .slide_info {
    margin-top: 0.625vw;
    margin-bottom: 2.292vw;

  }

  .new_title_one {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;

  }

  .new_title_one:nth-child(2) {
    margin-top: 0.625vw;
  }

  .a_link:hover .shop_btn {
    opacity: 1;

  }

  .shop_btn:hover {
    color: #fff;
    background: #191817;
  }

  .shop_btn {
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
}


@media screen and (min-width: 1024px) and (max-width: 1440px) {
  .shop_btn {
    font-size: 14px;
    line-height: 1.14;
  }
}

// @media screen and (min-width: 769px) and (max-width: 1023px) {
//   .shop_btn {
//     font-size: 12px;
//     line-height: 1.12;
//   }
// }

@media screen and (min-width:1024px) {
  .new_wrapper {
    display: flex;
    column-gap: 1.042vw;
    flex-wrap: wrap;
    // justify-content: space-between;
  }

  .new_wrapper .swiper-slide {
    // display: grid;
    width: 23.8%;
   
  }
}

@media screen and (max-width: 1023px) {
  .fengniao_margot-swiper .swiper-wrapper{
  flex-wrap: wrap;
  justify-content: space-between;
}
.fengniao_margot-swiper .swiper-slide{
  width:43.733vw ;
}
  .fengniao-margot {
    padding: 0 5.333vw;


  }

  // .tab_name {
  //   padding-left: 5.333vw;
  // }


  .fengniao_swiper_one {
    width: 100% !important;
    margin-bottom: 6.4vw;
    // padding: 0 5.333vw;
    box-sizing: border-box;
  }

  .fengniao_margot-swiper {
    margin-top: 4.267vw;
    width:100%;
    box-sizing: border-box;
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

  .shop_btn {
    display: none;
  }

  .fengniao_swiper_one .swiper-pagination {
    top: auto;
    bottom: 0;
    height: 2px;
  }

  .fengniao-margot  .new_title_one {
    font-family: Roboto;
    font-size: 3.2vw;
    font-weight: 400;
    line-height: 3.733vw;
    letter-spacing: 0px;
    text-align: left;

  }

  .fengniao-margot .new_title_one:nth-child(2) {
    margin-top: 1.067vw;
  }

  .fengniao-margot .slide_info {
    margin:2.133vw 0 4.267vw;
  }
}
</style>