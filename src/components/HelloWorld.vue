<template>
  <div class="Sandals_new">
    <bottomTopSlide></bottomTopSlide>
    <div class="top_banner">
      <div
        class="inner common_title show_big"
        style="margin-bottom: 0; text-align: center"
      >
        Our Best Supportive & Lightweight Flexible <br />
        Sport Sandals for Ultimate Comfort
      </div>
      <div class="inner common_title show_small">
        Our Best Supportive & Lightweight Flexible Sport Sandals for Ultimate
        Comfort
      </div>
      <a href="#" style="display: inline-block ;width: 100%">
        <picture>
          <source
            srcset="
              https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/m.jpg
            "
            media="(max-width:768px)"
          />
          <img
            loading="lazy"
            class="common-img img-fir"
            src="https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-1.jpg"
            alt=""
            style="width: 100%;"
          /> </picture
      ></a>
    </div>
    <div class="fengniao_title">
      <div class="biaodian">“</div>
      <div class="title">
        What kind of sandals do you need? Cushioned? Lightweight? With a toe
        spring? Shock absorbing? Excellent arch support? And you need them to be
        refreshing and comfortable for hot summer day? Look no further because
        the VIVAIA Sport Sandals Collection does it all and more.
      </div>

      <div class="biaodian" style="margin-top: 20px">”</div>
    </div>

    <Icon_swiper></Icon_swiper>

    <div class="ima-banner space-w">
      <a href="https://www.vivaia.com/category/sports-sandals-c_1039.html" style="display: inline-block ;width: 100%">
        <picture>
          <source
            srcset="
              https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/m-01.jpg
            "
            media="(max-width:768px)"
          />
          <img
            loading="lazy"
            class="common-img img-sec"
            src="https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/Group%203365682.jpg"
            alt=""
            style="width: 100%;"
          />
        </picture>
      </a>
    </div>
    <swiper_one></swiper_one>

    <div class="goods_title space-w">More Styles</div>

    <goods_item
      :goods_data="goods_data"
      ref="child"
      :swiper_name="swiper_name"
      v-if="isPc"
    ></goods_item>

    <goods_item_one
      v-else
      :goods_data="goods_data"
      ref="child"
      :swiper_name="swiper_name"
    ></goods_item_one>

    <div class="coming_soon space-w">
      <div class="coming_title common_title">More Highlights</div>
      <div class="outer_scroll">
        <div class="list">
          <div class="item">
            <a
              href="https://www.vivaia.com/category/sports-sandals-c_1039.html"
            >
              <picture>
                <source
                  srcset="
                    https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-5.jpg
                  "
                  media="(max-width:768px)"
                />
                <img
                  loading="lazy"
                  class="common-img"
                  src="https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-5.jpg"
                  alt=""
                />
              </picture>
            </a>
            <div class="inner">
              <div class="title">
                <span>Lightweight & Cushioned Soles with 2x Arch Support</span>
              </div>
            </div>
          </div>
          <div class="item">
            <a
              href="https://www.vivaia.com/category/sports-sandals-c_1039.html"
            >
              <picture>
                <source
                  srcset="
                    https://cdnimg.vivaia.com/VA/image/Banner/20240514_6841/315-420.gif
                  "
                  media="(max-width:768px)"
                />
                <img
                  loading="lazy"
                  class="common-img"
                  src="https://cdnimg.vivaia.com/VA/image/Banner/20240514_6841/315-420.gif"
                  alt=""
                /> </picture
            ></a>

            <div class="inner">
              <div class="title">
                <span>Odor-Resistant & Moisture-Wicking Insoles</span>
              </div>
            </div>
          </div>
          <div class="item">
            <a href="https://www.vivaia.com/category/sports-sandals-c_1039.html"
              ><picture
                ><source
                  srcset="
                    https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-6.jpg
                  "
                  media="(max-width:768px)" />
                <img
                  loading="lazy"
                  src="https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-6.jpg"
                  alt=""
                  class="common-img" /></picture
            ></a>
            <div class="inner">
              <div class="title">
                <span>Toespring for Natural Rolling Motion</span>
              </div>
            </div>
          </div>
          <div class="item">
            <a
              href="https://www.vivaia.com/category/sports-sandals-c_1039.html"
            >
              <picture>
                <source
                  srcset="
                    https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-7.jpg
                  "
                  media="(max-width:768px)"
                />
                <img
                  loading="lazy"
                  class="common-img"
                  src="https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-7.jpg"
                  alt=""
                /> </picture
            ></a>

            <div class="inner">
              <div class="title">
                <span>Heel-To-Toe Drop for Less Pressure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="coming-launched space-w">
      <div class="coming_title common_title">Summer Comfort Essentials</div>
      <div class="list">
        <div class="item">
          <a
            href="https://www.vivaia.com/promotion/walking-footbed-sandals-6338.html"
          >
            <picture>
              <source
                srcset="
                  https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-8.jpg
                "
                media="(max-width:768px)"
              />
              <img
                loading="lazy"
                class="common-img"
                src="https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-8.jpg"
                alt=""
              />
            </picture>
          </a>
          <div class="inner">
            <div class="title">
              <span>VIVAIA Footbed</span>
              <span class="month">2024/02</span>
            </div>
            <div class="m-desc-outer">
              <a
                class="desc"
                href="https://www.vivaia.com/promotion/Cargo-Collection-24SS.html"
              >
                Discover
                <div class="desc-line"></div>
              </a>
            </div>
          </div>
        </div>
        <div class="item">
          <a
            href="https://www.vivaia.com/promotion/Manuella-The-Best-Walking-Slide-Sandal.html"
          >
            <picture>
              <source
                srcset="
                  https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-9.jpg
                "
                media="(max-width:768px)"
              />
              <img
                loading="lazy"
                class="common-img"
                src="https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-9.jpg"
                alt=""
              />
            </picture>
          </a>
          <div class="inner">
            <div class="title">
              <span>VIVAIA Pillow Top</span>
              <span class="month">2024/02</span>
            </div>
            <div class="m-desc-outer">
              <a
                class="desc"
                href="https://www.vivaia.com/promotion/Cargo-Collection-24SS.html"
              >
                Discover
                <div class="desc-line"></div>
              </a>
            </div>
          </div>
        </div>
        <div class="item">
          <a
            href="https://www.vivaia.com/promotion/The-Best-Sandals-for-Plantar-Fasciitis-6353.html"
          >
            <picture>
              <source
                srcset="
                  https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-10.jpg
                "
                media="(max-width:768px)"
              />
              <img
                loading="lazy"
                class="common-img"
                src="https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/pc-10.jpg"
                alt=""
              />
            </picture>
          </a>
          <div class="inner">
            <div class="title">
              <span>VIVAIA Arch Pro</span>
              <span class="month">2024/02</span>
            </div>
            <div class="m-desc-outer">
              <a
                class="desc"
                href="https://www.vivaia.com/promotion/Animal-Collection-24SS-6248.html"
              >
                Discover
                <div class="desc-line"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let str = `10023211,10023579,10023371,10023195,10023179,10023275,10023563,10023515,10023547,10023467,10023435,10023419`;

