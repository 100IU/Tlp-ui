<template>
  <div class="women_day">
    <div class="top_banner">
      <picture>
        <source srcset="
            https://cdnimg.vivaia.com/VA/image/Banner/20240227_6656/banner-a-M.jpg
          " media="(max-width:768px)" />
        <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20240227_6655/Rectangle-1.jpg" alt="" />
      </picture>
    </div>
    <div class="po_box space-w">
      <div class="po_text-area">
        <div class="po_title">In Her Shoes</div>
        <div class="po_desc desc_1" style="font-family: Roboto;font-weight: 500;">
          Let’s Turn a Comfy Step Into a Giant Leap
        </div>
        <div class="po_desc">
          At VIVAIA, we believe there is no limit to what women can accomplish.
          Whether they want to be ballerinas, news anchors, chefs or doctors —
          anything is possible. <br /><br />
          In honor of Women’s History Month, we’ve partnered with 5 women from
          our community to highlight their unique experiences in different
          professions and to celebrate their success. <br /><br />
          Our new campaign In Her Shoes delves into the challenges these women
          have overcome and how they found support and empowerment through
          different avenues, including fashion and comfortable footwear.
        </div>
      </div>
    </div>
    
    <div class="common_title space-w">Recommendations</div>
    <div class="recommen_swiper space-w" style="position: relative">
      <div class="recommen_swiper_inner" style="overflow: hidden">
        <div class="swiper_btn show_big">
          <div class="swiper-button swiper-button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10.0607 2.45129L9 1.39062L1.3934 8.99723L2.45406 10.0579L2.45412 10.0578L9.00013 16.6038L10.0608 15.5432L3.51478 8.99716L10.0607 2.45129Z"
                fill="#FFFFFF" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17 9.75H3V8.25H17V9.75Z" fill="#FFFFFF" />
            </svg>
          </div>
          <div class="swiper-button swiper-button-next">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M7.93934 2.45129L9 1.39062L16.6066 8.99723L15.5459 10.0579L15.5459 10.0578L8.99987 16.6038L7.93921 15.5432L14.4852 8.99716L7.93934 2.45129Z"
                fill="#FFFFFF" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1 9.75H15V8.25H1V9.75Z" fill="#FFFFFF" />
            </svg>
          </div>
        </div>
        <div class="swiper-wrapper">
          <!-- <div class="swiper-slide" v-for="item in goods_data" :key="item.goods_sn">
            <a :href="`https://www.vivaia.com${item.goods_url}`" style="
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
              " class="a_link">
              <img v-lazy="item.goods_thumb" />
              
              <div class="shop_btn" style="position: absolute">Shop Now</div>
            </a>

            <div class="slide_info">
              <p class="new_title_one" :class="item.goods_sn === '1' ? 'new_weight' : ''">
                {{ item.goods_name }}
              </p>

              <p class="new_title_one" v-if="item.pc_shop_price_converted !== item.old_shop_price_converted
                ">
                <span style="margin-right: 4px">{{
                  item.pc_shop_price_converted
                }}</span>
                <span>{{ item.old_shop_price_converted }} </span>
              </p>
              <p v-else class="new_title_one">
                <span>{{ item.pc_shop_price_converted }}</span>
              </p>
            </div>
          </div> -->
          <div class="swiper-slide"><a
              href="https://www.vivaia.com/item/pointed-toe-ballet-flats-p_10012694.html?gid=10012694" class="a_link"
              style="position: relative; display: flex; align-items: center; justify-content: center;"><img
                data-src="https://cdnimg.vivaia.com/vivaia/products/1683707387-23558e6b-3aa1-487f-8f37-e23e94836e5b.jpg?imresize=800x800"
                src="https://cdnimg.vivaia.com/vivaia/products/1683707387-23558e6b-3aa1-487f-8f37-e23e94836e5b.jpg?imresize=800x800"
                lazy="loaded">
              <div class="shop_btn" style="position: absolute;"> Shop Now </div>
            </a>
            <div class="slide_info">
              <p class="new_title_one"> Pointed-Toe Ballet Flats (Aria 5°)</p>
              <p class="new_title_one"><span>HK$780.00</span></p>
            </div>
          </div>
          <div class="swiper-slide"><a
              href="https://www.vivaia.com/item/pointed-toe-ballet-flats-p_10012694.html?gid=10012694" class="a_link"
              style="position: relative; display: flex; align-items: center; justify-content: center;"><img
                data-src="https://cdnimg.vivaia.com/vivaia/products/1683707387-23558e6b-3aa1-487f-8f37-e23e94836e5b.jpg?imresize=800x800"
                src="https://cdnimg.vivaia.com/vivaia/products/1683707387-23558e6b-3aa1-487f-8f37-e23e94836e5b.jpg?imresize=800x800"
                lazy="loaded">
              <div class="shop_btn" style="position: absolute;"> Shop Now </div>
            </a>
            <div class="slide_info">
              <p class="new_title_one"> Pointed-Toe Ballet Flats (Aria 5°)</p>
              <p class="new_title_one"><span>HK$780.00</span></p>
            </div>
          </div>
          <div class="swiper-slide"><a
              href="https://www.vivaia.com/item/pointed-toe-ballet-flats-p_10012694.html?gid=10012694" class="a_link"
              style="position: relative; display: flex; align-items: center; justify-content: center;"><img
                data-src="https://cdnimg.vivaia.com/vivaia/products/1683707387-23558e6b-3aa1-487f-8f37-e23e94836e5b.jpg?imresize=800x800"
                src="https://cdnimg.vivaia.com/vivaia/products/1683707387-23558e6b-3aa1-487f-8f37-e23e94836e5b.jpg?imresize=800x800"
                lazy="loaded">
              <div class="shop_btn" style="position: absolute;"> Shop Now </div>
            </a>
            <div class="slide_info">
              <p class="new_title_one"> Pointed-Toe Ballet Flats (Aria 5°)</p>
              <p class="new_title_one"><span>HK$780.00</span></p>
            </div>
          </div>
          <div class="swiper-slide"><a
              href="https://www.vivaia.com/item/pointed-toe-ballet-flats-p_10012694.html?gid=10012694" class="a_link"
              style="position: relative; display: flex; align-items: center; justify-content: center;"><img
                data-src="https://cdnimg.vivaia.com/vivaia/products/1683707387-23558e6b-3aa1-487f-8f37-e23e94836e5b.jpg?imresize=800x800"
                src="https://cdnimg.vivaia.com/vivaia/products/1683707387-23558e6b-3aa1-487f-8f37-e23e94836e5b.jpg?imresize=800x800"
                lazy="loaded">
              <div class="shop_btn" style="position: absolute;"> Shop Now </div>
            </a>
            <div class="slide_info">
              <p class="new_title_one"> Pointed-Toe Ballet Flats (Aria 5°)</p>
              <p class="new_title_one"><span>HK$780.00</span></p>
            </div>
          </div>
          <div class="swiper-slide"><a
              href="https://www.vivaia.com/item/pointed-toe-ballet-flats-p_10012694.html?gid=10012694" class="a_link"
              style="position: relative; display: flex; align-items: center; justify-content: center;"><img
                data-src="https://cdnimg.vivaia.com/vivaia/products/1683707387-23558e6b-3aa1-487f-8f37-e23e94836e5b.jpg?imresize=800x800"
                src="https://cdnimg.vivaia.com/vivaia/products/1683707387-23558e6b-3aa1-487f-8f37-e23e94836e5b.jpg?imresize=800x800"
                lazy="loaded">
              <div class="shop_btn" style="position: absolute;"> Shop Now </div>
            </a>
            <div class="slide_info">
              <p class="new_title_one"> Pointed-Toe Ballet Flats (Aria 5°)</p>
              <p class="new_title_one"><span>HK$780.00</span></p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- <div class="recommen_swiper space-w" style="position: relative">
      <div class="recommen_swiper_inner" style="overflow: hidden">
        <div class="swiper_btn show_big">
          <div class="swiper-button swiper-button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10.0607 2.45129L9 1.39062L1.3934 8.99723L2.45406 10.0579L2.45412 10.0578L9.00013 16.6038L10.0608 15.5432L3.51478 8.99716L10.0607 2.45129Z"
                fill="#FFFFFF" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17 9.75H3V8.25H17V9.75Z" fill="#FFFFFF" />
            </svg>
          </div>
          <div class="swiper-button swiper-button-next">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M7.93934 2.45129L9 1.39062L16.6066 8.99723L15.5459 10.0579L15.5459 10.0578L8.99987 16.6038L7.93921 15.5432L14.4852 8.99716L7.93934 2.45129Z"
                fill="#FFFFFF" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1 9.75H15V8.25H1V9.75Z" fill="#FFFFFF" />
            </svg>
          </div>
        </div>
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in goods_data" :key="item.goods_sn">
            <a :href="`https://www.vivaia.com${item.goods_url}`" style="
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
              " class="a_link">
              <img v-lazy="item.goods_thumb" />

              <div class="shop_btn" style="position: absolute">Shop Now</div>
            </a>

            <div class="slide_info">
              <p class="new_title_one">
                {{ item.goods_name }}
              </p>

              <p class="new_title_one" v-if="item.pc_shop_price_converted !== item.old_shop_price_converted
                ">
                <span style="margin-right: 4px">{{
                  item.pc_shop_price_converted
                }}</span>
                <span>{{ item.old_shop_price_converted }} </span>
              </p>
              <p v-else class="new_title_one">
                <span>{{ item.pc_shop_price_converted }}</span>
              </p>
            </div>
          </div>

        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div> -->
    <div class="videos space-w">
    <div class="common_title title">
      Watch as these five women walk you through their individual journeys
      <br class="show_big" />
      and explain how VIVAIA has played an important role in their lives.
    </div>

    <video id="myVideo" class="videos" autoplay="autoplay" loop="loop" muted="" controls="controls" width="100%"
      playsinline="true" webkit-playsinline="true">
      <source src="https://cdnimg.vivaia.com/CO/video/Banner/20240125_6604/video.mp4" type="video/mp4">
    </video>

  </div>
  <div class="bottom_swiper space-w">
    <div class="bottom_swiper_inner show_big" style="overflow: hidden; position: relative">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <picture>
            <source srcset="
                https://cdnimg.vivaia.com/VA/image/Banner/20240227_6656/Rectangle%202326.jpg
                " media="(max-width:768px)" />
            <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20240227_6655/Rectangle%202324.jpg"
              alt="" />
          </picture>

          <div class="slide_area">
            <div class="slide_desc desc_1">News Anchor</div>
            <div class="common_title slide_title">Sara Lee Kessler</div>
            <div class="slide_desc">
              Sara Lee Kessler is a veteran TV and radio news anchor and
              reporter with more than 40 years of experience and name
              recognition in the New York market. <br />
              <br />
              She is a three-time Emmy Award winner for anchoring WWOR-TV's
              coverage of the 1993 World Trade Center bombing, which was
              carried nationally on CNN, and hosting and writing documentaries
              on autism and bone marrow donation that aired on PBS.
              <br />
              <br />
              Sara Lee says her favorite assignment was covering the late John
              Lennon's 1976 immigration hearing in which he was given a green
              card and he yelled out, "right on, brother" as she did her TV
              news standup for WCBS, a historic moment immortalized in the
              2009 film, U.S. v Lennon. Sara Lee Kessler has been with iHeart
              Radio since 2013 and can be heard in New York on 710 WOR and
              nationwide on NBC News Radio stations.
            </div>
            <div class="slide_desc">Instagram: @saraleekessler</div>
          </div>
        </div>
        <div class="swiper-slide">
          <picture>
            <source srcset="
                https://cdnimg.vivaia.com/VA/image/Banner/20240227_6656/Rectangle%202326.jpg
                " media="(max-width:768px)" />
            <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20240227_6655/Rectangle%202324.jpg"
              alt="" />
          </picture>

          <div class="slide_area">
            <div class="slide_desc desc_1">News Anchor</div>
            <div class="common_title slide_title">Sara Lee Kessler</div>
            <div class="slide_desc">
              Sara Lee Kessler is a veteran TV and radio news anchor and
              reporter with more than 40 years of experience and name
              recognition in the New York market. <br />
              <br />
              She is a three-time Emmy Award winner for anchoring WWOR-TV's
              coverage of the 1993 World Trade Center bombing, which was
              carried nationally on CNN, and hosting and writing documentaries
              on autism and bone marrow donation that aired on PBS.
              <br />
              <br />
              Sara Lee says her favorite assignment was covering the late John
              Lennon's 1976 immigration hearing in which he was given a green
              card and he yelled out, "right on, brother" as she did her TV
              news standup for WCBS, a historic moment immortalized in the
              2009 film, U.S. v Lennon. Sara Lee Kessler has been with iHeart
              Radio since 2013 and can be heard in New York on 710 WOR and
              nationwide on NBC News Radio stations.
            </div>
            <div class="slide_desc">Instagram: @saraleekessler</div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="bottom_swiper_inner_m show_small" style="overflow: hidden; position: relative">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <picture>
            <source srcset="
                https://cdnimg.vivaia.com/VA/image/Banner/20240227_6656/Rectangle%202326.jpg
                " media="(max-width:768px)" />
            <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20240227_6655/Rectangle%202324.jpg"
              alt="" />
          </picture>

          <div class="slide_area">
            <div class="slide_desc desc_1">News Anchor</div>
            <div class="common_title slide_title">Sara Lee Kessler</div>
            <div class="slide_desc">
              Sara Lee Kessler is a veteran TV and radio news anchor and
              reporter with more than 40 years of experience and name
              recognition in the New York market. <br />
              <br />
              She is a three-time Emmy Award winner for anchoring WWOR-TV's
              coverage of the 1993 World Trade Center bombing, which was
              carried nationally on CNN, and hosting and writing documentaries
              on autism and bone marrow donation that aired on PBS.
              <br />
              <br />
              Sara Lee says her favorite assignment was covering the late John
              Lennon's 1976 immigration hearing in which he was given a green
              card and he yelled out, "right on, brother" as she did her TV
              news standup for WCBS, a historic moment immortalized in the
              2009 film, U.S. v Lennon. Sara Lee Kessler has been with iHeart
              Radio since 2013 and can be heard in New York on 710 WOR and
              nationwide on NBC News Radio stations.
            </div>
            <div class="slide_desc">Instagram: @saraleekessler</div>
          </div>
        </div>
        <div class="swiper-slide">
          <picture>
            <source srcset="
                https://cdnimg.vivaia.com/VA/image/Banner/20240227_6656/Rectangle%202326.jpg
                " media="(max-width:768px)" />
            <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20240227_6655/Rectangle%202324.jpg"
              alt="" />
          </picture>

          <div class="slide_area">
            <div class="slide_desc desc_1">News Anchor</div>
            <div class="common_title slide_title">Sara Lee Kessler</div>
            <div class="slide_desc">
              Sara Lee Kessler is a veteran TV and radio news anchor and
              reporter with more than 40 years of experience and name
              recognition in the New York market. <br />
              <br />
              She is a three-time Emmy Award winner for anchoring WWOR-TV's
              coverage of the 1993 World Trade Center bombing, which was
              carried nationally on CNN, and hosting and writing documentaries
              on autism and bone marrow donation that aired on PBS.
              <br />
              <br />
              Sara Lee says her favorite assignment was covering the late John
              Lennon's 1976 immigration hearing in which he was given a green
              card and he yelled out, "right on, brother" as she did her TV
              news standup for WCBS, a historic moment immortalized in the
              2009 film, U.S. v Lennon. Sara Lee Kessler has been with iHeart
              Radio since 2013 and can be heard in New York on 710 WOR and
              nationwide on NBC News Radio stations.
            </div>
            <div class="slide_desc">Instagram: @saraleekessler</div>
          </div>
        </div>
        <div class="swiper-slide">
          <picture>
            <source srcset="
                https://cdnimg.vivaia.com/VA/image/Banner/20240227_6656/Rectangle%202326.jpg
                " media="(max-width:768px)" />
            <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20240227_6655/Rectangle%202324.jpg"
              alt="" />
          </picture>

          <div class="slide_area">
            <div class="slide_desc desc_1" >News Anchor</div>
            <div class="common_title slide_title">Sara Lee Kessler</div>
            <div class="slide_desc">
              Sara Lee Kessler is a veteran TV and radio news anchor and
              reporter with more than 40 years of experience and name
              recognition in the New York market. <br />
              <br />
              She is a three-time Emmy Award winner for anchoring WWOR-TV's
              coverage of the 1993 World Trade Center bombing, which was
              carried nationally on CNN, and hosting and writing documentaries
              on autism and bone marrow donation that aired on PBS.
              <br />
              <br />
              Sara Lee says her favorite assignment was covering the late John
              Lennon's 1976 immigration hearing in which he was given a green
              card and he yelled out, "right on, brother" as she did her TV
              news standup for WCBS, a historic moment immortalized in the
              2009 film, U.S. v Lennon. Sara Lee Kessler has been with iHeart
              Radio since 2013 and can be heard in New York on 710 WOR and
              nationwide on NBC News Radio stations.
            </div>
            <div class="slide_desc">Instagram: @saraleekessler</div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
  <div class="common_title space-w">In Her Shoes</div>
  <div class="y_shoes space-w">
    <picture>
      <source srcset="
            https://cdnimg.vivaia.com/VA/image/Banner/20240227_6656/review-m-1.jpg
          " media="(max-width:768px)" />
      <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20240227_6655/Untitled-1%201.jpg" alt="" />
    </picture>
    <div class="y_inner">
      <div class="y_title">What's your story?</div>
      <div class="y_desc">
        Between February 29 to March 14, visit our Instagram account and share
        what empowers you for a chance to win a pair of VIVAIA flats.
      </div>
      <a href="" class="y_btn">

        <div class="desc">
          <picture>
            <source srcset="
          https://cdnimg.vivaia.com/CO/image/Banner/20240125_6604/Group%20789.svg
          " media="(max-width:768px)" />
            <img class="common-img" src="https://cdnimg.vivaia.com/CO/image/Banner/20240125_6604/Group%20788.svg"
              alt="" />
          </picture>Share my story
        </div>
      </a>
    </div>
  </div>
  <div class="bottom_icon">
    <div class="items">
      <div class="bottom_item">
        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M39.2708 18.2812H23.3594V16.25H41.3021V31.4844H52.1354V33.5156H39.2708V18.2812Z" fill="#191817"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M30.4688 43.3333H39.4401V45.3645H30.4688V43.3333Z"
            fill="#191817"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2656 43.3335H22.3438V45.3647H17.2656V43.3335Z"
            fill="#191817"></path>
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M26.5756 47.3958C28.2583 47.3958 29.6224 46.0316 29.6224 44.3489C29.6224 42.6661 28.2583 41.302 26.5756 41.302C24.8928 41.302 23.5287 42.6661 23.5287 44.3489C23.5287 46.0316 24.8928 47.3958 26.5756 47.3958ZM26.5756 49.427C29.3801 49.427 31.6537 47.1534 31.6537 44.3489C31.6537 41.5443 29.3801 39.2708 26.5756 39.2708C23.771 39.2708 21.4974 41.5443 21.4974 44.3489C21.4974 47.1534 23.771 49.427 26.5756 49.427Z"
            fill="#191817"></path>
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M42.8254 47.3958C44.5082 47.3958 45.8723 46.0316 45.8723 44.3489C45.8723 42.6661 44.5082 41.302 42.8254 41.302C41.1427 41.302 39.7786 42.6661 39.7786 44.3489C39.7786 46.0316 41.1427 47.3958 42.8254 47.3958ZM42.8254 49.427C45.63 49.427 47.9036 47.1534 47.9036 44.3489C47.9036 41.5443 45.63 39.2708 42.8254 39.2708C40.0209 39.2708 37.7473 41.5443 37.7473 44.3489C37.7473 47.1534 40.0209 49.427 42.8254 49.427Z"
            fill="#191817"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.573 32.3308H26.5756V34.3621H15.573V32.3308Z"
            fill="#191817"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4661 25.5598H33.0077V27.5911H19.4661V25.5598Z"
            fill="#191817"></path>
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M46.4943 25.052H39.4401V23.0208H47.6202L52.3046 30.5159V45.3645H46.1686V43.3333H50.2734V31.0985L46.4943 25.052Z"
            fill="#191817"></path>
        </svg>
        <div class="title">Free shipping on orders over $99</div>
      </div>
      <div class="line"></div>
      <div class="bottom_item">
        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M46.7188 18.2812H18.2812V23.6979H46.7188V18.2812ZM16.25 16.25V25.7292H48.75V16.25H16.25Z" fill="#191817">
          </path>
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M45.3645 25.729H19.6354V46.0415H45.3645V25.729ZM17.6041 23.6978V48.0728H47.3958V23.6978H17.6041Z"
            fill="#191817"></path>
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M26.3285 32.4977L29.3754 29.1123L30.8852 30.4711L29.3638 32.1615H39.2709V34.1928H27.0834L26.3285 32.4977Z"
            fill="#191817"></path>
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M38.6716 37.9188L35.6248 41.3042L34.1149 39.9454L35.6363 38.255H25.7292V36.2237H37.9167L38.6716 37.9188Z"
            fill="#191817"></path>
        </svg>
        <div class="title">Free Exchanges &amp; Easy Returns</div>
      </div>
      <div class="line"></div>
      <div class="bottom_item">
        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M46.1446 16.9873L30.0376 16.9873L11.2461 35.7788L27.3531 51.8858L46.1446 33.0943L46.1446 16.9873ZM44.1134 32.2529L27.3531 49.0132L14.1187 35.7788L30.879 19.0186L44.1134 19.0186L44.1134 32.2529Z"
            fill="#191817"></path>
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M48.0494 34.9976L47.0637 26.5279L49.0814 26.2931L50.1484 35.4624L39.2964 53.0969L31.4697 49.5393L32.3103 47.6901L38.5056 50.5062L48.0494 34.9976Z"
            fill="#191817"></path>
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M28.9372 28.7727C29.4673 29.3028 30.3268 29.3028 30.8568 28.7727C31.3869 28.2427 31.3869 27.3832 30.8568 26.8531C30.3268 26.3231 29.4673 26.3231 28.9372 26.8531C28.4072 27.3832 28.4072 28.2427 28.9372 28.7727ZM27.5009 30.2091C28.8243 31.5324 30.9698 31.5324 32.2932 30.2091C33.6165 28.8857 33.6165 26.7402 32.2932 25.4168C30.9698 24.0935 28.8243 24.0935 27.5009 25.4168C26.1776 26.7402 26.1776 28.8857 27.5009 30.2091Z"
            fill="#191817"></path>
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M30.1352 39.5554C30.6653 40.0855 31.5247 40.0855 32.0548 39.5554C32.5849 39.0253 32.5849 38.1659 32.0548 37.6358C31.5247 37.1057 30.6653 37.1057 30.1352 37.6358C29.6051 38.1659 29.6051 39.0253 30.1352 39.5554ZM28.6989 40.9917C30.0222 42.3151 32.1677 42.3151 33.4911 40.9917C34.8144 39.6684 34.8144 37.5229 33.4911 36.1995C32.1677 34.8762 30.0222 34.8762 28.6989 36.1995C27.3755 37.5229 27.3755 39.6684 28.6989 40.9917Z"
            fill="#191817"></path>
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M37.1229 32.4113L24.5984 35.7672L24.0727 33.8051L36.5971 30.4492L37.1229 32.4113Z" fill="#191817"></path>
        </svg>
        <div class="title">$15 Off Your First Order</div>
      </div>
    </div>
  </div>

  </div>
  


