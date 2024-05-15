<template>
  <div class="fengniao_sort">
    <div class="swiper_one">
      <div class="swiper_btn ">
        <div class="swiper-button swiper-button-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.0607 2.45129L9 1.39062L1.3934 8.99723L2.45406 10.0579L2.45412 10.0578L9.00013 16.6038L10.0608 15.5432L3.51478 8.99716L10.0607 2.45129Z"
              fill="#FFFFFF"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 9.75H3V8.25H17V9.75Z"
              fill="#FFFFFF"
            ></path>
          </svg>
        </div>
        <div class="swiper-button swiper-button-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.93934 2.45129L9 1.39062L16.6066 8.99723L15.5459 10.0579L15.5459 10.0578L8.99987 16.6038L7.93921 15.5432L14.4852 8.99716L7.93934 2.45129Z"
              fill="#FFFFFF"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 9.75H15V8.25H1V9.75Z"
              fill="#FFFFFF"
            ></path>
          </svg>
        </div>
      </div>
      <div
        class="swiper_one_swiper"
        style="overflow: hidden; position: relative"
      >
        <div class="swiper-wrapper">
          <a
            class="swiper-slide"
            v-for="(item, i) in imgList"
            :key="i"
            :href="item.link"
          >
            <div class="_left">
              <img loading="lazy" :src="item.left_src_m" alt="" class="show_small" style="aspect-ratio: 335/400;"/>
              <img loading="lazy" :src="item.left_src" alt="" class="show_big" style="aspect-ratio: 660/739;"/>
            </div>
            <div class="_right">
              <img loading="lazy" :src="item.right_src_m" alt="" class="show_small" style="aspect-ratio: 335/287;"/>
              <img loading="lazy" :src="item.right_src" alt="" class="show_big" style="aspect-ratio: 660/739;"/>
              <div class="inner">
                <img loading="lazy" :src="item.main_src" alt="" style="height: auto;aspect-ratio: 1" />
                <div class="title" :style="{ color: item.color }">
                  {{ item.title }}
                </div>

                <span class="button" :style="{ color: item.color }">
                  Discover
                  <span
                    class="line"
                    :style="{ backgroundColor: item.color }"
                  ></span>
                </span>
              </div>
            </div>
          </a>
        </div>
        <div class="swiper-pagination show_small"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
export default {
  data() {
    return {
      swiperIntance: null,
      imgList: [
        {
          left_src:
            'https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-17.jpg',
          left_src_m:
            'https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/m-2.jpg',
          right_src:
            'https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-16.jpg',
          right_src_m:
            'https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/m-5.jpg',
          main_src:
            'https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-2.jpg',
          title: 'Quick Adjustable Velcro Sport Sandals (Kiara)',
          link: 'https://www.vivaia.com/category/kiara-c_1043.html',
          color: '#191817',
          type: 'Flats',
        },
        {
          left_src:
            'https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-14.jpg',
          left_src_m:
            'https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/m-1.jpg',
          right_src:
            'https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-13.jpg',
          right_src_m:
            'https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/m-4.jpg',
          main_src:
            'https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-3.jpg',
          title: 'AdaptAll™ Sport Sandals (Kara)',
          link: 'https://www.vivaia.com/category/kara-c_1037.html',
          color: '#191817',
          type: 'Flats',
        },
        {
          left_src:
            'https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-12.jpg',
          left_src_m:
            'https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/m-33.jpg',
          right_src:
            'https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-11.jpg',
          right_src_m:
            'https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/m-6.jpg',
          main_src:
            'https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-4.jpg',
          title: 'Sport Sandals (Katarina)',
          link: 'https://www.vivaia.com/category/katarina-c_1042.html',
          color: '#191817',
          type: 'Flats',
        },

      ],
    };
  },
  mounted() {
    this.swiperIntance = new Swiper('.swiper_one_swiper', {
      slidesPerView: 'auto',
      normalizeSlideIndex: false,

      breakpoints: {
        375: {
          spaceBetween: 10,
          slidesPerView: 1,
        },
        768: {
          spaceBetween: 10,
          slidesPerView: 1,
        },
        1024: {
          //当屏幕宽度大于等于768
          spaceBetween: 20,
          slidesPerView:1
        },
        1730: {
          spaceBetween: 20,
          slidesPerView:1
        },
      },
      pagination: {
        el: '.swiper_one .swiper-pagination',
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper_one .swiper-button-next',
        prevEl: '.swiper_one .swiper-button-prev',
      },
    });
  },
};
</script>

