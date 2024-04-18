<template>
  <div class="Sandals_new">
    <div class="top_banner">
      <div class="inner common_title show_big" style="margin-bottom: 0">
        Our Best Supportive & Flexible Footbed Sandals for Walking
      </div>
      <div class="inner common_title show_small">
        Our Best Supportive & Flexible Footbed Sandals for Walking
      </div>
      <picture>
        <source
          srcset="
            https://cdnimg.vivaia.com/VA/image/loadpage/20240416_6764/m-banner.jpg
          "
          media="(max-width:768px)"
        />
        <img
          class="common-img"
          src="https://cdnimg.vivaia.com/VA/image/loadpage/20240416_6764/pc-banner.jpg"
          alt=""
        />
      </picture>
    </div>
    <div class="fengniao_title">
      <div class="biaodian">“</div>
      <div class="title">
        Are you ready? Summer adventure awaits! Whether you prefer local strolls
        or embarking on unknown journeys, the heat can make sneakers feel hot
        and tiresome. But fear not, VIVAIA presents its new footbed sandals,
        giving you a fresh summer experience that lets you stay cool, supported,
        and comfortable on any journey.
      </div>

      <div class="biaodian" style="margin-top: 20px">”</div>
    </div>
    <Icon_swiper></Icon_swiper>

    <swiper_one></swiper_one>

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
            <picture>
              <source
                srcset="
                  https://cdnimg.vivaia.com/VA/image/loadpage/20240416_6764/pc-m-cp-1.jpg
                "
                media="(max-width:768px)"
              />
              <img
                class="common-img"
                src="https://cdnimg.vivaia.com/VA/image/loadpage/20240416_6764/pc-m-cp-1.jpg"
                alt=""
              />
            </picture>
            <div class="inner">
              <div class="title">
                <span>Arch Support for Pressure Relief and Stability</span>
              </div>
            </div>
          </div>
          <div class="item">
            <picture>
              <source
                srcset="
                  https://cdnimg.vivaia.com/VA/image/loadpage/20240416_6764/pc-m-cp-2.jpg
                "
                media="(max-width:768px)"
              />
              <img
                class="common-img"
                src="https://cdnimg.vivaia.com/VA/image/loadpage/20240416_6764/pc-m-cp-2.jpg"
                alt=""
              />
            </picture>
            <div class="inner">
              <div class="title">
                <span>Dual-Layer PU Sole Comfort with Deep Heel Cup</span>
              </div>
            </div>
          </div>

          <div class="item">
            <a
              href="https://www.vivaia.com/promotion/Animal-Collection-24SS-6248.html"
              ><picture
                ><source
                  srcset="
                    https://cdnimg.vivaia.com/VA/image/loadpage/20240416_6764/0417pc-m-1.jpg
                  "
                  media="(max-width:1023px)" />
                <img
                  src="https://cdnimg.vivaia.com/VA/image/loadpage/20240416_6764/0417pc-m-1.jpg"
                  alt=""
                  class="common-img" /></picture
            ></a>
            <div class="inner">
              <div class="title">
                <span>Flexibility for Every Step</span>
              </div>
            </div>
          </div>
          <div class="item">
            <picture>
              <source
                srcset="
                  https://cdnimg.vivaia.com/VA/image/loadpage/20240416_6764/pc-m-cp-4.gif
                "
                media="(max-width:1023px)"
              />
              <img
                class="common-img"
                src="https://cdnimg.vivaia.com/VA/image/loadpage/20240416_6764/pc-m-cp-4.gif"
                alt=""
              />
            </picture>

            <div class="inner">
              <div class="title">
                <span>AdaptAll Strap™ for Custom Fit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FAQ v-for="item in Faq_list" :key="item.title" :item="item">
      <div>
        Below are some frequently asked questions and answers. Still have
        questions? Email support@vivaia.com, and we’ll reply as soon as
        possible.
      </div>
    </FAQ>
  </div>
</template>

<script>
let str = ` 10021316,10021248,10021280,10021298,10021232,10021216,10021268`;

import swiper_one from './swiper_one.vue';
import goods_item from './goods_item.vue';
import goods_item_one from './goods_item_one.vue';
import Icon_swiper from './Icon_swiper.vue';
import FAQ from './FAQ.vue';
export default {
  components: {
    swiper_one,
    goods_item,
    goods_item_one,
    Icon_swiper,
    FAQ,
  },
  data() {
    return {
      isPc: true,
      threshold: 1024,
      Faq_list: [
        {
          title: '1. Do the Footbed Sandals come in narrow / wide versions?',
          desc: ` <div>
            The sandals themselves have a roomy toe box, and the AdaptAll Strap™, in particular, ensures a snug fit that adapts to different foot shapes.</div>`,
        },
        {
          title: '2. Does VIVAIA have free returns & exchanges policy?',
          desc: ` <div> Yes, we have 30-day no-hassle free returns and exchanges policy for every customer. </div>`,
        },
        {
          title: '3. Is there any discount for a first-time purchase?',
          desc: ` <div> Yes, VIVAIA welcomes new customers with: <br>
                  -$10 coupon code when you subscribe to the newsletter.<br>
                  -$15 coupon code when you subscribe to SMS notifications. </div>`,
        },
        {
          title: '4. How to find the perfect size?',
          desc: ` <div>Every style’s page includes a sizing guide when selecting your shoes size. Just follow the instructions to find your perfect fit. If you have any questions, please feel free to contact customer service.</div>`,
        },
      ],
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
          goods_id: str.replace(/\s/g, ''),
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

  .top_banner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .inner {
      position: absolute;
      left: 4.167vw;
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

@media screen and (min-width: 1024px) and (max-width: 1440px) {
  .Sandals_new {
    .fengniao_title {
      font-size: 24px;
      line-height: 1.18;
    }

    .common_title {
      font-size: 22px;
      line-height: 1.14;
    }
  }
}

@media screen and (max-width: 1024px) {
  .Sandals_new {
    padding-bottom: 10.167vw;

    .space-w {
      width: 89.333vw;
      // padding: 0 5.333vw;
      margin: 0 auto 10.667vw;
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
        bottom: 10.667vw;
      }
    }

    .fengniao_title {
      padding: 10.667vw 0 5.333vw;
      width: 89.333vw;
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
