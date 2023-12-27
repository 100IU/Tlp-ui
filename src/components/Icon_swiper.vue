<template>
  <div class="fengniao_lp">




    <div class="fengniao_scroll-list show_big">
      <!-- <p class="list_info_title">
 
     </p>
  -->
      <div class="list_channel" style="width: 100%;">
        <a class="channel_link" v-for="(item, i) in imgArr" :key="i" >
          <img :src="item.link" alt="">

        </a>
      </div>

    </div>
    <div class="fengniao_scroll-swiper  show_small" ref="imgList">

      <div class="marquee-container">
    <div class="marquee" :style="{ left: -left_s + 'px' }">
      <div class="item" v-for="(item, i) in imgArr" :key="i + 'a'">
      
            <img class="swiper-slide" :src="item.link" />
       
      </div>
      <div class="item" v-for="(item, i) in imgArr" :key="i + 'b'">
       
            <img class="swiper-slide" :src="item.link" />
        
      </div>
      <div class="item" v-for="(item, i) in imgArr" :key="i + 's'">
        
            <img class="swiper-slide" :src="item.link" />
        
      </div>
    </div>
  </div>



    </div>


  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  data () {
    return {
      curIndex: 0,
      mySwiper: null,
      imgArr: [
        {
          link: "https://cdnimg.vivaia.com/VA/image/Banner/20230819_6145/miedia-sheknows.png",
          text: `"Shoppers Are Ditching Their Chanel Heels For These Comfortable Lookalikes They Can Wear “For Hours With No Foot or Back Pain"`,
          id: 'text'
        },
        {
          link: "https://cdnimg.vivaia.com/VA/image/Banner/20230819_6145/miedia-vogue.png",
          text: `"Walk the walk: Check out VIVAIA’s most comfortable work shoes"`
        },

        {
          link: "https://cdnimg.vivaia.com/VA/image/Banner/20230819_6145/miedia-elle.png",
          text: `"If you tend to suffer from shoe-inflicted heel abrasions, these flat mules are the ideal alternative."`,
          id: 'Vogue'
        },
       
        {
          link: "https://cdnimg.vivaia.com/VA/image/Banner/20230819_6145/miedia-instyle.png",
          text: `"Emma Roberts’ Sneaker-Like Flats Are From an Under-the-Radar Label Katie Holmes Also Wears"`,
          id: 'Elle'
        },
        {
          link: "https://cdnimg.vivaia.com/VA/image/Banner/20231225_6556/Marie%20Claire-p.png",
          text: `"These shoes feature comfort-first technology and are designed with an easy-to-clean knit upper that's made from upcycled materials."`,
          id: 'Elle'
        },
        {
          link: "https://cdnimg.vivaia.com/VA/image/Banner/20230819_6145/miedia-health.png",
          text: `"These 'Heavenly' Flats Are More Comfortable Than Sneakers, According to a Podiatrist."`,
          id: 'Elle'
        },
       
        {
          link: "https://cdnimg.vivaia.com/VA/image/Banner/20230819_6145/miedia-cosmopolitain.png",
          text: `"VIVAIA specializes in "ultra-comfy heels for 12+ hour wear," sooo you can expect these bb's to go easy on your feet."`,
          id: 'Elle'
        },
       
      ],
     
      onItem: {
        link: "https://cdnimg.vivaia.com/VA/image/Banner/20230819_6145/miedia-sheknows.png",
        text: `"Shoppers Are Ditching Their Chanel Heels For These Comfortable Lookalikes They Can Wear “For Hours With No Foot or Back Pain"`,
        id: 'byrdie'
      },
      ctimer:null,
      left_s: 0


    };
  },
  mounted () {
    this.sliderGotoLeft()
  },

  methods: {
    sliderGotoLeft () {
      const w = window.innerWidth
      const that = this
      setInterval(() => {
        if (that.left_s === 1400) {
          that.left_s = 0
        }
        that.left_s += 1
      }, 20)
    }
  
  },
 
};
</script>

<style scoped>
.fengniao_lp .fengniao_scroll-list {
  width: 100%;
  /* background: #F8F8F8; */
 
  margin: 1.042vw 0 3.125vw;
  box-sizing: border-box;
}

.fengniao_lp .fengniao_scroll-list .list_info_title {
  min-height: 100px;
  font-family: Noto Serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 33px;
  width: 43.75vw;
  margin: 0 auto 30px;
  text-align: center;
}

.fengniao_lp .fengniao_scroll-list .list_channel {
  display: flex;
  justify-content: center;
  margin-bottom: 3.125vw;
}

.fengniao_lp .fengniao_scroll-list .list_channel .channel_link {
  display: inline-block;
  cursor: pointer;
  margin-right: 5.2083333vw;
}

.fengniao_lp .fengniao_scroll-list .list_channel .channel_link:last-child {
  margin: 0;
}

.fengniao_lp .fengniao_scroll-list .list_channel .channel_link img {
  display: inline-block;
  /* width: 100%; */
  width: 6.25vw;
  height: 3.125vw;
}




@media screen and (min-width: 1024px) and (max-width: 1440px){
  
}
@media screen and (max-width: 768px) {
  .marquee-container {
  width: 100%;
  overflow: hidden;
}
.marquee-container .marquee {
  /* background: #f6f6f6; */
  display: flex;
  align-items: center;
  width: 2100px;
  height: 40px;
  position: relative;
}
.marquee-container .marquee .item {
  width: 25%;
  min-width: 100px;
  text-align: center;
}
.marquee-container .marquee .item img {
  width: 80px;
  height: 40px;
  object-fit: fill;
}
  .fengniao_lp .show_big {
    display: none;
  }

  .fengniao_lp .show_small {
    display: block;
  }

  .fengniao_lp .fengniao_scroll-list {
    width: 100%;
 
    box-sizing: border-box;
  }

  .fengniao_lp .fengniao_scroll-list .list_info_title {
    min-height: 100px;
    font-family: Noto Serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 33px;
    width: 43.75vw;
    margin: 0 auto 1.5625vw;
    text-align: center;
  }

  .fengniao_lp .fengniao_scroll-list .list_channel {
    display: flex;
    justify-content: center;
    margin-bottom: 3.125vw;
  }

  .fengniao_scroll-swiper {
    margin-bottom: 10.667vw;
  }

  .fengniao_scroll-swiper .swiper_title {
    font-family: Noto Serif;
    font-size: 4.2666667vw;
    font-weight: 400;
    line-height: 5.8666667vw;
    text-align: center;
    width: 78.9333333vw;
    margin: 0 auto;
    min-height: 32vw
  }

  .fengniao_scroll-swiper .swiper-slide {
    display: flex;
    justify-content: center;
  }
.swiper-slide-active{
  margin-left: -40px;
}
  .fengniao_scroll-swiper .swiper-slide>img {
    width: 21.3333333vw;
    height: 10.6666667vw;
    opacity: .25;
  }
}
</style>