<style>
.Sandals_new .swiper-button-prev::after {
  display: none;
}

.Sandals_new .swiper-button-next::after {
  display: none;
}

.Sandals_new .swiper-pagination-bullet-active {
  background: #ffff;
}

@media screen and (max-width: 768px) {
  .Sandals_new .swiper-pagination-bullet {
    border-radius: 50% !important;
    width: 4px;
    height: 4px;
    /* bottom: 5.333vw; */
    background: #fff !important;
  }

  .Sandals_new .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 4.333vw !important;
    /* top: auto; */
  }

  .Sandals_new .swiper-pagination-bullet-active {
    background: #ffff;
  }
}
</style>

<style scoped lang="less">
.Sandals_new {
  .fengniao_sort {
    margin-bottom: 3.125vw;

    img {
      width: 100%;
      // height: 739px;
    }

    .swiper_one_swiper {
      width: 100%;
      padding: 0 15.625vw;
      box-sizing: border-box;

      .swiper-wrapper {
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          user-select: none;

          //  opacity: .5;
          ._left {
            width: 50%;
          }

          ._right {
            width: 50%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            .inner {
              position: absolute;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 15.365vw;
              color: #191817;

              .title {
                font-family: Roboto;
                font-size: 20px;
                font-weight: 500;
                line-height: 23px;
                letter-spacing: 0px;
                text-align: center;
                margin-top: 1.25vw;
                margin-bottom: 0.625vw;
                color: #ffffff;
                white-space: nowrap;
              }

              .desc {
                font-family: Roboto;
                font-size: 14px;
                font-weight: 400;
                line-height: 16px;
                letter-spacing: 0px;
                text-align: center;
                margin-bottom: 1.25vw;
              }

              .button {
                font-family: Roboto;
                font-size: 16px;
                font-weight: 500;
                line-height: 19px;
                letter-spacing: 0px;
                text-align: center;
                text-decoration: none;
                &:hover {
                  .line {
                    width: 0;
                  }
                }

                .line {
                  width: 100%;
                  height: 2px;
                  background: #191817;
                  transition: all 0.3s;
                  display: block;
                }

                // background: #fff;
                // padding: 16px 0;
                // width: 142px;
              }
            }
          }
        }

        //       .swiper-slide-active{
        //   opacity: 1;
        // }
      }
    }
    .swiper_one {
      position: relative;
      .swiper-button {
        background: #191817;
        color: #fff;
        height: 2.5vw;
        width: 2.5vw;
        top: 52%;
        border-radius: 50%;
      }

      .swiper-button-prev {
        left: 8.958vw;
      }

      .swiper-button-next {
        right: 8.958vw;
      }
    }

    .tabs {
      .item_info {
        display: flex;

        .item {
          font-family: Roboto;
          font-size: 16px;
          font-weight: 500;
          line-height: 19px;
          letter-spacing: 0px;
          text-align: center;
          padding: 8px 24px;
          margin-right: 16px;
          border-radius: 114px;
          cursor: pointer;
          color: rgba(186, 186, 185, 1);
          border: 1px solid rgba(186, 186, 185, 1);

          &.active {
            color: #fff;
            background: #191817;
            border: 0;
          }
        }
      }

      .sort {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        cursor: pointer;
        position: absolute;
        right: 14.583vw;
        top: -12px;
        border: 1px solid #fff;
        background: #fff;
        z-index: 100;
        padding: 24px 0;
        width: 137px;

        .sort_list {
          width: 137px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;

          .list_inner {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
          }

          .sort_inner {
            display: flex;
            align-items: center;
          }

          .sort_item {
            width: 100%;
            text-align: right;
            margin-right: 40px;
            margin-top: 16px;
            color: rgba(186, 186, 185, 1);

            &.active {
              color: #191817;
            }

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 1440px) {
  .Sandals_new {
    .fengniao_sort {
      .swiper_btn{
        .swiper-button{
          width: 3.5vw;
          height: 3.5vw;
        }
      }

      .swiper_one_swiper {
        .swiper-wrapper {
          .swiper-slide {
            ._right {
              .inner {
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 15.365vw;
                color: #fff;

                .title {
                  white-space: break-spaces;
                  width: 200%;
                  font-family: Roboto;
                  font-size: 18px;
                  font-weight: 500;
                  line-height: 20px;
                  letter-spacing: 0px;
                  text-align: center;
                  color: #ffffff;
                }

                .desc {
                  font-family: Roboto;
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 16px;
                  letter-spacing: 0px;
                  text-align: center;
                  margin-bottom: 1.25vw;
                }

                .button {
                  font-family: Roboto;
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 17px;
                  letter-spacing: 0px;
                  text-align: center;
                  color: #191817;
                  padding: 10px 30px;
                  // &:hover {
                  //   .line {
                  //     width: 0;
                  //   }
                  // }

                  // .line {
                  //   width: 100%;
                  //   height: 2px;
                  //   background: #191817;
                  //   transition: all .3s;
                  //   display: block;
                  // }

                  // color: #191817;
                  // background: #fff;
                  // padding: 0.625vw 1.563vw;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .Sandals_new {
    .fengniao_sort {
      width: 100%;
      margin-bottom: 5.333vw;

      .swiper_one {
        position: relative;
        .swiper-button {
          background: #191817;
          color: #fff;
          height: 30px;
          width: 30px;
          top: 52%;
          border-radius: 50%;
        }
        .swiper-button-prev {
          left: 0;
        }

        .swiper-button-next {
          right: 0;
        }
      }

      .swiper_one_swiper {
        width: 89.333vw;
        // padding: 0 5.333vw;
        padding: 0;
        margin: 0 auto;
        box-sizing: border-box;

        .swiper-wrapper {
          .swiper-slide {
            flex-wrap: wrap;

            ._left {
              width: 100%;
            }

            ._right {
              width: 100%;
              align-items: start;

              .inner {
                position: absolute;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 78.667vw;
                color: #fff;
                padding-top: 8vw;

                img {
                  width: 37.867vw;
                }

                .title {
                  font-family: Roboto;
                  font-size: 4.267vw;
                  font-weight: 500;
                  line-height: 5.067vw;
                  letter-spacing: 0px;
                  text-align: center;
                  margin-top: 4vw;
                  margin-bottom: 2.667vw;
                  color: #ffffff;
                  white-space: unset;
                }

                .desc {
                  font-family: Roboto;
                  font-size: 3.733vw;
                  font-weight: 400;
                  line-height: 4.267vw;
                  letter-spacing: 0px;
                  text-align: center;
                }

                .button {
                  font-family: Roboto;
                  font-size: 3.2vw;
                  font-weight: 500;
                  line-height: 3.733vw;
                  letter-spacing: 0px;
                  text-align: center;
                  padding: 0;
                  background: transparent;
                  color: #ffffff;
                  .line {
                    width: 100%;
                    height: 2px;
                    background: #ffffff;
                    transition: all 0.3s;
                    display: block;
                  }
                }
              }
            }
          }
        }
      }

      .tabs {
        display: flex;
        align-items: center;
        margin-bottom: 0;
        padding-bottom: 5.333vw;

        .item_info {
          // width: ;
          width: 100% !important;

          box-sizing: border-box;
          overflow: scroll;

          // flex-wrap: wrap;
          &::-webkit-scrollbar {
            display: none;
          }

          .item {
            font-family: Roboto;
            font-size: 3.2vw;
            font-weight: 500;
            line-height: 3.733vw;
            padding: 1.6vw 4.267vw;
            margin-right: 2.133vw;
            display: flex;
            align-items: center;
            border-radius: 86px;
            white-space: nowrap;

            &.active {
              color: #fff;
              background: #191817;
            }
          }
        }

        .sort {
          font-family: Roboto;
          font-size: 3.2vw;
          font-weight: 500;
          line-height: 3.733vw;
          letter-spacing: 0px;
          left: 1.067vw;
          top: 12.267vw;
          justify-content: flex-start;
          padding-left: 5.333vw;
          // border: 1px solid #fff;
          border: 0;
          background: #fff;
          width: 31.733vw;

          box-sizing: border-box;
          z-index: 100;
          padding: 0;

          .sort_list {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            // width: 100px;
            width: 31.733vw;

            .list_inner {
              justify-content: start;

              .sort_item {
                width: 100%;
                text-align: right;
                margin-right: 0;
                padding-right: 11.733vw;
                margin-top: 4.267vw;
                box-sizing: border-box;
                display: flex;
                justify-content: flex-end;

                &:last-child {
                  margin-bottom: 4.267vw;
                }
              }
            }

            .sort_inner {
              display: flex;
              align-items: center;
              padding-left: 5.333vw;

              svg {
                width: 3.2vw;
                height: 3.2vw;
              }
            }
          }
        }
      }
    }
  }
}
</style>
