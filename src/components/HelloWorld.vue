<template>
  <div class="fengniao_new" style="overflow-x: hidden;background: #ffffff;">
    <div class="fengniao_top_banner" ref="top_banner">
      <div class="top_pb" >
        <div class="top_title" style="white-space: nowrap;">VIVAIA in Melbourne</div>
        <div class="top_desc">Start Your Conscious Comfort Journey
        </div>
        <div class="top_date">
          <p>New Store Coming Soon</p>
          <!-- <p>October 6-22, 2023</p> -->
          <p>Shop L2 2124, Highpoint Shopping Center</p>
        </div>
       
        <!-- <div class="top_date_one">MON - SAT 11:00AM - 7:00PM | SUN 11:00AM - 6:00PM</div> -->
      </div>
      <picture>
        <source srcset="https://cdnimg.vivaia.com/VA/image/loadpage/20231120_6489/20.jpg" media="(max-width:768px)" />
        <img class="common-img" src="https://cdnimg.vivaia.com/CO/image/Banner/20231025_6418/Rectangle%2013381.jpg" alt="" />
      </picture>

    </div>

    <new_swiper swiper_name="new_swiper"></new_swiper>
    <swiper_one></swiper_one>
    <swiper_three>
    </swiper_three>
    <swiper_four></swiper_four>
    <swiper_two></swiper_two>





</div>
</template>

<script>



import swiper_one from './swiper_one.vue';
import swiper_two from './swiper_two.vue';
import swiper_three from './swiper_three.vue';
import swiper_four from './swiper_four.vue';
import new_swiper from './new_swiper.vue';
import goods_item from './goods_item.vue';

export default {
  components: {
    goods_item,
    swiper_one,
    swiper_two,
    swiper_three,
    swiper_four,
    new_swiper
  },





};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#common_swiper{
  padding: 5.208vw 0;
}
#common_swiper .swiper-pagination{
  display: none;
}
.fengniao_out {
  width: 100%;
  margin: 0 auto;
  padding: 0.625vw 0.78125vw;
  overflow: hidden;
  background-color: #ffffff;
}

.animate {

  width: 100%;
  color: #000;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  animation: 30s wordsLoop linear infinite;
}

.animate p {
  margin-right: 16.6666667vw;
  font-family: Roboto;
  font-size: 0.7291667vw;
  font-weight: 400;
  line-height: 0.8333333vw;
  letter-spacing: 0px;
  text-align: center;

}

