<template>
  <div class="fengniao_lp">




    <div class="fengniao_scroll-list show_big">
      <!-- <p class="list_info_title">
 
     </p>
  -->
      <div class="list_channel" style="width: 100%;">
        <a class="channel_link" v-for="(item, i) in imgArr" :key="i" @mouseenter="handleEenter(i)" @mouseleave="handleLeave(i)">
          <img :src="item.link" alt="">

        </a>
      </div>

    </div>
    <div class="fengniao_scroll-swiper  show_small mySwiper_1" ref="imgList">

      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, i) in imgArr" :key="i">
          <img :src="item.link" alt="VIVAIA" id="image">

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
      ctimer:null


    };
  },
  mounted () {

    // this.autoplays();

    const self = this;
    this.mySwiper = new Swiper(".mySwiper_1", {
      loop: true,
      autoplay: {
        delay: 2500, // 自动滚动的时间间隔，单位为毫秒
        disableOnInteraction: false, // 用户操作后是否停止自动滚动
      },
      initialSlide: 2,
      slidesPerView: 3.4,
      on: {
        slideChange: function () {
          self.updateSlideStylesAndText(this.activeIndex + 1);
        }
      }
    })

    this.handleClick()


  },


  methods: {
    handleEenter (i) {
      this.curIndex = i
      // clearInterval(this.ctimer)
    },
    handleLeave(i){
      // console.log(i);
      // this.curIndex = i
      // this.ctimer = setInterval(this.autoplays, 2500);
     
    },
    updateSlideStylesAndText (index) {
      const imglist = document.querySelectorAll('#image')

      for (let i = 0; i < imglist.length; i++) {

        imglist[i].style.opacity = i === index ? '1' : '0.25';

      }




    },
   
    handleClick () {
      const self = this;
      const clickHandler = function (index) {
        if (index == self.mySwiper.activeIndex + 2) {
          self.mySwiper.slideNext();
        }
        if (index == self.mySwiper.activeIndex) {
          self.mySwiper.slidePrev();
        }
      };

      self.$refs.imgList
        .querySelectorAll('.swiper-slide')
        .forEach((slide1, index) => {
          slide1.addEventListener('click', function () {
            clickHandler(index);
          });
        });

      this.clickHandler = clickHandler;
    },

    autoplays () {

      this.ctimer = setInterval(() => {
        if (this.curIndex > 5) {
          this.curIndex = 0;
        } else {
          this.onItem = this.imgArr[this.curIndex];
          this.curIndex++;
        }

      }, 2500)
    },


  },
  beforeDestroy() {

    this.$refs.imgList
      .querySelectorAll('.swiper-slide')
      .forEach((slide1, index) => {
        slide1.removeEventListener('click', this.clickHandler)
      });

    clearInterval(this.ctimer)

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
