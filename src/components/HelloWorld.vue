<template>
  <div class="fengniao_new" style="overflow-x: hidden;">
    <div class="fengniao_top_banner" ref="top_banner" style="position: relative;">

      <picture>
        <source srcset="
        https://cdnimg.vivaia.com/VA/image/Banner/20231013_6384/Group%20337249.jpg
          " media="(max-width:768px)" />
        <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20231013_6384/Group-337248.jpg" alt="" />
      </picture>
    </div>

    <New></New>
    <Margot_Walker></Margot_Walker>

    <swiper_one></swiper_one>


    <swiper_four></swiper_four>

    <div class="last_bottom" id="section6">
      <div class="inner space-w">
        <a class="item" href="https://www.vivaia.com/article/about-us">
          <div class="title">About Us</div>
          <picture>
            <source srcset="
                https://cdnimg.vivaia.com/VA/image/Banner/20230919_6296/new%20arrival-m-1.jpg
              " media="(max-width:768px)" />
            <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20230919_6295/Rectangle%202191.jpg"
              alt="" />
          </picture>
        </a>
        <a class="item" href="https://www.vivaia.com/article/Our-materials">
          <div class="title">Our Materials</div>
          <picture>
            <source srcset="
                https://cdnimg.vivaia.com/VA/image/Banner/20230919_6296/new%20arrival-m-2.jpg
              " media="(max-width:768px)" />
            <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20230919_6295/Rectangle%202193.jpg"
              alt="" />
          </picture>
        </a>
        <a class="item" href="https://www.vivaia.com/promotion/vivaia-Press-5955.html">
          <picture>
            <source srcset="
                https://cdnimg.vivaia.com/VA/image/Banner/20230919_6296/new%20arrival-m-3.jpg
              " media="(max-width:768px)" />
            <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20230919_6295/Rectangle%202192.jpg"
              alt="" />
          </picture>
          <div class="title">Press</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import swiper_four from './swiper_four.vue';
import Margot_Walker from './swiper_fif.vue';
import New from './New.vue';
export default {
  components: {
    Margot_Walker,

    swiper_four,
    New
  },



};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

.swiper_btn svg {
  width: auto !important;
  height: auto !important;
}

.last_bottom {
  padding: 5.2083333vw 0;
  background: #ffffff;
}

.last_bottom .inner {
  display: flex;
  justify-content: space-between;
}