</template>

<script>
let str = '10017505,10017569,10017521,10017585,10017553,10017537';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
export default {
  data () {
    return {
      goods_data: [],
    };
  },
  created(){
    // this.getAllgoods();
  },
  mounted () {
   
    new Swiper('.bottom_swiper_inner', {
      slidesPerView: 'auto',
      autoplay: true,
      loop: true,
      pagination: {
        el: ' .swiper-pagination',
        type: 'progressbar',
      },
    });
    new Swiper('.bottom_swiper_inner_m', {
      slidesPerView: 'auto',
      // autoplay:true,
      loop: true,
      pagination: {
        el: '.bottom_swiper_inner_m .swiper-pagination',
        type: 'bullets',
      },
    });
    //recommen_swiper_inner
  setTimeout(() => {
    new Swiper('.recommen_swiper_inner', {
      // autoplay:true,
      // loop: true,
      breakpoints: {
        310: {
          spaceBetween: 10,
          slidesPerView: 1.2,
        },
        1024: {
          //当屏幕宽度大于等于768
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1730: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
      pagination: {
        el: '.recommen_swiper_inner .swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.recommen_swiper_inner .swiper-button-next',
        prevEl: '.recommen_swiper_inner .swiper-button-prev',
      },
    });
  }, 100);
  
  },
  methods: {
    async getAllgoods () {
      const res = await window._fengniao_getGoods_list({
        goods_id: str.replace(/\s/g, ''),
        disable_goods_number: 1,
      });

      this.goods_data = res.result;
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

.bottom_swiper_inner_m .swiper-horizontal>.swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: auto;
  top: 440px;
}

.bottom_swiper_inner_m .swiper-pagination-bullet-active {
  background-color: rgba(255, 255, 255, 1) !important;
}

.swiper_btn .swiper-button:after {
  display: none;
}

.swiper_btn .swiper-button-prev {
  left: -3.208333vw;
}

.swiper_btn .swiper-button-next {
  right: -3.208333vw;
}

.swiper_btn .swiper-button {
  background: #191817;
  color: #fff;
  height: 2.083vw;
  width: 2.083vw;
  top: 44%;
  border-radius: 50%;
}

/* .recommen_swiper .swiper-pagination {
  bottom: 0;
  top: auto;
  width: calc(100% - 40px);
  left: auto;
} */

.swiper-pagination-progressbar-fill {
  background-color: #191817 !important;
}

.swiper-pagination-bullet {
  width: 4px !important;
  height: 4px !important;
}

.swiper-pagination-bullets {
  top: 418px !important;
  bottom: auto !important;

}
</style>
<style lang="less">

.women_day {
  padding: 0 0 80px;
  background: #fff;
  .show_big {
    display: block;
  }

  .show_small {
    display: none;
  }

  img {
    display: block;
    width: 100%;
  }

  .space-w {
    width: calc(100% - 320px);
    margin: 0 auto 80px;
  }

  .common_title {
    font-family: Noto Serif;
    font-size: 32px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 32px;
  }

  .top_banner {}

  .po_box {
    position: relative;
    top: -80px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #191817;
    background: #fcfbfb;

    // border: 1px solid rgba(0, 0, 0, 1);
    .po_text-area {
      padding: 80px 425px;

      .po_title {
        font-family: Noto Serif;
        font-size: 48px;
        font-weight: 400;
        line-height: 65px;
        letter-spacing: 0px;
        text-align: center;
      }

     

      .po_desc {
        font-family: Noto Serif;

        font-size: 20px;
        line-height: 27px;
        letter-spacing: 0px;
        text-align: center;
      }
      .desc_1 {
        line-height: 1;
        margin-bottom: 22px;
        font-weight: 500;
      }
    }
  }

  .recommen_swiper {
    .recommen_swiper_inner {
      .swiper-wrapper {
        .swiper-slide {
          .a_link {
            position: relative;

            &:hover .shop_btn {
              opacity: 1;
            }

            .shop_btn {
              bottom: 10px;
              width: 91.6%;
              opacity: 0;
              margin: 0 auto;
              background: #fff;
              color: #191817;
              padding: 12px 0;
              font-family: Roboto;
              font-size: 16px;
              font-weight: 500;
              line-height: 1;
              letter-spacing: 0;
              text-align: center;
            }
          }

          .slide_info {
            margin-bottom: 40px;

            p {
              &:nth-child(2) {
                span {
                  &:first-child {
                    font-weight: 500;
                  }
                }
              }
            }

            p {
              &:nth-child(2) {
                span {
                  &:nth-child(2) {
                    font-weight: 500;
                  }
                }
              }
            }


            .new_title_one {
              font-family: Roboto;
              font-size: 14px;
              font-weight: 400;
              line-height: 16px;
              letter-spacing: 0;
              text-align: left;
              margin-top: 12px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              color: #191817;
            }
          }
        }
      }

      .swiper-pagination {
        bottom: 0;
        top: auto;

      }
    }
  }

  .videos {
    .title {
      text-align: center;
    }

    #myVideo {}
  }

  .bottom_swiper {
    .bottom_swiper_inner {
      .swiper-wrapper {
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          //justify-content: flex-start;
          position: relative;
          color: #fff;

          .slide_area {
            position: absolute;
            width: 492px;
            left: 190px;

            .desc_1 {
              // margin-bottom: 11px;
            }

            .slide_desc {
              font-family: Roboto;
              font-size: 16px;
              font-weight: 400;
              line-height: 19px;
              letter-spacing: 0px;
              text-align: center;
              &:last-child{
                margin-top: 20px;
              }
            }

            .slide_title {
              text-align: center;
              margin-bottom: 20px;
            }
          }
        }
      }

      .swiper-pagination {
        top: auto;
        bottom: 40px;
        width: 300px;
        margin: 0 auto;
        left: 646px;
      }

      .swiper-pagination-progressbar-fill {
        background-color: #191817;
      }
    }
  }

  .y_shoes {
    display: flex;
    // justify-content: center;
    position: relative;

    .y_inner {
      position: absolute;
      top: 158px;
      right: 220px;
      width: 460px;

      .y_title {
        font-family: Roboto;
        font-size: 20px;
        font-weight: 500;
        line-height: 23px;
        letter-spacing: 0px;
        text-align: left;
      }

      .y_desc {
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: left;
        margin: 8px 0 24px 0;
      }

      .y_btn {
        display: flex;
        align-items: center;

        .desc {
          padding: 16px 40px;
          background-color: #191817;
          display: flex;
          align-items: center;
          color: #fff;
          font-family: Roboto;
          font-size: 16px;
          font-weight: 400;
          line-height: 19px;
          letter-spacing: 0px;
          text-align: left;

          img {
            width: 27px;
            height: 27px;
            margin-right: 8px;
          }
        }
      }
    }
  }

  .bottom_icon {
    background: #ffffff;

    .items {
      width: 68.75vw;
      margin: 0 auto 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #ffffff;
      // padding: 25px 0px;
      // border-top: 1px solid #eeeeee;
      // border-bottom: 1px solid #eeeeee;

      .bottom_item {
        display: flex;
        flex-wrap: wrap;
        // flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        .title {
          font-family: Roboto;
          font-size: 16px;
          font-weight: 400;
          line-height: 18.75px;
          letter-spacing: 0px;
          text-align: center;
          margin-left: 10px;
        }

        .desc {
          font-family: Roboto;
          font-size: 14px;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0px;
          text-align: center;
          color: rgba(102, 102, 102, 1);
          margin: 0.417vw 0 1.823vw;
          padding: 0 60px;
          box-sizing: border-box;
        }

        a {
          font-family: Roboto;
          font-size: 16px;
          font-weight: 400;
          line-height: 19px;
          letter-spacing: 0px;
          text-align: center;
          color: #191817;
        }
      }

      .line {
        width: 1px;
        height: 64px;
        background: #eeeeee;
      }
    }
  }
}

@media screen and(max-width: 768px) {
  .women_day {
    padding: 0 0 40px;
    .show_big {
      display: none;
    }

    .show_small {
      display: block;
    }

    img {
      display: block;
      width: 100%;
    }

    .space-w {
      width: calc(100% - 40px);
      margin: 0 auto 40px;
    }

    .common_title {
      font-family: Noto Serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0px;
      text-align: left;
      margin-bottom: 20px;
    }

    .top_banner {}

    .po_box {
      position: relative;
      top: -40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #191817;
      background: #fcfbfb;
     margin-bottom: 0 !important;
      .po_text-area {
        padding: 40px 20px;

        .po_title {
          font-size: 26px;
          font-weight: 400;
          line-height: 35px;
          letter-spacing: 0px;
          text-align: center;
        }

      

        .po_desc {
          font-family: Noto Serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 19px;
          letter-spacing: 0px;
          text-align: center;
        }
        .desc_1 {
          line-height: 1;
          margin-bottom: 12px;
        }
      }
    }

    .recommen_swiper {
      width: 100% !important;

      .recommen_swiper_inner {
        padding: 0 20px;
        box-sizing: border-box;

        .swiper-wrapper {
          display: inline-flex;

          .swiper-slide {
            width: 250px;

            .a_link {
              .shop_btn {
                display: none;
              }
            }

            .slide_info {
              margin-bottom: 20px;

              .new_title_one {
                font-size: 3.2vw;
                line-height: 4.2vw;
                margin-top: 10px;
              }
            }
          }
        }

        .swiper-pagination {
          width: calc(100% - 40px);
          left: auto;
          height: 2px;
        }
      }
    }

    .videos {
      margin-bottom: 20px !important;
      .title {
        text-align: center;
      }

      #myVideo {
        display: block;
      }
    }

    .bottom_swiper {
      .bottom_swiper_inner_m {
        .swiper-wrapper {
          display: flex;

          .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            color: #191817;

            .slide_area {
              position: static;
              width: 100%;
              padding: 40px 20px;
              background-color: rgba(248, 248, 248, 1);

              .desc_1 {
                // margin-bottom: 11px;
              }

              .slide_desc {
                font-family: Roboto;
                font-size: 12px;
                font-weight: 400;
                line-height: 14px;
                letter-spacing: 0px;
                text-align: center;
                &:last-child{
                  margin-top: 8px;
                }
              }

              .slide_title {
                text-align: center;
               margin-bottom: 8px;
              }
            }
          }
        }


      }
    }

    .y_shoes {
      display: flex;
      // justify-content: center;
      flex-wrap: wrap;
      position: relative;

      .y_inner {
        position: static;
        margin-top: 8px;

        .y_title {
          //styleName: App/Tittle1/16-Bold;
          font-family: Roboto;
          font-size: 16px;
          font-weight: 500;
          line-height: 19px;
          letter-spacing: 0px;
          text-align: left;

        }

        .y_desc {
          //styleName: App/Body 1/14-Regular;
          font-family: Roboto;
          font-size: 14px;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0px;
          text-align: left;
          margin: 0px 0 12px 0;

        }

        .y_btn {
          display: flex;

          .desc {
            padding: 10px 20px;
            display: flex;
            align-items: center;
            font-family: Roboto;
            font-size: 12px;
            font-weight: 500;
            line-height: 14px;
            letter-spacing: 0px;
            text-align: left;

            img {
              width: 14px;
              height: 14px;
              margin-right: 8px;
            }
          }
        }
      }
    }

    .bottom_icon {
      background: #ffffff;
      padding-bottom: 0;

      .items {
        width: 78.667vw;
        margin: 0 auto;
        flex-wrap: wrap;
        border: none;
        padding: 0px;

        .bottom_item {
          padding-bottom: 40px;
          // flex-wrap: nowrap;

          svg {
            width: 10.667vw;
            height: 10.667vw;
          }

          .title {
            font-family: Roboto;
            font-size: 4.267vw;
            font-weight: 400;
            line-height: 5.067vw;
            letter-spacing: 0px;
            text-align: center;
            margin-top: 8px;
            width: 100%;
          }

          .desc {
            font-family: Roboto;
            font-size: 3.733vw;
            font-weight: 400;
            line-height: 4.267vw;
            letter-spacing: 0px;
            text-align: center;

            margin: 2.133vw 5.333vw;
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

        .line {
          display: none;
        }
      }
    }
  }


}
</style>