@keyframes wordsLoop {
  0% {
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
}


.main_banner_title {
  font-family: Noto Serif;
  font-size: 1.875vw;
  font-weight: 400;
  line-height: 1.25vw;
  letter-spacing: 0px;
  text-align: center;
  background: #FFFFFF;
  padding: 5.2083333vw 26.6666667vw 2.6041667vw;
}

 .banner_info {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFF0E0;
  ;
  padding: 5.2083333vw 17.708vw;
}

 .banner_title {
  font-family: Noto Serif;
  font-size: 1.667vw;
  font-weight: 400;
  line-height: 2.24vw;
  letter-spacing: 0px;
  text-align: center;
  margin-bottom: 0.625vw;

}

 .banner_one {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F1F1F1;
}

.banner_one ._left,
.banner_one ._right {
  width: 50%;
 
}

.banner_one ._right {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.banner_one .right_title {
  font-family: Noto Serif;
font-size: 1.667vw;
font-weight: 400;
line-height: 1.198vw;
letter-spacing: 0px;
text-align: center;

}






.banner_one .right_desc {
  font-family: Roboto;
font-size: 0.833vw;
font-weight: 400;
line-height: 0.573vw;
letter-spacing: 0px;
text-align: center;
margin: 1.25vw 0 2.083vw;

}
.banner_one .button{
  font-family: Roboto;
font-size: 0.833vw;
font-weight: 500;
line-height: 0.99vw;
letter-spacing: 0px;
text-align: left;
padding: 0.833vw 2.083vw;
background: #191817;
color:#ffffff;
text-decoration: none;
}
 .info_one {



  flex-direction: column;
  text-align: center;

}

 .info_one .banner_desc {
  font-family: Roboto;
  font-size: 1.1458333vw;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0px;
  width: 100%;
  text-align: center;

}

.swiper_btn svg {
  width: auto !important;
  height: auto !important;
}

.last_bottom {
  padding-bottom: 5.2083333vw;
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

  width: 32.6%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.last_bottom .last_bottom_title {
  font-family: Noto Serif;
  font-size: 1.875vw;
  font-weight: 400;
  line-height: 1.25vw;
  letter-spacing: 0px;
  text-align: center;
  margin-bottom: 2.083vw;
}

.last_bottom .inner .item .title {
  position: absolute;
  color: #ffffff;
  line-height: 1;
}
.fengniao_new{
  padding-bottom:4.167vw ;
}
.fengniao_new svg {
  width: 2.6041667vw;
  height: 2.6041667vw;
}

.fengniao_new .new_title {
  font-family: Noto Serif;
  font-size: 1.667vw;
  font-weight: 400;
  line-height: 2.292vw;
}

.fengniao_new .new_title_one {
  font-family: Roboto;
  font-size: 0.833vw;
  font-weight: 400;
  line-height: 1.250vw;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.fengniao_new .show_big {
  display: block;
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
  align-items: center;
  justify-content: center;
}

.fengniao_new .fengniao_top_banner .top_pb {
  position: absolute;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  justify-content: center;
  /* top: 7.188vw;
  left: 4.167vw; */
  top: 6.771vw;
  left: 24.74vw;
}

.fengniao_new .fengniao_top_banner .top_pb .top_title {
  font-family: Noto Serif;
font-size: 1.875vw;
font-weight: 400;
line-height: 2.292vw;
letter-spacing: 0px;
text-align: left;


}

.fengniao_new .fengniao_top_banner .top_pb .top_desc {
  font-family: Roboto;
font-size: 1.042vw;
font-weight: 400;
line-height: 1.198vw;
letter-spacing: 0px;
text-align: left;



}

.fengniao_new .fengniao_top_banner .top_pb .top_date {
  font-family: Roboto;
font-size: 1.042vw;
font-weight: 400;
line-height: 1.198vw;
letter-spacing: 0px;
text-align: left;
margin: 2.083vw 0 4.167vw;


}
.fengniao_new .fengniao_top_banner .top_pb .top_date_one{
  font-family: Roboto;
font-size: 0.729vw;
font-weight: 400;
line-height: 0.729vw;
letter-spacing: 0px;
text-align: left;

}
.fengniao_new .fengniao_top_banner .info {
  position: absolute;
  top: 13.542vw;
}

.fengniao_new .fengniao_top_banner .info .info_title {
  font-family: Roboto;
  font-size: 1.458vw;
  font-weight: 400;
  line-height: 1.719vw;
  letter-spacing: 0.000vw;
  text-align: center;
}

.fengniao_new .fengniao_top_banner .info .info_desc {
  font-family: Noto Serif;
  font-size: 6.667vw;
  font-weight: 400;
  line-height: 9.063vw;
  color: #804c1a;
  letter-spacing: 0.000vw;
  text-align: center;
}

.fengniao_new .fengniao_top_banner .info .info_bottom {
  font-family: Roboto;
  font-size: 1.042vw;
  font-weight: 400;
  line-height: 1.198vw;
  letter-spacing: 0.000vw;
  text-align: center;
  margin-top: 2.083vw;
  opacity: 0.5;
}

.fengniao_new .fengnaio_navigation {
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0.000vw;
  z-index: 20;
  height: 3.646vw;
  background-color: #191817;
  color: #FFFFFF;
}

.fengniao_new .fengnaio_navigation .left {
  margin-right: 11.458vw;
  width: 21.302vw;
}

.fengniao_new .fengnaio_navigation .right {
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: space-between;
}

.fengniao_new .fengnaio_navigation .right a {
  color: #FFFFFF;
  height: 100%;
  display: flex;
  align-items: end;
  text-decoration: none;
}

.fengniao_new .fengnaio_navigation .right .new_title_one {
  height: 1.042vw;
  opacity: 0.6;
  padding-bottom: 0.833vw;
}

.fengniao_new .fengnaio_navigation .right .new_title_one.active {
  border-bottom: 0.104vw solid #FFFFFF;
  opacity: 1;
}

.fengniao_new #section1 .fengniao_margot-info {
  position: relative;
}

.fengniao_new #section1 .fengniao_margot-info .common_title {
  position: absolute;
  top: 18.8541667vw;
  width: 26.7708333vw;
  left: 36.9791667vw;
}

.fengniao_new #section2 .fengniao_margot_inner,
.fengniao_new #section3 .fengniao_margot_inner {
  position: absolute;
  top: 4.1666667vw;
  left: 4.1666667vw;
  color: #FFFFFF;
}

.fengniao_new #section2 .fengniao_margot_inner .list,
.fengniao_new #section3 .fengniao_margot_inner .list {
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 1.0416667vw;
}

