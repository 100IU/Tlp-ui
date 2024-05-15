<template>
  <div class="fengniao_icon">
    <div class="fengniao_scroll-swiper" ref="imgList">
      <div class="marquee-container">
        <div class="marquee" :style="{ left: -left_s + 'px' }">
          <div class="item" v-for="(item, i) in imgArr" :key="i + 'a'">
            <div class="title">{{ item.title }}</div>
          </div>
          <div class="item" v-for="(item, i) in imgArr" :key="i + 'b'">
            <div class="title">{{ item.title }}</div>
          </div>
          <div class="item" v-for="(item, i) in imgArr" :key="i + 's'">
            <div class="title">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper from 'swiper'
// import 'swiper/css/swiper.css'
export default {
  data() {
    return {
      curIndex: 0,
      mySwiper: null,

      imgArr: [
        { title: 'Cushioned footbed' },
        { title: 'Casual' },
        { title: 'easy to wear' },
        { title: 'Best Beach Sandals  ' },
        { title: 'AdaptAll Strap™' },
        { title: 'FLEXIBLE' },
        { title: 'DURABLE' },
        { title: 'Cushioned footbed' },
        { title: 'Casual' },
        { title: 'easy to wear' },
        { title: 'Best Beach Sandals  ' },
        { title: 'AdaptAll Strap™' },
        { title: 'FLEXIBLE' },
        { title: 'DURABLE' },
      ],

      ctimer: null,
      left_s: 0,
    };
  },
  mounted() {
    this.sliderGotoLeft();
  },

  methods: {
    sliderGotoLeft() {
      const that = this;
      setInterval(() => {
        if (that.left_s === 1400) {
          that.left_s = 0;
        }
        that.left_s += 1;
      }, 15);
    },
  },
};
</script>

<style scoped lang="less">
.Sandals_new {
  .fengniao_icon {
    margin-bottom: 4.167vw;

    .marquee-container {
      width: 100%;
      overflow: hidden;
    }

    .marquee-container {
      .marquee {
        background: #f8f7f5;
        width: 4000px;
        display: flex;
        align-items: center;
        position: relative;

        .item {
          padding: 8px 0;
          margin-right: 80px;
          text-align: center;

          .title {
            font-family: Roboto;
            font-size: 20px;
            font-weight: 400;
            line-height: 23px;
            letter-spacing: 0px;
            text-align: center;
            text-transform: uppercase;
            white-space: nowrap;
            color: rgba(128, 76, 26, 1);
          }
        }
      }
    }

    .fengniao_icon {
      .show_big {
        display: none;
      }

      .show_small {
        display: block;
      }
    }

    .fengniao_scroll-swiper {
      .swiper-slide {
        display: flex;
        justify-content: center;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .Sandals_new {
    .fengniao_icon {
      margin-bottom: 10.667vw;

      .marquee-container {
        width: 100%;
        overflow: hidden;
      }

      .marquee-container {
        .marquee {
          background: #f6f6f6;
          width: 2100px;
          display: flex;
          align-items: center;
          position: relative;

          .item {
            padding: 2.667vw 0;
            margin-right: 10.133vw;
            text-align: center;

            .title {
              font-family: Roboto;
              font-size: 4.267vw;
              font-weight: 400;
              line-height: 5.067vw;
              letter-spacing: 0px;
              text-align: left;
            }
          }
        }
      }

      .fengniao_scroll-swiper {
        .swiper-slide {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>
