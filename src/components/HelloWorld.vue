<template>
  <div class="fengniao_new">
    <div class="top_banner">
      <div class="inner common_title">
        Like a fine wine, the classics <br> only grow better with age.
      </div>
      <picture>
        <source srcset="
        https://cdnimg.vivaia.com/VA/image/loadpage/20240229_6666/banner-a-M-new.jpg
          " media="(max-width:768px)" />
        <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/loadpage/20240229_6666/pc12.jpg"
          alt="" />
      </picture>
    </div>
    <div class="fengniao_title">
      <div class="biaodian">“</div>
      <div class="title"> Transcend time with our Back to Timeless Collection. The always in fashion little black dress extends to footwear with elegant clean lines and contrasting colors that feel just as fashion-forward today as they did a century ago, with the added benefit of modern eco-friendly materials and all-day comfort.</div>

      <div class="biaodian" style="margin-top: 20px;">”</div>
    </div>
    <Icon_swiper></Icon_swiper>

    <swiper_one @sort="handleSort" ></swiper_one>
 
    <component :is="renderedComponent" :goods_data="goods_data" :tabs_item="tabs_item" 
      ref="child" :swiper_name="swiper_name" />
    <!--  -->
    <div class="design_ins space-w">
    
      <picture>
        <source srcset="
        https://cdnimg.vivaia.com/VA/image/loadpage/20240229_6666/m3.jpg
          " media="(max-width:768px)" />
        <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/loadpage/20240229_6666/pc2.jpg" alt="" />
      </picture>
    </div>
   
    <div class="coming_soon space-w">
      <div class="coming_title common_title">
        Launched
      </div>
      <div class="list">
        <div class="item">
          <picture>
            <source srcset="
            https://cdnimg.vivaia.com/VA/image/loadpage/20240129_6612/new%20arrival-m_259.jpg
          " media="(max-width:768px)" />
            <img class="common-img"
              src="https://cdnimg.vivaia.com/VA/image/loadpage/20240129_6612/Rectangle%201971PC_4d3.jpg" alt="" />
          </picture>
          <div class="inner">
            <div class="title">
              <span>Dots Collection</span>
              <span>2024 / 02</span>
            </div>
            <a class="desc" href="https://www.vivaia.com/promotion/Dots-Collection-24SS.html">Discover <span
                class="line"></span></a>
          </div>
        </div>
        <div class="item">

          <picture>
            <source srcset="
            https://cdnimg.vivaia.com/VA/image/loadpage/20240129_6612/new%20arrival-m_8f5.jpg
          " media="(max-width:768px)" />
            <img class="common-img"
              src="https://cdnimg.vivaia.com/VA/image/loadpage/20240129_6612/Rectangle%202098PC_yqb.jpg" alt="" />
          </picture>
          <div class="inner">
            <div class="title">
              <span>Cargo Collection</span>
              <span>2024 / 02</span>
            </div>
            <a class="desc" href="https://www.vivaia.com/promotion/Cargo-Collection-24SS.html">Discover
              <span class="line"></span>
            </a>
          </div>
        </div>
        <div class="item">
          <a href="https://www.vivaia.com/promotion/Animal-Collection-24SS-6248.html"><picture><source srcset="https://cdnimg.vivaia.com/VA/image/loadpage/20240129_6612/new%20arrival-m2.jpg" media="(max-width:1023px)"><img src="https://cdnimg.vivaia.com/VA/image/loadpage/20240129_6612/Rectangle%202098PC2.jpg" alt="" class="common-img"></picture></a>
          <div class="inner">
            <div class="title"><span>Animal Collection </span><span class="month">2024 / 02</span></div>
            <a class="desc" href="https://www.vivaia.com/promotion/Animal-Collection-24SS-6248.html">Discover
              <span class="line"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom_icon ">
      <div class="items">
        <div class="bottom_item">
          <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.2708 18.2812H23.3594V16.25H41.3021V31.4844H52.1354V33.5156H39.2708V18.2812Z" fill="#191817"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30.4688 43.3333H39.4401V45.3645H30.4688V43.3333Z" fill="#191817"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.2656 43.3335H22.3438V45.3647H17.2656V43.3335Z" fill="#191817"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M26.5756 47.3958C28.2583 47.3958 29.6224 46.0316 29.6224 44.3489C29.6224 42.6661 28.2583 41.302 26.5756 41.302C24.8928 41.302 23.5287 42.6661 23.5287 44.3489C23.5287 46.0316 24.8928 47.3958 26.5756 47.3958ZM26.5756 49.427C29.3801 49.427 31.6537 47.1534 31.6537 44.3489C31.6537 41.5443 29.3801 39.2708 26.5756 39.2708C23.771 39.2708 21.4974 41.5443 21.4974 44.3489C21.4974 47.1534 23.771 49.427 26.5756 49.427Z" fill="#191817"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M42.8254 47.3958C44.5082 47.3958 45.8723 46.0316 45.8723 44.3489C45.8723 42.6661 44.5082 41.302 42.8254 41.302C41.1427 41.302 39.7786 42.6661 39.7786 44.3489C39.7786 46.0316 41.1427 47.3958 42.8254 47.3958ZM42.8254 49.427C45.63 49.427 47.9036 47.1534 47.9036 44.3489C47.9036 41.5443 45.63 39.2708 42.8254 39.2708C40.0209 39.2708 37.7473 41.5443 37.7473 44.3489C37.7473 47.1534 40.0209 49.427 42.8254 49.427Z" fill="#191817"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.573 32.3308H26.5756V34.3621H15.573V32.3308Z" fill="#191817"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.4661 25.5598H33.0077V27.5911H19.4661V25.5598Z" fill="#191817"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M46.4943 25.052H39.4401V23.0208H47.6202L52.3046 30.5159V45.3645H46.1686V43.3333H50.2734V31.0985L46.4943 25.052Z" fill="#191817"></path></svg>
          <div class="title">
            Free shipping on orders over $99
          </div>

          <!-- <a href="">Learn More
            <span class="line"></span>
          </a> -->
        </div>
        <div class="line"></div>
        <div class="bottom_item">
         
<svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="65" height="65" fill="#F5F5F5"/>
<g clip-path="url(#clip0_3452_622)">
<rect width="1920" height="7887" transform="translate(-928 -4224)" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M46.7187 18.2812H18.2812V23.6979H46.7187V18.2812ZM16.25 16.25V25.7292H48.75V16.25H16.25Z" fill="#191817"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.3645 25.729H19.6354V46.0415H45.3645V25.729ZM17.6041 23.6978V48.0728H47.3958V23.6978H17.6041Z" fill="#191817"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.3285 32.4977L29.3754 29.1123L30.8852 30.4711L29.3638 32.1615H39.2709V34.1928H27.0834L26.3285 32.4977Z" fill="#191817"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.6716 37.9188L35.6248 41.3042L34.1149 39.9454L35.6363 38.255H25.7292V36.2237H37.9167L38.6716 37.9188Z" fill="#191817"/>
</g>
<defs>
<clipPath id="clip0_3452_622">
<rect width="1920" height="7887" fill="white" transform="translate(-928 -4224)"/>
</clipPath>
</defs>
</svg>

          <div class="title">
            Free Exchanges & Easy Returns
          </div>

          <!-- <a href="">Learn More<span class="line"></span></a> -->

        </div>
        <div class="line"></div>
        <div class="bottom_item">
          <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 80 80" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M56.7935 20.9077L36.9695 20.9077L13.8415 44.0357L33.6655 63.8598L56.7935 40.7317V20.9077ZM54.2935 39.6962L33.6655 60.3242L17.377 44.0357L38.005 23.4077L54.2935 23.4077V39.6962Z"
              fill="#191817"></path>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M59.1378 43.0743L57.9247 32.65L60.408 32.3611L61.7212 43.6463L48.3649 65.3503L38.7321 60.9717L39.7666 58.6958L47.3917 62.1617L59.1378 43.0743Z"
              fill="#191817"></path>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M35.6152 35.4129C36.2676 36.0653 37.3254 36.0653 37.9778 35.4129C38.6302 34.7605 38.6302 33.7027 37.9778 33.0503C37.3254 32.3979 36.2676 32.3979 35.6152 33.0503C34.9628 33.7027 34.9628 34.7605 35.6152 35.4129ZM33.8474 37.1806C35.4761 38.8094 38.1168 38.8094 39.7455 37.1806C41.3743 35.5519 41.3743 32.9112 39.7455 31.2825C38.1168 29.6538 35.4761 29.6538 33.8474 31.2825C32.2187 32.9112 32.2187 35.5519 33.8474 37.1806Z"
              fill="#191817"></path>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M37.0896 48.6839C37.742 49.3363 38.7997 49.3363 39.4521 48.6839C40.1046 48.0315 40.1046 46.9737 39.4521 46.3213C38.7997 45.6689 37.742 45.6689 37.0896 46.3213C36.4371 46.9737 36.4371 48.0315 37.0896 48.6839ZM35.3218 50.4516C36.9505 52.0804 39.5912 52.0804 41.2199 50.4516C42.8486 48.8229 42.8486 46.1822 41.2199 44.5535C39.5912 42.9248 36.9505 42.9248 35.3218 44.5535C33.6931 46.1822 33.6931 48.8229 35.3218 50.4516Z"
              fill="#191817"></path>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M45.6898 39.8911L30.2751 44.0214L29.628 41.6066L45.0427 37.4762L45.6898 39.8911Z" fill="#191817"></path>
          </svg>
          <div class="title">
            $15 Off Your First Order
          </div>

          <!-- <a href="">Learn More<span class="line"></span></a> -->
        </div>

      </div>
    </div>
  </div>