.fengniao_new #section2 .fengniao_margot_inner .list .item,
.fengniao_new #section3 .fengniao_margot_inner .list .item {
  width: 100%;
}

.fengniao_new #section2 .fengniao_margot_inner .btn,
.fengniao_new #section3 .fengniao_margot_inner .btn {
  margin-left: 0;
  margin-top: 1.0416667vw;
  color: #000;
  background-color: #FFFFFF;
}

.fengniao_new #section3 .fengniao_margot_inner {
  left: 8.3333333vw;
  top: 6.1458333vw;
}

.fengniao_new #section4 .fengniao_margot-info,
.fengniao_new #section5 .fengniao_margot-info,
.fengniao_new #section6 .fengniao_margot-info {
  display: flex;
  align-items: center;
  justify-content: center;
}

.fengniao_new #section4 .fengniao_margot_inner,
.fengniao_new #section5 .fengniao_margot_inner,
.fengniao_new #section6 .fengniao_margot_inner {
  display: flex;
  align-items: center;
  position: absolute;
  flex-direction: column;
  text-align: center;
}

.fengniao_new #section6 .fengniao_margot_inner {
  width: 21.302vw;
  color: #FFFFFF;
}

.fengniao_new #section6 .fengniao_margot_inner .btn {
  color: #191817;
  background-color: #FFFFFF;
}

.fengniao_new #section4 .fengniao_margot_inner .common_desc,
.fengniao_new #section5 .fengniao_margot_inner .common_desc,
.fengniao_new #section6 .fengniao_margot_inner .common_desc {
  font-family: Roboto;
  font-size: 0.8333333vw;
  font-weight: 400;
  line-height: 0.9895833vw;
  letter-spacing: 0.000vw;
  text-align: center;
}

.fengniao_new #section4 .fengniao_margot_inner .btn,
.fengniao_new #section5 .fengniao_margot_inner .btn,
.fengniao_new #section6 .fengniao_margot_inner .btn {
  margin-top: 1.25vw;
  align-self: center;
  margin-left: 0 !important;
}

.fengniao_new #section5 .fengniao_margot_inner {
  position: absolute;
  left: 8.3333333vw;
  text-align: left;
  /* width: 19.531vw; */
}

.fengniao_new #section5 .fengniao_margot_inner .common_title {
  text-align: left;
  align-self: start;
}

.fengniao_new #section5 .fengniao_margot_inner .common_desc {
  text-align: left !important;
}

.fengniao_new #section5 .fengniao_margot_inner .btn {
  align-self: start;
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
  line-height: 0.8333333vw;
  text-align: left;
}

.fengniao_new .fengniao-outer .btn {
  color: #FFF;
  background-color: #191817;
  font-family: Roboto;
  font-size: 0.8333333vw;
  padding: 0.833333vw 2.0833333vw;
  font-weight: 500;
  line-height: 0.9895833vw;
  text-transform: capitalize;
  align-self: start;
  margin-left: 6.25vw;
}

.fengniao_new .fengniao-outer .common_title {
  font-size: 1.6666667vw;
  font-weight: 400;
  line-height: 2.2916667vw;
  text-align: center;
}