.last_bottom .inner .item {
  position: relative;
  font-family: Roboto;
  font-size: 1.25vw;
  font-weight: 400;
  line-height: 1.4583333vw;

  width: 27.0833333vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.last_bottom .inner .item .title {
  position: absolute;
  color: #ffffff;
}

.fengniao_top_banner ._left {
  position: absolute;
  top: 2.3958333vw;
  left: 2.0833333vw;
}

.fengniao_top_banner ._left .left_title_one {
  font-family: Roboto;
  font-size: 2.7083333vw;
  font-weight: 600;
  line-height: 3.1770833vw;
  letter-spacing: 0px;
  text-align: left;

}

.fengniao_top_banner ._left .left_title_two {
  font-family: Roboto;
  font-size: 1.25vw;
  font-weight: 400;
  line-height: 1.5625vw;
  letter-spacing: 0px;
  text-align: left;
  margin: 0.78125vw 0 11.40625vw;

}

.fengniao_top_banner ._left .left_title_three {
  font-family: Roboto;
  font-size: 1.0416667vw;
  font-weight: 400;
  line-height: 1.1979167vw;
  letter-spacing: 0px;
  text-align: left;

}

.fengniao_top_banner ._right {
  top: 16.1979167vw;
  left: 25.9375vw;
  font-family: Roboto;
  font-size: 5vw;
  font-weight: 600;
  line-height: 5.8854167vw;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;

}

.fengniao_new svg {
  width: 2.6041667vw;
  height: 2.6041667vw;
}

.fengniao_new .new_title {
  font-family: Roboto;
  font-size: 1.667vw;
  font-weight: 500;
  line-height: 2.292vw;
}

.fengniao_new .new_title_one {
  font-family: Roboto;
  font-size: 0.833vw;
  font-weight: 400;
  line-height: 1.25vw;
  margin-top: 4px;
  text-align: left;
  overflow: hidden;
  /* 隐藏溢出内容 */
  white-space: nowrap;
  text-overflow: ellipsis
}

.fengniao_new .show_big {
  display: block !important;
}

.fengniao_new .show_small {
  display: none !important;
}

.fengniao_new .space-w {
  width: 83.3333333vw;
  margin: 0 auto;
}

.fengniao_new img {
  width: 100%;
  height: 100%;
  display: block;
}

.fengniao_new .fengniao_top_banner {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  /* margin-top: 3.4895833vw; */

}

.fengniao_new .fengniao_top_banner .info {
  position: absolute;
  top: 14.3229167vw;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.fengniao_new .fengniao_top_banner .info .info_title {
  font-family: Roboto;
  font-size: 1.458vw;
  font-weight: 400;
  line-height: 1.719vw;
  letter-spacing: 0vw;
  text-align: center;
 
}

.fengniao_new .fengniao_top_banner .info .info_desc {
  font-family: Noto Serif;
  font-size: 3.28125vw;
  font-weight: 400;
  line-height:1;
  height: 3.0729167vw;
  
  color: #804c1a;

  margin: 0 0 0.5729167vw;
  letter-spacing: 0vw;
  text-align: center;
}

.fengniao_new .fengniao_top_banner .info .info_title_one {
 
  align-self: center;
  text-align: center;
  border-bottom: 1px solid #000;
}

.fengniao_new .fengniao_top_banner .info .info_bottom {
  font-family: Roboto;
  font-size: 0.8333333vw;
  font-weight: 400;
  line-height: 1.19;
  letter-spacing: 0vw;
  text-align: center;
  margin-top: 5.1041667vw;
  
}


.fengniao_new .fengniao_margot-info .info-icon {
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.25vw;
  letter-spacing: 0px;
  text-align: center;
  border-radius: 1.0416667vw;
  color: #FFFFFF;
  background: #191817;
  top: 1.71875vw;
  padding: 0 0.625vw;
  right: 2.0833333vw;

}

.fengniao_new  .fengniao_margot-info .common_title {
  position: absolute;
  top: 18.8541667vw;
  width: 26.7708333vw;
  left: 36.9791667vw;
}


.fengniao_new  .btn {
  margin-left: 0 !important;
  margin-top: 1.0416667vw;
  color: #000;
  background-color: #ffffff;
  width: 12.6041667vw;
  height: 2.65625vw;
  display: flex !important;
  align-items: center;
  justify-content: center;
}

.fengniao_new  .btn {
  background: #000;
  color: #ffffff;
  margin-top: 0.2083333vw;
  margin-left: 6.25vw !important;
}

.fengniao_new  .common_title .btn {
  display: none !important;
}




.fengniao_new .fengniao-outer .norml_title {
  font-family: Roboto;
  font-size: 1.0416667vw;
  font-weight: 500;
  line-height: 1.1979167vw;
  text-align: left;
  margin-bottom: 1.0416667vw;
}

.fengniao_new .fengniao-outer .list {
  display: flex;
  flex-wrap: wrap;
  padding-left: 6.25vw;
  padding-right: 5.8333333vw;
  justify-content: center;
}

.fengniao_new .fengniao-outer .list .item {
  width: 50%;
  margin-bottom: 1.0416667vw;
  display: flex;
  align-items: center;
}

.fengniao_new .fengniao-outer .list .item .right_title {
  margin-left: 0.5208333vw;
  font-family: Roboto;
  font-size: 0.7291667vw;
  font-weight: 400;
  line-height: 1;
  text-align: left;
}

.fengniao_new .fengniao-outer .btn {
  color: #fff;
  background-color: #191817;
  font-family: Roboto;
  font-size: 0.8333333vw;
  /* padding: 0.833333vw 2.0833333vw; */
  font-weight: 500;
  line-height: 0.9895833vw;
  text-transform: capitalize;
  align-self: start;
  margin-left: 6.25vw;
}

.fengniao_new .fengniao-outer .common_title {
  font-family: Noto Serif;
  font-size: 1.6666667vw;
  font-weight: 400;
  line-height: 2.2916667vw;
  text-align: center;
}


.fengniao_new .fengniao-outer .fengniao_margot-info {
  position: relative;
}


.fengniao_new .fengniao-outer .fengniao-margot{
  padding-bottom: 5.208vw;
}
.fengniao_new .fengniao-outer .fengniao-margot .fengniao-margot-all {
  display: flex;
  padding-top: 2.6041667vw;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao-margot-all .left {
  width: 50%;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao-margot-all .left video {
  width: 100% !important;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao-margot-all .right {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f6f6f6;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao-margot-all .right .title {
  align-self: start;
  margin-left: 6.25vw;
  margin-bottom: 1.0416667vw;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_tab-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}



.fengniao_new .fengniao-outer .fengniao-margot .fengniao-margot-title {
  margin: 2.6041667vw 0 1.0416667vw;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper_btn .swiper-button {
  background: #191817;
  color: #ffffff;
  height: 2.5vw;
  width: 2.5vw;
  top: 52%;
  border-radius: 50%;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper_btn .swiper-button::after {
  display: none;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper_btn .swiper-button-next {
  right: -4.7916667vw;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper_btn .swiper-button-prev {
  left: -4.7916667vw;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper-slide {
  width: 24%;
  position: relative;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper-slide .count {
  font-family: Roboto;
  font-size: 0.625vw;
  font-weight: 500;
  position: absolute;
  top: 0.8333333vw;
  left: 0.8333333vw;
  padding: 0.2604167vw 0.625vw;
  background: #191817;
  border-radius: 2.6041667vw;
  color: #ffffff;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper-slide .slide_info {
  padding: 0.781vw 0 2.083vw;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper-slide .slide_info p:nth-child(2) span:nth-child(1) {
  font-weight: 500;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper-slide .slide_info p:nth-child(2) span:nth-child(2) {
  font-weight: 400;
  text-decoration: line-through;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper-pagination {
  top: 100%;
  background: #d9d9d9;
  color: #191817;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper-pagination .swiper-pagination-progressbar-fill {
  background: #191817;
}



.fengniao_new .fengniao_top_banner .info .info-title_one {
  font-size: 0.8333333vw;
  line-height: 1.19;
}

@media screen and (max-width: 768px) {

  .fengniao_new svg {
    width: 8.8vw;
    height: 8.8vw;
  }

  .fengniao_new .fengniao_margot-info .info-icon {
    font-family: Roboto;
    font-size: 3.2vw;
    font-weight: 500;
    
    line-height: 5.3333333vw;
    height: 5.3333333vw;
    letter-spacing: 0px;
    text-align: center;
    border-radius: 5.3333333vw;
    top: 4vw;
    width: 37.3333333vw;

    right: 48vw;

  }

 
 
  .fengniao_new .fengniao-outer .fengniao-margot .fengniao-margot-all {
    padding-top: 5.333vw;
  }

  .fengniao_new  .common_title .btn {
    display: flex !important;
  }

  .last_bottom {
   
    padding:0 0 13.3333333vw;
    background: #ffffff;
  }

  .last_bottom .inner {
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
  }

  .last_bottom .inner .item {
    position: relative;
    font-family: Roboto;
    font-size: 4.2666667vw;
    margin-bottom: 2.6666667vw;
    font-weight: 500;
    
    text-align: center;

    width: 89.3333333vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .fengniao_new .new_title {
    font-size: 5.3333333vw;
    line-height: 7.2vw;
  }

  .fengniao_new .new_title_one {
    font-size: 3.2vw;
    line-height: 4.2vw;

  }

  
  .fengniao_new .show_big {
    display: none !important;
  }

  .fengniao_new .show_small {
    display: block !important;
  }

  .fengniao_new .space-w {
    width: 89.3333333vw;
    margin: 0 auto;
  }

  .swiper-container-horizontal>.swiper-pagination-progressbar {
    height: 0.5333333vw;
  }

  .fengniao_new .fengniao_top_banner {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    /* top: 46px; */
    /* margin-top: 46px; */
  }

  .fengniao_new .fengniao_top_banner .info {
    top: 44.5333333vw;
  }

  .fengniao_new .fengniao_top_banner .info .info_title {
    font-size: 4.8vw;
    font-weight: 400;
    line-height: 5.624vw;
    letter-spacing: 0px;
    /* margin-bottom: 0; */
    text-align: center;
  }

  .fengniao_new .fengniao_top_banner .info .info-title_one {
    font-size: 4.2666667vw;
    line-height: 5.0666667vw;
  }

  .fengniao_new .fengniao_top_banner .info .info_desc {
    font-family: Noto Serif;
    font-size: 7.4666667vw;
    font-weight: 700;
    height: 26.4vw;
    line-height: 9.6vw;
    letter-spacing: 0px;
    text-align: center;
    margin: 1.0666667vw 0 3.7333333vw;
  }

  .fengniao_new .fengniao_top_banner .info .info_bottom {
    font-family: Roboto;
    font-size: 4.2666667vw;
    font-weight: 400;
    line-height: 5.0666667vw;
    letter-spacing: 0px;
    opacity: 1;
    margin-top: 24vw;
    margin-bottom: 0;
    text-align: center;
   
  }

  .fengniao_new .fengniao_top_banner .info .info_title_one {
    
    opacity: 1;
    align-self: center;
    text-align: center;
   
  }


  

  .fengniao_new  .fengniao_margot-info {
    position: relative;
   

  }

  .fengniao_new  .fengniao_margot-info .common_title {
    font-family: Noto Serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 4.8vw;
    font-weight: 400;
    line-height: 6.6666667vw;
    width: 64.5333333vw;
    top: 11.6666667vw;
    left: 12.5333333vw;
    color: #000;
  }

 
 

  

  .fengniao_new .fengniao-outer .norml_title {
    font-family: Noto Serif;
    font-size: 4.8vw;
    font-weight: 400;
    line-height: 6.6666667vw;
    letter-spacing: 0px;
    margin-bottom: 3.2vw;
    text-align: center;
    text-align: center;
  }

  .fengniao_new .fengniao-outer .list {
    padding-bottom: 4vw !important;
  }

  .fengniao_new .fengniao-outer .list .item {
    width: 100%;
    margin-bottom: 2.6666667vw;
    display: flex;
    align-items: center;
  }

  .fengniao_new .fengniao-outer .list .item svg {
    width: 8.8vw;
    height: 8.8vw;
  }

  .fengniao_new .fengniao-outer .list .item .right_title {
    font-family: Roboto;
    font-size: 3.7333333vw;
    font-weight: 400;
    line-height: 4.2666667vw;
    margin-left: 2.6666667vw;
    text-align: left;
  }

  .fengniao_new .fengniao-outer .btn {
    color: #fff;
    background-color: #191817;
    font-family: Roboto;
    font-size: 2.6666667vw;
    font-weight: 500;
    line-height: 3.2vw;
    padding: 2.1333333vw 4.2666667vw;
    letter-spacing: 0px;
    text-align: center;
    text-transform: capitalize;
    align-self: start;
    margin-left: 6.25vw;
  }

  .fengniao_new .fengniao-outer .common_title {
    font-family: Noto Serif;
    font-size: 5.3333333vw;
    font-weight: 400;
    line-height: 7.2vw;
    letter-spacing: 0px;
    text-align: center;
  }

  .fengniao_new .fengniao-outer .fengniao_margot-info {
    position: relative;
    width: 89.3333vw;
    margin: 0 auto;
  }

  .fengniao_new .fengniao-outer .fengniao-margot {
    padding-bottom: 12.8vw;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao-margot-all {
    flex-wrap: wrap;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao-margot-all .left {
    width: 100%;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao-margot-all .right {
    width: 100%;
    
    background: #f6f6f6;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao-margot-all .right .title {
    margin-bottom: 3.7333333vw;
    margin-top: 6.6666667vw;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao_tab-container {
    display: flex;
    flex-wrap: wrap;
    
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao_tab-container .fengniao-tab {
    width: 100%;
    margin-bottom: 3.2vw;
    margin-top: 0;
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

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao-margot-title {
    margin: 8vw 0 3.2vw;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper_btn .swiper-button {
    background: #191817;
    color: #ffffff;
    height: 48px;
    width: 48px;
    top: 52%;
    border-radius: 50%;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper_btn .swiper-button::after {
    display: none;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper_btn .swiper-button-next {
    right: -4.7916667vw;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper_btn .swiper-button-prev {
    left: -4.7916667vw;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper-slide {
    width: 59.4666667vw;
    margin-right: 2.6666667vw;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper-slide .count {
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    position: absolute;
    top: 0.8333333vw;
    left: 0.8333333vw;
    padding: 0.2604167vw 0.625vw;
    background: #191817;
    border-radius: 2.6041667vw;
    color: #ffffff;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper-slide .slide_info {
    padding: 2.1333333vw 0 5.3333333vw;
  }

  
  .fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper-slide .slide_info p:nth-child(2) {
    margin-top: 1.0666667vw;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper-slide .slide_info p:nth-child(2) span:nth-child(1) {
    font-weight: 500;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper-slide .slide_info p:nth-child(2) span:nth-child(2) {
    font-weight: 400;
    text-decoration: line-through;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper-pagination {
    top: 100%;
    background: #d9d9d9;
    color: #191817;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper-pagination .swiper-pagination-progressbar-fill {
    background: #191817;
  }

  
  .fengniao_new .btn {
    margin-left: 0 !important;
    margin-top: 1.0416667vw;
    background: #000;
    color: #ffffff;
    width: 37.3333333vw;
    padding: 0;
    height: 9.6vw;
    display: flex !important;

    align-items: center;
    justify-content: center;
  }

  .fengniao_new  .btn {
    width: 24.5333333vw;
  }

 

  .fengniao_new  .right .btn{
    display: none !important;
  }

  
}
</style>
