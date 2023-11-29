<template>
  <div class="fengniao-margot space-w">
    <slot></slot>
    <div class="fengniao_tab-container" v-if="tabs_item.length>0">
      <!-- <div class="new_title fengniao-margot-title" v-if="show !== false">
        {{ swiper_name }}
      </div> -->

      <div class="fengniao-tab">
        <div :class="`tab_item ${index === cur_index ? 'active' : ''}`" v-for="(item, index) in tabs_item" :key="index"
          @click="show_one(index)">
          {{ item.tab_name }}
        </div>


      </div>
    </div>
    <div class="fengniao_margot-swiper" style="position: relative;">
      <div class="fengniao_swiper_one swiper_one  space-w" style="overflow: hidden;" :ref="swiper_name">
        <div class="swiper_btn show_big">
          <div class="swiper-button swiper-button-prev">

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
          <div class="swiper-slide" v-for="(item) in goods_data" :key="item.goods_sn
            ">
            <a :href="`https://www.vivaia.com${item.goods_url}`">
              <img  v-lazy="item.goods_thumb" />
              <!-- <img src="https://cdnimg.vivaia.com/VA/image/Banner/20230919_6294/2862c4e09c5a8f67149e53a0d81d62fd.jpg"
                alt="" style="height: auto;"> -->
            </a>

            <div class="slide_info">
              <p class="new_title_one"> {{ item.goods_name }}</p>

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
        <div class="swiper-pagination"></div>
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
  data () {
    return {


      swiperInstance: null,
      cur_index: 0
    }
  },

  mounted () {
    // this.initSwiper()
  },
  methods: {

    initSwiper () {

      const self = this;
      this.$nextTick(() => {
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
            1730: {
              spaceBetween: 20
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

      this.$emit('show', index)
      this.$nextTick(() => {
        this.swiperInstance.update()
        this.swiperInstance.slideTo(0, 0, false);//切换到第一个slide，速度为1秒
      })
    },
  }
}
</script>
<style  scoped>
.fengniao_margot-swiper{
  margin-top:2.083vw ;
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



@media screen and (max-width: 768px) {
  .fengniao_margot-swiper {
    margin-top: 5.333vw
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

}
</style>