.fengniao_new .fengniao-outer:nth-child(even) {
  background-color: #fff;
}

.fengniao_new .fengniao-outer:nth-child(odd) {
  background-color: #FFFFFF;
}

.fengniao_new .fengniao-outer .fengniao_margot-info {
  position: relative;
}

.fengniao_new .fengniao-outer .fengniao-margot {
  /* padding-bottom: 5.2083333vw; */
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao-margot-all {
  display: flex;
  padding-top: 2.6041667vw;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao-margot-all .left {
  width: 50%;
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
  margin-bottom: 2.0833333vw;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_tab-container {
  display: flex;
  /* justify-content: flex-end; */

}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_tab-container .fengniao-tab {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.604vw;
  width: 100%;
  height: 1.979vw;
  border-bottom: 2px solid rgba(186, 186, 186, 1);
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_tab-container .tab_item {
  font-family: Roboto;
  font-size: 1.042vw;
  font-weight: 400;
  line-height: 1.198vw;
  letter-spacing: 0em;
  text-align: center;
  margin-right: 5.208vw;
 opacity: .5;
  height: 2.083vw;
  
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_tab-container .tab_item:last-child {
  margin-right: 0;
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_tab-container .active {
  opacity: 1;
  font-weight: 500;
  border-bottom: 2px solid #191817;
  /* color: #FFFFFF; */
  /* background: #191817; */
}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao-margot-title {
  margin: 2.6041667vw 0 1.0416667vw;
}

.swiper_btn .swiper-button {
  background: #191817;
  color: #FFFFFF;
  height: 2.083vw;
  width: 2.083vw;
  top: 44%;
  border-radius: 50%;
}

.swiper_btn .swiper-button::after {
  display: none;
}

.swiper_btn .swiper-button-next {
  right: -3.208333vw
}

.swiper_btn .swiper-button-prev {
  left: -3.208333vw
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
  color: #FFFFFF;
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
  background: #D9D9D9;
  color: #191817;

}

.fengniao_new .fengniao-outer .fengniao-margot .fengniao_margot-swiper .fengniao_swiper_one .swiper-pagination .swiper-pagination-progressbar-fill {
  background: #191817;
}

.fengniao_new #go_to3 .fengniao_margot_inner .btn {
  width: 9.1145833vw !important;
  height: 2.65625vw !important;
  margin-left: 0;
}

@media screen and (max-width: 768px) {
  #common_swiper{
    padding: 0;
  }
  #common_swiper .swiper-pagination{
  display:block;
 
}
  .fengniao_new .fengniao_top_banner .top_pb {
    display: flex;
    flex-direction: column;
    left: auto;
    top: 10.133vw;
    align-items: center;
  }

  .fengniao_new .fengniao_top_banner .top_pb .top_title {
    font-family: Noto Serif;
font-size: 6.4vw;
font-weight: 400;
line-height: 8.533vw;
letter-spacing: 0px;
text-align: center;


  }

  .fengniao_new .fengniao_top_banner .top_pb .top_desc {
    font-family: Roboto;
font-size: 3.733vw;
font-weight: 400;
line-height: 4.267vw;
letter-spacing: 0px;
text-align: center;


  }

  .fengniao_new .fengniao_top_banner .top_pb .top_date {
    font-family: Roboto;
font-size: 3.2vw;
font-weight: 400;
line-height: 3.733vw;
letter-spacing: 0px;
text-align: center;

margin: 7.467vw 0 94.933vw;


  }
  .fengniao_new .fengniao_top_banner .top_pb .top_date_one {
    font-family: Roboto;
font-size: 3.2vw;
font-weight: 400;
line-height: 3.733vw;
letter-spacing: 0px;
text-align: center;




  }
  .fengniao_out {
    width: 100%;
    margin: 0 auto;
    padding: 1.3333333vw 0 1.6vw;
    overflow: hidden;
    background-color: #ffffff;
  }

  .animate {

    width: 133.3333333vw;
    color: #000;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
    margin-right: 12.2666667vw;
    animation: 15s wordsLoop1 linear infinite;
  }

  .animate p {
    margin-right: 12.2666667vw;
    font-family: Roboto;
    font-size: 3.2vw;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0px;
    text-align: center;

  }

  @keyframes wordsLoop1 {
    0% {
      transform: translateX(100%);
      -webkit-transform: translateX(100%);
    }

    100% {
      transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
    }
  }


  .main_banner_title {
    font-family: Noto Serif;
    font-size: 6.9333333vw;
    font-weight: 400;
    line-height: 6.4vw;
    letter-spacing: 0px;
    text-align: center;

    padding: 12.8vw 6.4vw 5.3333333vw;
  }

  

   .banner_info {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFF0E0;
    ;
    padding: 12.8vw 12vw 12.2666667vw 12.8vw;
  }

   .banner_title {
    font-family: Noto Serif;
    font-size: 5.333vw;
    font-weight: 400;
    line-height: 7.2vw;
    letter-spacing: 0px;
    text-align: center;


  }

   .banner_title_one {
    line-height: 3.7333333vw;
  }

   .banner_one {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background: #FFFFFF;
  }

  .banner_one ._left,
  .banner_one ._right {
    width: 99%;
    background: #FFFFFF;

  }

  .banner_one ._right {
    display: flex;
    /* align-items: center; */
    align-items: flex-start;
    /* padding: 10.667vw 0; */
  }

  .banner_one .right_title {
    font-family: Noto Serif;
font-size: 5.333vw;
font-weight: 400;
line-height: 7.2vw;
letter-spacing: 0em;
text-align: center;
margin: 10.667vw 0 5.333vw;
  }

 

  .banner_one .right_desc {
  
font-family: Roboto;
font-size: 3.733vw;
font-weight: 400;
line-height: 4.267vw;
letter-spacing: 0px;
text-align: left;
margin: 5.333vw 0 3.2vw;


  }
  .banner_one .button{
   
font-family: Roboto;
font-size: 3.2vw;
font-weight: 500;
line-height: 3.733vw;
letter-spacing: 0px;
text-align: left;
padding: 2.667vw 5.333vw;
margin-bottom: 5.333vw;
  }

   .info_one {

    padding: 12.8vw 6.1333333vw 12.8vw;

    flex-direction: column;
    text-align: center;

  }

   .info_one .banner_desc {
    font-family: Roboto;
    font-size: 3.2vw;
    font-weight: 400;
    line-height: 3.7333333vw;
    letter-spacing: 0px;
    text-align: center;

    margin-top: 3.2vw;
  }

  .fengniao_new svg {
    width: 8.8vw;
    height: 8.8vw;
  }
  .fengniao_new .fengniao_margot-info{
    width: 89.333vw;
    margin: 0 auto;
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
    /* padding-bottom: 1.0666667vw; */
    right: 48vw;

  }

  .fengniao_new .fengnaio_navigation {
    display: flex;
    align-items: center;
    width: 100%;
    /* position: fixed !important; */
    /* top: 46px; */
    overflow-x: scroll;
    z-index: 20;
    padding-left: 0;
    height: 12.2666667vw;
  }

  .fengniao_new .fengnaio_navigation::-webkit-scrollbar {
    display: none;
  }

  .fengniao_new .fengnaio_navigation .left {
    display: none;
  }


  .fengniao_new .fengnaio_navigation .right {
    display: flex;

    height: 100%;
    padding: 0 8vw;

    justify-content: space-between;
  }

  .fengniao_new .fengnaio_navigation .right .slide {
    color: #ffffff;
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    width: auto;
    opacity: 0.6;
    margin-right: 16vw;

    font-size: 3.7333333vw;
    /* margin-right: 40px; */
  }

  .fengniao_new .fengnaio_navigation .right .slide:last-child {
    margin-right: 0;
  }

  .fengniao_new .fengnaio_navigation .right .new_title_one {
    /* height: 5.3333333vw; */

    padding-bottom: 0px;
  }

  .fengniao_new .fengnaio_navigation .right .slide.active {
    border-bottom: 2px solid #ffffff;
    opacity: 1;
  }

  .fengniao_new #go_to3 .item {
    margin-bottom: 4.2666667vw;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao-margot-all {
    padding-top: 5.333vw;
  }

  .fengniao_new #go_to1 .common_title .btn {
    display: flex !important;
  }

  .last_bottom {

    padding-bottom: 13.3333333vw;
    background: #ffffff;
  }

  .last_bottom .inner {
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
  }

  .last_bottom .last_bottom_title {
    font-family: Noto Serif;
    font-size: 5.333vw;
    font-weight: 400;
    line-height: 9.333vw;
    letter-spacing: 0px;
    text-align: center;
    margin: -2.667vw auto 3.333vw;
    width: 87.467vw;

  }
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{
  background: #191817 !important;
}
  .last_bottom .inner .item {
    position: relative;
    font-family: Roboto;
    font-size: 4.2666667vw;

    font-weight: 500;
    margin: 0 auto 5.333vw;
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
    overflow: hidden;
    /* 隐藏溢出内容 */
    white-space: nowrap;
    text-overflow: ellipsis
  }

  .fengniao_new #go_to2 .norml_title {
    font-size: 4.8vw;
    line-height: 6.6666667vw;
    text-align: center;
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
.swiper-pagination {
  top: 100% !important;
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
    top: 42.6666667vw;
  }

  .fengniao_new .fengniao_top_banner .info .info_title {
    font-size: 4.2666667vw;
    font-weight: 400;
    line-height: 5.0666667vw;
    letter-spacing: 0px;
    /* margin-bottom: 0; */
    text-align: center;
  }

  .fengniao_new .fengniao_top_banner .info .info_desc {
    font-family: Noto Serif;
    font-size: 16.2666667vw;
    font-weight: 700;
    height: auto;
    line-height: 16vw;
    letter-spacing: 0px;
    text-align: center;
    margin: 1.6vw 0 2.333vw;
  }

  .fengniao_new .fengniao_top_banner .info .info_bottom {
    font-family: Roboto;
    font-size: 4.2666667vw;
    font-weight: 400;
    line-height: 5.0666667vw;
    letter-spacing: 0px;
    opacity: 1;
    margin-bottom: 17.6vw;
    text-align: center;
    /* margin-top: 20.2666667vw; */
  }

  .fengniao_new .fengniao_top_banner .info .info_title_one {
    /* width: 136px; */
    opacity: 1;
    align-self: center;
    text-align: center;
    /* border: 0; */

  }


  /* .fengniao_new .fengnaio_navigation .swiper-wrapper .swiper-slide {
    width: 100% !important;
    margin-left: 0;
    padding: 5.333vw;
    box-sizing: border-box;
  } */

  /* .fengniao_new
    .fengnaio_navigation
    .swiper-wrapper
    .swiper-slide
    .new_title_one {
    display: none;
  } */

  /* .fengniao_new .fengnaio_navigation .swiper-wrapper .swiper-slide::after {
    content: '';
    display: none;
  } */

  .fengniao_new .fengnaio_navigation .swiper-wrapper .swiper-slide:nth-child(1) {
    margin-left: 0px;
  }

  .fengniao_new .fengnaio_navigation .swiper-pagination {
    position: absolute;
    top: 100%;
    left: 5.333vw;
    width: 89.3333vw;
    height: 2px;
    background: #f6f6f6;
    color: #191817;
  }

  .fengniao_new .fengnaio_navigation .swiper-pagination .swiper-pagination-progressbar-fill {
    background: #191817;
  }

  .fengniao_new #go_to1 .fengniao_margot-info {
    position: relative;
    /* padding-top: 5.333vw; */

  }

  .fengniao_new #go_to1 .fengniao_margot-info .common_title {
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

  .fengniao_new #go_to1 {
    /* padding-bottom: 12.8vw; */
  }

  .fengniao_new #go_to2 {
    padding: 12.8vw 0;
    /* color: #000 !important; */
  }

  .fengniao_new #go_to3 {
    padding: 12.8vw 0;
    /* color: #000 !important; */
  }

  .fengniao_new #go_to4 {
    background: #ffffff;
  }

  .fengniao_new #go_to6 {
    background: #ffffff;
  }

  .fengniao_new #go_to5 {
    padding-bottom: 12.8vw;
    padding-top: 12.8vw;
    background: #ffffff;
    /* color: #000 !important; */
  }

  .fengniao_new #go_to2 .fengniao_margot_inner,
  .fengniao_new #go_to3 .fengniao_margot_inner {
    color: #191817;
    width: 60.8vw;
    text-align: center;
    top: 113.3333333vw;
    left: 14.4vw;
  }

  .fengniao_new #go_to3 .fengniao_margot_inner .norml_title {
    color: #000;
    width: 64.5333333vw;
    margin-bottom: 3.2vw;
  }

  .fengniao_new #go_to1 {
    background: #ffffff;
  }

  .fengniao_new #go_to2 {
    background: #f6f6f6;
  }

  .fengniao_new #go_to3 {
    background: #ffffff;
  }

  .fengniao_new #go_to4 .btn {
    background: #191817 !important;
    color: #ffffff !important;
  }

  .fengniao_new #go_to3 .fengniao_margot_inner .norml_title {
    text-align: center;
    color: #ffffff;
    font-family: Noto Serif;
    font-size: 5.3333333vw;
    font-weight: 400;
    line-height: 7.2vw;
    letter-spacing: 0px;
    text-align: center;
  }

  .fengniao_new #go_to2 .fengniao_margot_inner .list,
  .fengniao_new #go_to3 .fengniao_margot_inner .list {
    padding-left: 0;
    padding-right: 0;
    margin-bottom: 1.0416667vw;
  }

  .fengniao_new #go_to2 .fengniao_margot_inner .list .item,
  .fengniao_new #go_to3 .fengniao_margot_inner .list .item {
    width: 100%;
  }

  .fengniao_new #go_to2 .fengniao_margot_inner .btn,
  .fengniao_new #go_to3 .fengniao_margot_inner .btn {
    margin-left: 0;
    margin-top: 1.0416667vw;
    background-color: #000;
    color: #ffffff;
  }

  .fengniao_new #go_to3 .fengniao_margot_inner {
    left: 12.5333333vw;
    top: 32.2666667vw;
    width: 64.5333333vw;
  }

  .fengniao_new #go_to3 .fengniao_margot_inner .btn {
    color: #000;
    background-color: #ffffff;
  }

  .fengniao_new #go_to4 .fengniao_margot-info,
  .fengniao_new #go_to5 .fengniao_margot-info,
  .fengniao_new #go_to6 .fengniao_margot-info {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fengniao_new #go_to5 .fengniao_margot_inner {
    top: 1.3020833vw;
    width: 73.6vw;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fengniao_new #go_to5 .common_title {
    align-self: start !important;
  }

  .fengniao_new #go_to5 .fengniao_margot_inner .btn {
    background-color: #ffffff;
    color: #000;
    align-self: center !important;
  }

  .fengniao_new #go_to4 .fengniao_margot_inner {
    display: flex;
    align-items: center;
    position: absolute;
    flex-direction: column;
    text-align: center;
    width: 73.6vw;
  }

  .fengniao_new #go_to6 .fengniao_margot_inner {
    top: 44.8vw;
    width: 73.6vw;
    color: #ffffff;
  }

  .fengniao_new #go_to4 .fengniao_margot_inner {
    top: 48.5333333vw;
  }

  .fengniao_new #go_to4 .fengniao_margot_inner .common_desc,
  .fengniao_new #go_to5 .fengniao_margot_inner .common_desc,
  .fengniao_new #go_to6 .fengniao_margot_inner .common_desc {
    font-family: Roboto;
    font-size: 3.2vw;
    font-weight: 400;
    line-height: 3.7333333vw;
    letter-spacing: 0px;

    text-align: center;
    /* color: #FFFFFF; */
    margin: 1.3333333vw 0 3.2vw;
  }

  .fengniao_new #go_to6 .fengniao_margot_inner .common_desc {
    white-space: normal;
  }

  .fengniao_new #go_to4 .fengniao_margot_inner .btn,
  .fengniao_new #go_to6 .fengniao_margot_inner .btn {
    margin-top: 1.25vw;
    align-self: center;
    margin-left: 0 !important;
  }

  .fengniao_new #go_to4 .fengniao_margot_inner .btn {
    color: #ffffff;
    background-color: #000;
  }

  .fengniao_new #go_to5 .fengniao_margot_inner {
    position: absolute;
    left: 8.3333333vw;
    top: 6.6666667vw;
    text-align: left;
  }

  .fengniao_new #go_to5 .fengniao_margot_inner .common_title {
    text-align: center !important;
    align-self: center !important;
  }

  .fengniao_new #go_to5 .fengniao_margot_inner .common_desc {
    /* text-align: left !important; */
    text-align: center !important;
  }

  .fengniao_new #go_to5 .fengniao_margot_inner .btn {
    align-self: start;
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
    /* color:#FFFFFF; */
  }

  .fengniao_new .fengniao-outer .fengniao_margot-info {
    position: relative;
    /* width: 89.3333vw; */
    margin: 0 auto;
  }

  .fengniao_new .fengniao-outer .fengniao-margot {
    /* padding-bottom: 0vw; */
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao-margot-all {
    flex-wrap: wrap;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao-margot-all .left {
    width: 100%;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao-margot-all .right {
    width: 100%;
    /* background-color: red; */
    background: #f6f6f6;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao-margot-all .right .title {
    margin-bottom: 3.7333333vw;
    margin-top: 6.6666667vw;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao_tab-container {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao_tab-container .fengniao-tab {
    width: 100%;
    margin-bottom: 3.2vw;
    margin-top: 0;
    border: 0;
  }

  .fengniao_new .fengniao-outer .fengniao-margot .fengniao_tab-container .tab_item {
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-size: 3.2vw;
    font-weight: 500;
    line-height: 3.733vw;
    text-align: center;
    padding: 2.6vw 4.2666667vw;
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

  .swiper_btn .swiper-button {
    background: #191817;
    color: #ffffff;
    height: 48px;
    width: 48px;
    top: 52%;
    border-radius: 50%;
  }

  .swiper_btn .swiper-button::after {
    display: none;
  }

  .swiper_btn .swiper-button-next {
    right: -4.7916667vw;
  }

  .swiper_btn .swiper-button-prev {
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

  /* .fengniao_new #go_to3 .slide_info{
    padding: 2.1333333vw 0 0;
  } */
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

  .fengniao_new #go_to1 .btn,
  .fengniao_new #go_to2 .btn {
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

  .fengniao_new #go_to2 .btn {
    margin-left: 10.6666667vw !important;
  }

  .fengniao_new #go_to1 .right .btn,
  .fengniao_new #go_to2 .right .btn {
    display: none !important;
  }

  .fengniao_new #go_to3 .fengniao_margot_inner .btn,
  .fengniao_new #go_to4 .fengniao_margot_inner .btn,
  .fengniao_new #go_to5 .fengniao_margot_inner .btn,
  .fengniao_new #go_to6 .fengniao_margot_inner .btn {
    margin-top: 1.25vw;
    /* align-self: center; */
    color: #000;
    background-color: #ffffff;
    width: 24.5333333vw !important;
    height: 7.4666667vw !important;
    padding: 0;
    display: flex !important;
    align-items: center;
    justify-content: center;
  }

  .fengniao_new #go_to3 .fengniao_margot_inner .btn {
    margin-left: 18.6666667vw !important;
  }

  .fengniao_new #go_to4 .fengniao_margot_inner .btn {
    margin-left: 0 !important;
  }

  .fengniao_new #go_to5 .fengniao_margot_inner .btn {
    margin-left: 0 !important;
  }

  .fengniao_new #go_to6 .fengniao_margot_inner .btn {
    margin-left: 0 !important;
  }

  .fengniao_new #go_to5 .common_title {
    align-self: center !important;
  }
  .fengniao_new{
  padding-bottom:12.8vw ;
}
}
</style>
