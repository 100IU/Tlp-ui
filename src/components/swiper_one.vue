<template>
  <div class="fengniao_sort">
    <div class="tabs common_title space-w" style="position: relative;">
      <div class="item_info">
        <div class="item" v-for="(item, i) in tabs" :key="i" :class="{ active: curIndex == i }"
          @click="handleSort(i,item)">{{
            item.name }}</div>
      </div>
      <!-- <div class="sort">
        <div class="sort_list">
          <div @click="isShow = !isShow" class="sort_inner">
            <span style="margin-right: 4px;white-space: nowrap;"> Sort by: {{ sort_name }}</span>
            <template v-if="!isShow">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M14.6666 5.16663L8.32348 11.5098L1.98033 5.16663" stroke="#191817" />
              </svg>
            </template>
            <template v-else>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M14.6667 11.8334L8.3236 5.49023L1.98046 11.8334" stroke="#191817" />
              </svg>
            </template>
          </div>
     
          <div v-show="isShow" class="list_inner">
            <span class="sort_item" v-for="(item, i) in sort_list" :key="i" :class="{ active: sortIndex == i }"
              @click="handleSort_one(item, i)">{{ item.name
              }}
            </span>
          </div>
        </div>
      </div> -->

    </div>

    <div class="swiper_one">
      <div class="swiper_one_swiper" style="overflow: hidden;position: relative;">
        <div class="swiper_btn show_big">
          <div class="swiper-button swiper-button-prev " ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
              viewBox="0 0 18 18" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10.0607 2.45129L9 1.39062L1.3934 8.99723L2.45406 10.0579L2.45412 10.0578L9.00013 16.6038L10.0608 15.5432L3.51478 8.99716L10.0607 2.45129Z"
                fill="#FFFFFF"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17 9.75H3V8.25H17V9.75Z" fill="#FFFFFF">
              </path>
            </svg></div>
          <div class="swiper-button swiper-button-next" ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
              viewBox="0 0 18 18" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M7.93934 2.45129L9 1.39062L16.6066 8.99723L15.5459 10.0579L15.5459 10.0578L8.99987 16.6038L7.93921 15.5432L14.4852 8.99716L7.93934 2.45129Z"
                fill="#FFFFFF"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1 9.75H15V8.25H1V9.75Z" fill="#FFFFFF">
              </path>
            </svg></div>
        </div>
        <div class="swiper-wrapper">
          <a class="swiper-slide" v-for="(item, i) in imgList" :key="i" :href="item.link">
            <div class="_left">
              <img :src="item.left_src_m" alt="" class="show_small">
              <img :src="item.left_src" alt="" class="show_big">
            </div>
            <div class="_right">
              <img :src="item.right_src_m" alt="" class="show_small">
              <img :src="item.right_src" alt="" class="show_big">
              <div class="inner">
                <img :src="item.main_src" alt="" style="height: auto;">
                <div class="title" style="color: #191817;">{{ item.title }}</div>
               
                <span  class="button">
                  Discover
                  <span class="line"></span>
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
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {

  data () {
    return {
      curIndex: 0,
      sortIndex: 0,
      isShow: false,
      curName: 'Leopard',
       swiperIntance:null,
      sort_name: 'All',
      //  Tiger     Zebra
      tabs: [
        { name: 'All' },
        { name: 'Flats' },
        { name: 'Heels' },
        { name: 'Boots' }
      ],
      // sort_list: [
      //   { name: 'All' },
      //   { name: 'Flats' },
      //   { name: 'Boots' },
      //   { name: 'Heels' },
      //   { name: 'Loafers' },
      //   { name: 'Sandals' }
      // ],
      imgList: [
        {
          left_src:
            'https://cdnimg.vivaia.com/VA/image/loadpage/20240229_6666/pc7.jpg',
          left_src_m:
            'https://cdnimg.vivaia.com/VA/image/loadpage/20240229_6666/m8.jpg',
          right_src:
            'https://cdnimg.vivaia.com/VA/image/loadpage/20240229_6666/pc3.jpg',
          right_src_m:
            'https://cdnimg.vivaia.com/VA/image/loadpage/20240229_6666/m12.jpg',
          main_src:
            'https://cdnimg.vivaia.com/vivaia/products/1708668525-2602cd17-e114-482e-8822-3d7d8a59f351.jpg?imresize=800x800',
          title: 'Almond-Toe Knotted Flats (Bibi)',
          link:'https://www.vivaia.com/item/round-toe-knotted-flats-bibi-p_10020339.html?gid=10020339',
        
          type: 'Flats'
        },
        {
          left_src:
            'https://cdnimg.vivaia.com/VA/image/loadpage/20240229_6666/pc8.jpg',
          left_src_m:
            'https://cdnimg.vivaia.com/VA/image/loadpage/20240229_6666/m9.jpg',
          right_src:
            'https://cdnimg.vivaia.com/VA/image/loadpage/20240229_6666/pc3.jpg',
          right_src_m:
            'https://cdnimg.vivaia.com/VA/image/loadpage/20240229_6666/m12.jpg',
          main_src:
            'https://cdnimg.vivaia.com/vivaia/products/1700186821-4188b206-95e1-47e1-9dc2-9a713ae605ed.jpg?imresize=800x800',
          title: 'Square-Toe Mary-Jane (Margot Mary-Jane)',
          link:'https://www.vivaia.com/item/square-toe-mary-jane-margot-mary-jane-p_10019159.html?gid=10019159',
        
          type: 'Flats'
        },
        {
          left_src:
            'https://cdnimg.vivaia.com/VA/image/loadpage/20240229_6666/pc4.jpg',
          left_src_m:
            'https://cdnimg.vivaia.com/VA/image/loadpage/20240229_6666/m4.jpg',
            right_src:
            'https://cdnimg.vivaia.com/VA/image/loadpage/20240229_6666/pc3.jpg',
          right_src_m:
            'https://cdnimg.vivaia.com/VA/image/loadpage/20240229_6666/m12.jpg',
          main_src:
            'https://cdnimg.vivaia.com/vivaia/products/1684736989-5d54aff0-add6-4ec2-9bb5-d21184b5af62.jpg?imresize=800x800',
            link:'https://www.vivaia.com/item/round-toe-chunky-heels-p_10011923.html?gid=10011931',
          title: 'Round-Toe Chunky Heels (Julie Pro)',
        
          type: 'Heels'
        },
        {
          left_src:
            'https://cdnimg.vivaia.com/VA/image/loadpage/20240229_6666/pc1.jpg',
          left_src_m:
            'https://cdnimg.vivaia.com/VA/image/loadpage/20240229_6666/m2.jpg',
            right_src:
            'https://cdnimg.vivaia.com/VA/image/loadpage/20240229_6666/pc3.jpg',
          right_src_m:
            'https://cdnimg.vivaia.com/VA/image/loadpage/20240229_6666/m12.jpg',
            main_src:
            'https://cdnimg.vivaia.com/vivaia/products/1697611348-c3131a94-e141-4903-a997-0bdfde133b1d.jpg?imresize=800x800',
          title: 'Pointed-Toe Boots (Sophia)',
          link:'https://www.vivaia.com/item/pointed-toe-boots-sophia-p_10018873.html?gid=10018881',
          desc: 'Doubled Arch Support / Pressure-Relief Insole / Stretchy Upper',
          type: 'Boots'
        },
        // {
        //   left_src:
        //     'https://cdnimg.vivaia.com/VA/image/loadpage/20240129_6612/Rectangle%202343-PC.jpg',
        //   left_src_m:
        //     'https://cdnimg.vivaia.com/VA/image/loadpage/20240129_6612/image%20444fhtr-2.jpg',
        //   right_src:
        //     'https://cdnimg.vivaia.com/VA/image/loadpage/20240129_6612/Rectangle%202344-PC.jpg',
        //   right_src_m:
        //     'https://cdnimg.vivaia.com/VA/image/loadpage/20240129_6612/image%20513.jpg',
        //   main_src:
        //     'https://cdnimg.vivaia.com/VA/image/loadpage/20240129_6612/Rectangle%2023223-PC.jpg',
        //     link:"https://www.vivaia.com/item/almond-toe-bow-flats-tiana-p_10019907.html?gid=10019907",
        //   title: 'Almond-Toe Bow Flats (Tiana)',
        //   desc: 'Doubled Arch Support / Pressure-Relief Insole / Stretchy Upper',
        //   type: 'zebra-stripe'
        // }
      ]
    }
  },
  mounted () {
    const self = this
   this.swiperIntance = new Swiper('.swiper_one_swiper', {
      //  loop: true,
      initialSlide: 0,
      slidesPerView: 'auto',
      normalizeSlideIndex:false,
      // effect: 'fade',
      breakpoints: {
        375: {
          spaceBetween: 10,
          slidesPerView: 1
        },
        768: {
          spaceBetween: 10,
          slidesPerView: 1
        },
        1024: {
          //当屏幕宽度大于等于768
          spaceBetween: 20
          // slidesPerView:1.4
        },
        1730: {
          spaceBetween: 20
          // slidesPerView:1.4
        }
      },
      pagination: {
        el: '.swiper_one .swiper-pagination',
        type: 'bullets'
      },
      navigation: {
        nextEl: '.swiper_one .swiper-button-next',
        prevEl: '.swiper_one .swiper-button-prev'
      },
     
      on:{
        slideChange: function() {
         
          const index = this.activeIndex
          self.activeIndex = index
          self.curIndex = index
          self.sortIndex = 0
          self.sort_name ='All'
          self.curName = self.tabs[index].name
          // self.$emit('sort_one', 'All')
          self.$emit('sort', self.curName)
}
      }
    })
    
    
  },
  // watch: {
  //   'swiperIntance.realIndex'(newIndex, oldIndex) {
  //    console.log(newIndex,oldIndex,'newIndex','oldIndex');
  //     this.curIndex = newIndex
  //     // this.swiperIntance.slideTo(newIndex);   
  //     this.sortIndex = 0
  //     this.sort_name ='All'
  //     this.curName = this.tabs[newIndex].name
  //     this.$emit('sort_one', 'All')
  //     this.$emit('sort', this.curName)

  //   },
  //   immediate: true, 
  // },
  methods: {
    handleSort (i,item) {
      console.log(i,item)
      
      // console.log(i,this.curIndex);
      this.curIndex = i
      this.swiperIntance.slideTo(this.curIndex);
      // this.sort_name = 'All'
      this.curName = item.name    
     this.$emit('sort', this.curName)
      
     


    },
    // handleSort_one (item, i) {
    //   this.sortIndex = i
    //   this.isShow = false
    //   this.sort_name = item.name
    //   this.$emit('sort_one', this.sort_name)

    // }
  }
}
</script>
<style>
.swiper-button-prev::after {
  display: none;
}

