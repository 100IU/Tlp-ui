<template>
  <div class="info_two space-w">
    <div class="left">
      <div class="title common-title">
        Loved by over 1 Million Customers from over 60 Countries!
      </div>
      <div class="desc common-desc">
        We founded VIVAIA to support everyday life. No matter where your journey is headed, you can always step into a
        pair of VIVAIA shoes and enjoy comfort and style along the way.

        <br><br>
        We use high-quality accents and environmentally-friendly materials that are sourced from nature. We have recycled
        16,801,900+ plastic bottles as of December 4, 2023. Each and every pair of shoes that we produce helps to divert
        waste from landfills while helping you look and feel great too.
      </div>

    </div>
    <div class="right mySwiper">

      <div class="swiper-wrapper">
        <a class="swiper-slide">

          <picture>
            <source srcset="https://cdnimg.vivaia.com/VA/image/Banner/20231225_6556/ins-a-m1.jpg"
              media="(max-width:768px)">
            <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20231225_6556/wanghong1.jpg"
              alt="VIVAIA">
          </picture>
        </a>
        <a class="swiper-slide">


          <picture>
            <source srcset="https://cdnimg.vivaia.com/VA/image/Banner/20231225_6556/ins-a-m2.jpg"
              media="(max-width:768px)">
            <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20231225_6556/wanghong2.jpg"
              alt="VIVAIA">
          </picture>
        </a>
        <a class="swiper-slide">

          <picture>
            <source srcset="https://cdnimg.vivaia.com/VA/image/Banner/20231225_6556/ins-a-m4.jpg"
              media="(max-width:768px)">
            <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20231225_6556/wanghong3.jpg"
              alt="VIVAIA">
          </picture>
        </a>
        <a class="swiper-slide">

          <picture>
            <source srcset="https://cdnimg.vivaia.com/VA/image/Banner/20231225_6556/ins-a-m3.jpg"
              media="(max-width:768px)">
            <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20231225_6556/wanghong4.jpg"
              alt="VIVAIA">
          </picture>
        </a>
        <a class="swiper-slide">

          <picture>
            <source srcset="https://cdnimg.vivaia.com/VA/image/Banner/20231225_6556/ins-a-m5.jpg"
              media="(max-width:768px)">
            <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20231225_6556/wanghong5.jpg"
              alt="VIVAIA">
          </picture>
        </a>


      </div>
      <div class="swiper_btn show_big">
        <div class="swiper-button swiper-button-prev">

          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M10.0607 2.45129L9 1.39062L1.3934 8.99723L2.45406 10.0579L2.45412 10.0578L9.00013 16.6038L10.0608 15.5432L3.51478 8.99716L10.0607 2.45129Z"
              fill="#191817" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 9.75H3V8.25H17V9.75Z" fill="#191817" />
          </svg>
        </div>
        <div class="swiper-button swiper-button-next">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M7.93934 2.45129L9 1.39062L16.6066 8.99723L15.5459 10.0579L15.5459 10.0578L8.99987 16.6038L7.93921 15.5432L14.4852 8.99716L7.93934 2.45129Z"
              fill="#191817" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 9.75H15V8.25H1V9.75Z" fill="#191817" />
          </svg>
        </div>
      </div>
      <div class="swiper-pagination show_small"></div>
    </div>
  </div>
</template>
  
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {


  mounted () {
    new Swiper('.mySwiper', {
      slidesPerView: "auto",
      breakpoints: {
        375: {
          spaceBetween: 14,
        },
        768: {
          spaceBetween: 8,
        },
        1024: {
          //当屏幕宽度大于等于768
          spaceBetween: 10,
        },
        1440: {
          spaceBetween: 10,
        },
        1730: {
          spaceBetween: 16
        }

      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',

      },

    });
  },

}
</script>
<style  scoped>
.info_two {
  display: flex;
  padding-top: 4.167vw;
  justify-content: space-between;
}

.info_two .left {
  background: rgba(245, 245, 245, 1);
  /* margin-right: 1.771vw; */
  width: 41.146vw;
  box-sizing: border-box;
  padding: 0 4.167vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}



.info_two .left .desc {
  margin-top: 2.083vw;
  text-align: left;
}

.info_two .right {
  width: 41.146vw;
  overflow: hidden;
  position: relative;
}

.info_two .right .swiper-slide {
  width: 17.083vw;
  /* margin-right: 0.729vw; */
}

.swiper_btn .swiper-button {
  color: #191817;
  background: #fff;
  height: 2.083vw;
  width: 2.083vw;
  top: 50%;
  border-radius: 50%;
}

.swiper_btn .swiper-button svg {
  width: 0.938vw !important;
  height: 0.938vw !important;
}

.swiper_btn .swiper-button::after {
  display: none;
}



.small_autjor {
  font-family: Roboto;
  font-size: 0.833vw;
  font-weight: 400;
  line-height: 0.99vw;
  letter-spacing: 0px;
  text-align: center;
  color: #fff;
  position: absolute;
  bottom: 0.625vw;
  left: 0.625vw;

}

@media screen and (min-width: 1024px) and (max-width: 1440px) {

  .info_two .left .desc {
    text-align: left;
  }

  .info_two .left .title {
    text-align: left;
  }
}

@media screen and (max-width: 1023px) {
  .swiper_btn .swiper-button {
    color: #191817;
    background: #fff;
    height: 10.667vw;
    width: 10.667vw;
    top: 44%;
    border-radius: 50%;
  }

  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: 12vw;
  }



  .info_two {
    display: block;
    padding-top: 5.333vw;
  }

  .info_two .swiper-pagination {
    top: auto;
    bottom: 5.333vw;
  }

  .info_two .left {
    background-color: #fff;
    width: 91.2vw;
    padding: 0
  }

  .info_two .left .title {
    text-align: left;
  }

  .info_two .left .desc {
    font-family: Roboto;
    font-size: 3.2vw;
    font-weight: 400;
    line-height: 3.733vw;
    letter-spacing: 0px;


  }

  .info_two .right {
    width: 89.333vw;

    padding: 5.333vw 0 10.6667vw;
  }

  .info_two .right .swiper-slide {
    width: 78.933vw;

  }





  .po_ab {
    position: absolute;
    left: 5.333vw;
    top: 6.4vw;
  }

  .small_autjor {
    font-family: Roboto;
    font-size: 3.2vw;
    font-weight: 400;
    line-height: 3.733vw;
    letter-spacing: 0px;
    text-align: center;
    bottom: 3.2vw;
    left: 3.2vw;

  }
}</style>