import swiper_one from "./swiper_one.vue";
import goods_item from "./goods_item.vue";
import goods_item_one from "./goods_item_one.vue";
import Icon_swiper from "./Icon_swiper.vue";
import bottomTopSlide from "./bottomTopSlide.vue";
export default {
  components: {
    swiper_one,
    goods_item,
    goods_item_one,
    Icon_swiper,
    bottomTopSlide,
  },
  data() {
    return {
      isPc: true,
      threshold: 768,
      swiper_name: "sandals",
      goods_data: [],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.updateRenderedComponent();
    });
    this.getAllgoods();
  },

  methods: {
    async getAllgoods() {
      if (window._fengniao_getGoods_list) {
        const res = await window._fengniao_getGoods_list({
          goods_id: str.replace(/\s/g, ""),
          disable_goods_number: 1,
        });
        this.goods_data = res.result;
      }
    },

    updateRenderedComponent() {
      this.isPc = window.innerWidth > this.threshold;
    },
  },
};
</script>

<style lang="less">
.Sandals_new {
  overflow-x: hidden;
  background: #fff;
  padding-bottom: 4.167vw;
  .no_bottom {
    margin-bottom: 0 !important ;
  }
  .new_title_one {
    color: #191817;
  }
  .space-w {
    width: 68.75vw;
    // padding: 0 15.625vw;
    margin: 0 auto 4.167vw;
  }

  .common_title {
    font-family: Noto Serif;
    font-size: 32px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 0px;
    text-align: left;
    color: #191817;
    margin-bottom: 1.667vw;
  }

  .show_big {
    display: block;
  }

  .show_small {
    display: none;
  }

  img {
    width: 100%;
    display: block;
  }

  .img-fir {
    aspect-ratio: 1920/900;
  }

  .img-sec {
    aspect-ratio: 1320/660;
  }

  .goods_title {
    font-family: Noto Serif;
    font-size: 32px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 0px;
    text-align: left;
    color: #191817;
    margin-bottom: 1.667vw;
  }

  .top_banner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .inner {
      position: absolute;

      color: #191817;
    }
  }

  .design_ins {
    position: relative;

    .inner {
      position: absolute;
      left: 20.052vw;
      bottom: 4.375vw;
      width: 26.719vw;

      .title {
        font-family: Noto Serif;
        font-size: 1.042vw;
        font-weight: 400;
        line-height: 1.406vw;
        letter-spacing: 0px;
        text-align: center;
        margin-bottom: 0.417vw;
      }

      .desc {
        font-family: Roboto;
        font-size: 0.729vw;
        font-weight: 400;
        line-height: 0.833vw;
        letter-spacing: 0px;
        text-align: center;
      }
    }
  }

  .fengniao_title {
    padding: 4.167vw 0 2.083vw;
    width: 77.083vw;
    margin: 0 auto;
    color: #191817;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-family: Noto Serif;
    font-size: 36px;
    font-weight: 400;
    // line-height: 49px;
    letter-spacing: 0px;
    text-align: center;

    .biaodian {
      display: flex;
      height: 36px;
      //  background: red;
      align-items: center;
    }
  }

  .coming_soon {
    .list {
      display: flex;
      justify-content: space-between;

      .item {
        width: 23.8%;
        margin-bottom: 1.667vw;
        .inner {
          .title {
            margin-top: 10px;
            font-family: Roboto;
            font-size: 18px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0px;
            text-align: left;
            color: #191817;
          }

          .desc {
            font-family: Roboto;
            font-size: 14px;
            font-weight: 500;
            line-height: 16px;
            letter-spacing: 0px;
            text-align: center;
            color: rgba(25, 24, 23, 0.5);
            text-decoration: none;

            &:hover {
              .line {
                width: 0;
              }
            }

            .line {
              width: 50px;
              display: block;
              height: 2px;
              background: rgba(25, 24, 23, 0.5);
              transition: all 0.3s;
            }
          }
        }
      }
    }
  }

  .coming-launched {
    .list {
      display: flex;
      flex-wrap: wrap;
      -moz-column-gap: 1.563vw;
      column-gap: 1.563vw;
      justify-content: start;

      .item {
        width: 31.8%;
        margin-bottom: 1.667vw;
        .inner {
          .title {
            margin-top: 1.042vw;
            margin-bottom: 0.417vw;
            font-family: Roboto;
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
            letter-spacing: 0px;
            text-align: left;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #191817;
            span {
              &:nth-child(2) {
                font-family: Roboto;
                font-size: 12px;
                font-weight: 400;
                line-height: 14px;
                letter-spacing: 0px;
                text-align: right;
                visibility: hidden;
              }
            }
          }

          .desc {
            font-family: Roboto;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0px;
            text-align: center;
            color: rgba(25, 24, 23, 1);
            text-decoration: none;
            cursor: pointer;
            opacity: 0.5;
            display: inline-block;
            transition: all 0.3s;
            .desc-line {
              transition: all 0.3s;
              width: 100%;
              height: 1px;
              background: rgba(25, 24, 23, 1);
            }
            &:hover {
              transition: all 0.3s;
              .desc-line {
                transition: all 0.3s;
                width: 0%;
              }
            }
          }
        }
      }
    }
  }

  .bottom_icon {
    background: #fff;
    // padding: 4.167vw 0;

    .items {
      padding: 1.302vw 0;
      width: 68.75vw;
      margin: 0 auto 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;

      .line {
        height: 91px;
        width: 1px;
        background: #eee;
      }

      .bottom_item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        .title {
          font-family: Roboto;
          font-size: 16px;
          font-weight: 500;
          line-height: 19px;
          letter-spacing: 0px;
          text-align: center;
          margin-top: 0.781vw;
          margin-bottom: 0.417vw;
        }

        .desc {
          font-family: Roboto;
          font-size: 14px;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0px;
          text-align: center;

          color: rgba(102, 102, 102, 1);
        }

        a {
          font-family: Roboto;
          font-size: 16px;
          font-weight: 400;
          line-height: 19px;
          letter-spacing: 0px;
          text-align: center;
          color: #191817;
          text-decoration: none;

          &:hover {
            span {
              width: 0;
            }
          }

          span {
            height: 2px;
            background: #191817;
            width: 100%;
            display: block;
            transition: all 0.3s;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 1440px) {
  .Sandals_new {


    .goods_title {
      font-size: 22px;
      line-height: 1.14;
    }

    .fengniao_title {
      font-size: 24px;
      line-height: 1.18;
    }

    .common_title {
      font-size: 22px;
      line-height: 1.14;
    }
    .coming_soon {
      .list {
        .item {
          .inner {
            .title {
              font-size: 1.11vw;
              line-height: 1.46vw;
            }
          }
        }
      }
    }
    .coming-launched {
      .list {
        .item {
          &:nth-child(4) {
            margin-bottom: 0;
          }

          .inner {
            .title {
              font-size: 1.11vw;
              line-height: 1.32vw;

              span {
                &:nth-child(2) {
                  font-size: 0.83vw;
                  line-height: 0.97vw;
                }
              }
            }

            .desc {
              font-size: 0.92vw;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .Sandals_new {
    padding-bottom: 10.167vw;

    .img-fir {
      aspect-ratio: 375/565;
    }

    .img-sec {
      aspect-ratio: 335/250;
    }

    .space-w {
      width: 89.333vw;
      // padding: 0 5.333vw;
      margin: 0 auto 10.667vw;
    }

    .goods_title {
      font-family: Noto Serif;
      font-size: 5.333vw;
      font-weight: 400;
      line-height: 7.2vw;
      letter-spacing: 0px;
      text-align: left;
      margin-bottom: 5.333vw;
    }

    .common_title {
      font-family: Noto Serif;
      font-size: 5.333vw;
      font-weight: 400;
      line-height: 7.2vw;
      letter-spacing: 0px;
      text-align: left;
      margin-bottom: 5.333vw;
    }

    .show_big {
      display: none;
    }

    .show_small {
      display: block;
    }

    img {
      width: 100%;
      display: block;
    }

    .top_banner {
      .common_title {
        text-align: center;
        margin-bottom: 0;
      }

      .inner {
        color: #191817;
        left: auto;
        top: auto;
        top: 10.667vw;
        padding: 0 20px;
      }
    }

    .fengniao_title {
      padding: 10.667vw 0 5.333vw;
      width: 89.867vw;
      margin: 0 auto;
      color: #191817;
      font-family: Noto Serif;
      font-size: 5.333vw;
      font-weight: 400;
      line-height: 7.2vw;
      letter-spacing: 0px;
      text-align: center;

      .biaodian {
        display: flex;
        height: 5.333vw;
        //  background: red;
        font-size: 9.6vw;
        line-height: 1;
        align-items: center;
      }
    }

    .design_ins {
      // width: 100% !important;
      position: relative;

      .inner {
        position: absolute;
        left: 10.667vw;
        bottom: 8vw;
        width: 78.933vw;

        .title {
          font-family: Noto Serif;
          font-size: 5.333vw;
          font-weight: 400;
          line-height: 7.2vw;
          letter-spacing: 0px;
          text-align: center;
          margin-bottom: 2.133vw;
        }

        .desc {
          font-family: Roboto;
          font-size: 3.2vw;
          font-weight: 400;
          line-height: 3.733vw;
          letter-spacing: 0px;
          text-align: center;
        }
      }
    }

    .coming_soon {
      width: 100% !important;
      .outer_scroll {
        overflow: scroll;
        padding: 0 5.333vw;
        box-sizing: border-box;
        &::-webkit-scrollbar {
          display: none;
        }
      }
      .common_title {
        padding-left: 5.333vw;
      }
      .list {
        display: flex;
        width: 272vw;
        justify-content: space-between;
        .item {
          width: 64vw;
          .inner {
            .title {
              margin-top: 2.667vw;
              margin-bottom: 1.6vw;
              font-family: Roboto;
              font-size: 3.733vw;
              font-weight: 500;
              line-height: 4.373vw;
              letter-spacing: 0px;
              text-align: left;
            }
          }
        }
      }
    }

    .coming-launched {
      .list {
        display: flex;
        flex-wrap: wrap;
        .item {
          width: 100%;
          margin-bottom: 20px;

          &:last-child {
            margin-bottom: 0;
          }

          .inner {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            .title {
              margin-top: 10px;
              margin-bottom: 6px;
              font-family: Roboto;
              font-size: 14px;
              font-weight: 500;
              line-height: 16.4px;
              letter-spacing: 0px;

              span {
                &:nth-child(1) {
                  font-size: 14px;
                }
                &:nth-child(2) {
                  font-family: Roboto;
                  font-size: 12px;
                  font-weight: 400;
                  line-height: 4.267vw;
                  letter-spacing: 0px;
                  text-align: right;
                }
              }
            }

            .desc {
              font-family: Roboto;
              display: inline-block;
              font-size: 12px;
              line-height: 12px;
              font-weight: 500;
              letter-spacing: 0px;
              text-align: left;
            }
          }
        }
      }
    }

    .bottom_icon {
      // padding-top: 10.667vw;
      padding-bottom: 0;

      .items {
        padding: 0 10.667vw;
        margin: 0 auto;
        flex-wrap: wrap;
        border: 0;
        .line {
          display: none;
        }
        .bottom_item {
          padding-bottom: 10.667vw;

          svg {
            width: 10.667vw;
            height: 10.667vw;
          }

          .title {
            font-family: Roboto;
            font-size: 3.733vw;
            font-weight: 400;
            line-height: 4.267vw;
            letter-spacing: 0px;
            text-align: center;

            margin-top: 2.133vw;
          }

          .desc {
            font-family: Roboto;
            font-size: 3.733vw;
            font-weight: 400;
            line-height: 4.267vw;
            letter-spacing: 0px;
            text-align: center;

            margin: 2.133vw 0 0;
          }

          a {
            font-family: Roboto;
            font-size: 3.733vw;
            font-weight: 400;
            line-height: 4.267vw;
            letter-spacing: 0px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