.swiper-button-next::after {
  display: none;
}

.swiper-pagination-bullet {

}

.swiper-pagination-bullet-active {
  background: #ffff;
}
@media screen and (max-width: 1023px) {
  .swiper-pagination-bullet {
  border-radius: 50% !important;
  width:4px;
  height: 4px;
  /* bottom: 5.333vw; */
  background: #fff !important;
}
 .swiper-container-horizontal > .swiper-pagination-bullets{
  bottom: 4.333vw !important;
  /* top: auto; */
}
.swiper-pagination-bullet-active {
  background: #ffff;
}
}

</style>
<style  scoped lang="less">
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
              color: #191817;
              text-decoration: none;
              &:hover{
                .line{
                  width: 0;
                }
              }
              .line{
                width: 100%;
                height: 2px;
                background: #191817;
                transition:all .3s;
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
    right:8.958vw;
  }

  .tabs {
    // display: flex;
    // align-items: center;
    // justify-content: space-between;

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
.sort_inner{
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

@media screen and (min-width: 1024px) and (max-width: 1440px) {
  .fengniao_sort {
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
                white-space: nowrap;
                font-family: Roboto;
                font-size: 18px;
                font-weight: 500;
                line-height: 20px;
                letter-spacing: 0px;
                text-align: center;
               
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
                color: #fff;
                &:hover{
                .line{
                  width: 0;
                }
              }
              .line{
                width: 100%;
                height: 2px;
                background: #fff;
                transition:all .3s;
                display: block;
              }
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

@media screen and (max-width: 1023px) {
  .fengniao_sort {
    width: 100%;
    margin-bottom: 5.333vw;

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

            .inner {
              position: absolute;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 78.667vw;
              color: #fff;

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
        left:1.067vw;
        top: 12.267vw;
        justify-content: flex-start;
        padding-left:5.333vw ;
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
        .list_inner{
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
        .sort_inner{
          display: flex;
          align-items: center;
          padding-left: 5.333vw;
          svg{
            width: 3.2vw;
            height: 3.2vw;
          }
      
        }
         
        }
      }
    }
  }
}
</style>