</template>

<script>
let str1 = `10019822,10012698,10019159,10020339,10012649,10020509,10020389,10019177`;
let str2 = `10011931,10016513`
let str3 = `10018881`
import swiper_one from './swiper_one.vue'
import goods_item from './goods_item.vue'
import goods_item_one from './goods_item_one.vue'
import Icon_swiper from './Icon_swiper.vue'

export default {
 
  components: {
    swiper_one,
    goods_item,
    goods_item_one,
    Icon_swiper
  },
  data () {
    return {
      goods_data: [],
      all_goods: [],
     
      tabs_item: 'Leopard',
   
      swiper_name: 'Leopard',
      renderedComponent: null,
      threshold: 1024,


    }
  },
  mounted () {

    this.updateRenderedComponent();
    Promise.all([
    this.getAllgoods(str1, 'Flats'),
    this.getAllgoods(str2, 'Heels'),
    this.getAllgoods(str3, 'Boots')
  ]).then(results => {
    // results 是一个包含三个请求结果的数组
    let mergedArray = results.flat();
    this.all_goods = mergedArray
    this.goods_data = this.all_goods
    
    // 在这里处理合并后的数组
  });
  //   监听窗口大小变化，动态更新渲染的组件
    window.addEventListener('resize', this.updateRenderedComponent);
    
  
   

  },

  methods: {
    async getAllgoods(str, type) {
    if(window._fengniao_getGoods_list){
      const res = await window._fengniao_getGoods_list({
      goods_id: str.replace(/\s/g, ''),
      disable_goods_number: 1,
    });
    return res.result.map(obj => {
      return { ...obj, type: type };
    });
    }
  },
    handleSort (name) {

  // console.log(name)
   
      // this.tabs_item_one = 'All'

      this.swiper_name = name
      this.tabs_item = name
     // console.log(this.tabs_item)
      
      if (name === 'All') {
        this.goods_data = this.all_goods
      } else {
        this.goods_data = this.all_goods.filter(
          (item) => item.type === name
        )
      }



    },

    // // 更新swiper
    updateSwiper () {

      this.$nextTick(() => {
        this.$refs.child.swiperInstance.update()
        this.$refs.child.swiperInstance.slideTo(0, 0, false);//切换到第一个slide，速度为1秒
      })

    },
    updateRenderedComponent () {
      this.renderedComponent = window.innerWidth > this.threshold ? goods_item : goods_item_one;
    },
    beforeDestroy () {

      window.addEventListener('resize', this.updateRenderedComponent);
    },
  },

}
</script>

<style   lang="less">
.fengniao_new {
  background: #fff;
  padding-bottom: 4.167vw;
.new_title_one{
  color: #191817;
}
  .space-w {
    padding: 0 15.625vw;
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
      left: 10.417vw;
      top:16.979vw;
      color: #fff;
      
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
    width: 68.75vw;
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
      // align-items: center;
      justify-content: space-between;

      .item {
        width: 31.8%;

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

            &:last-child {
              font-family: Roboto;
              font-size: 20px;
              font-weight: 400;
              line-height: 23px;
              letter-spacing: 0px;
              text-align: left;

            }

            span {
              &:nth-child(2) {
                font-family: Roboto;
                font-size: 12px;
                font-weight: 400;
                line-height: 14px;
                letter-spacing: 0px;
                text-align: right;
              }
            }
          }

          .desc {
            font-family: Roboto;
            font-size: 14px;
            font-weight: 500;
            line-height: 16px;
            letter-spacing: 0px;
            text-align: center;
            color: rgba(25, 24, 23, .5);
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
              background: rgba(25, 24, 23, .5);
              transition: all .3s;
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
            transition: all .3s;
          }

        }
      }
    }
  }
}

@media screen and (min-width: 1024px) and (max-width: 1440px) {
  .fengniao_new {

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
  .fengniao_new {
    padding-bottom: 10.167vw;

    .space-w {
      // width: 89.333vw;
      padding: 0 5.333vw;
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
        top: 10.667vw;
      

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
      .list {
        display: flex;
        flex-wrap: wrap;

        .item {
          width: 100%;
          margin-bottom: 5.333vw;

          &:last-child {
            margin-bottom: 0;
          }

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

              &:last-child {
                font-size: 3.733vw;
                font-weight: 500;
                line-height: 4.267vw;
              }

              span {
                &:nth-child(2) {
                  font-family: Roboto;
                  font-size: 3.2vw;
                  font-weight: 400;
                  line-height: 3.733vw;
                  letter-spacing: 0px;
                  text-align: right;
                }
              }
            }

            .desc {
              font-family: Roboto;
              font-size: 3.2vw;
              font-weight: 500;
              line-height: 3.2vw;
              letter-spacing: 0px;
              text-align: right;

              .line {
                width: 12.533vw;
                height: 1px;
              }

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
.line{
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
}</style>