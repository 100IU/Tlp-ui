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
        <div class="po_desc desc_1" style="font-family: Roboto; font-weight: 500">
          Let’s Turn a Comfy Step Into a Giant Leap
        </div>
        <div class="po_desc show_big">
          At VIVAIA, we believe there is no limit to what women can accomplish. Whether they want to be ballerinas, news anchors, chefs or doctors — anything is possible. <div style="height: 12px;"></div>
          In honor of Women’s History Month, we’ve partnered with 5 women from our community to highlight their unique experiences in different professions and to celebrate their success. <div style="height: 12px;"></div>
          Our new campaign In Her Shoes delves into the challenges these women have overcome and how they found support and empowerment through different avenues, including fashion and comfortable footwear.
        </div>
        <div class="po_desc show_small">
          At VIVAIA, we believe there is no limit to what women can accomplish. Whether they want to be ballerinas, news anchors, chefs or doctors — anything is possible.   
          <div style="height: 8px;"></div>
          In honor of Women’s History Month, we’ve partnered with 5 women from our community to highlight their unique experiences in different professions and to celebrate their success. 
          <div style="height: 8px;"></div>
          Our new campaign In Her Shoes delves into the challenges these women have overcome and how they found support and empowerment through different avenues, including fashion and comfortable footwear.
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
              <p class="new_title_one" :class="item.goods_sn === '1' ? 'new_weight' : ''">
                {{ item.goods_name }}
              </p>

              <p class="new_title_one" v-if="item.pc_shop_price_converted !== item.old_shop_price_converted
                ">
                <span style="margin-right: 4px">{{
                  item.pc_shop_price_converted
                }}</span>
                <span style="text-decoration: line-through;font-weight: 400;">{{ item.old_shop_price_converted }} </span>
              </p>
              <p v-else class="new_title_one">
                <span>{{ item.pc_shop_price_converted }}</span>
              </p>
            </div>
          </div>

        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
   
    <div class="videos space-w">
      <div class="common_title title">
        Watch as these five women walk you through their individual journeys
        <br class="show_big" />
        and explain how VIVAIA has played an important role in their lives.
      </div>

    
     
      <div class="show_big">
        <video id="myVideo" autoplay="autoplay" loop="loop" muted="" controls="controls" width="100%"
        playsinline="true" webkit-playsinline="true">
        <source src="https://cdnimg.vivaia.com/CO/video/Banner/20240125_6604/teaser_16x9_final.mp4" type="video/mp4" />
      </video>
      </div>
      <div class="show_small">
        <video id="myVideo"  autoplay="autoplay" loop="loop" muted="" controls="controls" width="100%"
        playsinline="true" webkit-playsinline="true">
        <source src="https://cdnimg.vivaia.com/CO/video/Banner/20240125_6604/teaser_9x16_final.mp4" type="video/mp4" />
      </video>
      </div>
    </div>
    <div class="bottom_swiper space-w" style="position: relative;">
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
      <div class="bottom_swiper_inner show_big" style="overflow: hidden; position: relative">
        
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <picture>
              <source srcset="
              https://cdnimg.vivaia.com/VA/image/Banner/20240227_6656/Rectangle%202338.jpg
                " media="(max-width:768px)" />
              <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20240227_6655/Group-337602_hn1.jpg"
                alt="" />
            </picture>

            <div class="slide_area">
              <div class="slide_desc desc_1">Ballerina </div>
              <div class="common_title slide_title">Luna Montana</div>
              <div class="slide_desc">
                Luna Montana is a 23 year old classically trained ballerina and content creator from Los Angeles, CA.  She is known across social media for her endearing personality, eye for fashion, and her love for ballet. She has amassed nearly 2 million followers across all of her platforms.
              </div>
              <div class="slide_desc">Instagram: @lunamontana</div>
            </div>
          </div>
          <div class="swiper-slide">
            <picture>
              <source srcset="
              https://cdnimg.vivaia.com/VA/image/Banner/20240227_6656/Rectangle%202326_0kk.jpg
                " media="(max-width:768px)" />
              <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20240227_6655/Rectangle-2324.jpg"
                alt="" />
            </picture>

            <div class="slide_area">
              <div class="slide_desc desc_1">News Anchor</div>
              <div class="common_title slide_title">Sara Lee Kessler</div>
              <div class="slide_desc">
                Sara Lee Kessler is a veteran TV and radio news anchor and reporter with more than 40 years of experience and name recognition in the New York market. 
                <div style="height: 12px;"></div>
She is a three-time Emmy Award winner for anchoring WWOR-TV's coverage of the 1993 World Trade Center bombing, which was carried nationally on CNN, and hosting and writing documentaries on autism and bone marrow donation that aired on PBS. 
<div style="height: 12px;"></div>
Sara Lee says her favorite assignment was covering the late John Lennon's 1976 immigration hearing in which he was given a green card and he yelled out, "right on, brother" as she did her TV news standup for WCBS, a historic moment immortalized in the 2009 film, U.S. v Lennon.  Sara Lee Kessler has been with iHeart Radio since 2013 and can be heard in New York on 710 WOR and nationwide on NBC News Radio stations.
              </div>
              <div class="slide_desc">Instagram: @saraleekesslerofficial</div>
            </div>
          </div>
          <div class="swiper-slide">
            <picture>
              <source srcset="
              https://cdnimg.vivaia.com/VA/image/Banner/20240227_6656/Rectangle%202326-1.jpg
                " media="(max-width:768px)" />
              <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20240227_6655/Group-337599_acc.jpg"
                alt="" />
            </picture>

            <div class="slide_area">
              <div class="slide_desc desc_1">Surgeon</div>
              <div class="common_title slide_title">Heena Santry </div>
              <div class="slide_desc">
                Heena is an acute care surgeon, health services researcher, healthcare design consultant, and advocate for diversity, equity, and inclusion in the healthcare professions. Married for nearly 25 years, Heena has two children ages 20 and 16 and a pair of sweet lap dogs. 
                <div style="height: 12px;"></div>
                Heena loves bringing together friends, neighbors, and colleagues and considers throwing parties one of her main hobbies. In addition, she loves being a foodie, doing jigsaw puzzles and reading to relax when she can, and making sure she gets in a run or Orangetheory workout whenever she is not on call at the hospital.
              </div>
              <!-- <div class="slide_desc">Instagram: @saraleekesslerofficial</div> -->
            </div>
          </div>
          <div class="swiper-slide">
            <picture>
              <source srcset="
              https://cdnimg.vivaia.com/VA/image/Banner/20240227_6656/Rectangle%202336.jpg
                " media="(max-width:768px)" />
              <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20240227_6655/Group-337601_hu5.jpg"
                alt="" />
            </picture>

            <div class="slide_area">
              <div class="slide_desc desc_1">Ballerina</div>
              <div class="common_title slide_title">Alicia Mae Holloway</div>
              <div class="slide_desc">
                Alicia Mae Holloway is from Morgantown, West Virginia and began dancing when she was three years old at Kat and Company Dance Studio. She has trained at Central Pennsylvania Youth Ballet and the University of North Carolina School of the Arts before attending the School of American Ballet from 2011-2015.
                <div style="height: 12px;"></div>
                 From there, she began her professional career dancing with the Suzanne Farrell Ballet, and completed seven seasons with the Dance Theatre of Harlem where she worked with Alicia Keys, Aretha Franklin, and Gladys Knight. Recently, she served as a co-chairwoman of the School of American Ballet’s Visiting Faculty program for two years and is currently the principal role of ‘Lena’ in Josh Bergasse’s Sugarhill: The Ellington/Strayhorn Nutcracker.
              </div>
              <div class="slide_desc">Instagram: @aliciamaeholloway_</div>
            </div>
          </div>
          <div class="swiper-slide">
            <picture>
              <source srcset="
              https://cdnimg.vivaia.com/VA/image/Banner/20240227_6656/Rectangle%202334.jpg
                " media="(max-width:768px)" />
              <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20240227_6655/Group-337600_zwk.jpg"
                alt="" />
            </picture>

            <div class="slide_area">
              <div class="slide_desc desc_1">Aspiring Chef</div>
              <div class="common_title slide_title">Gwyneth Yuma</div>
              <div class="slide_desc">
                Aspiring Chef and Content Creator, Gwyneth, sees cooking as a bridge to her Okinawan-Japanese roots, while also igniting curiosity in others to venture into new culinary realms. Beyond the kitchen, she documents her experiences as a young Asian-American woman navigating life in her twenties through travel videos, daily vlogs, and creative endeavors. With plans to enroll in culinary school this summer, Gwyneth aims to hone her skills and fulfill her dream of becoming a seasoned culinary professional.
              </div>
              <div class="slide_desc">Instagram: @gwynethyuma</div>
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
              https://cdnimg.vivaia.com/VA/image/Banner/20240227_6656/Rectangle%202338.jpg
                " media="(max-width:768px)" />
              <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20240227_6655/Group-337602_hn1.jpg"
                alt="" />
            </picture>

            <div class="slide_area">
              <div class="slide_desc desc_1">Ballerina </div>
              <div class="common_title slide_title">Luna Montana</div>
              <div class="slide_desc">
                Luna Montana is a 23 year old classically trained ballerina and content creator from Los Angeles, CA.  She is known across social media for her endearing personality, eye for fashion, and her love for ballet. She has amassed nearly 2 million followers across all of her platforms.
              </div>
              <div class="slide_desc">Instagram: @lunamontana</div>
            </div>
          </div>
          <div class="swiper-slide">
            <picture>
              <source srcset="
              https://cdnimg.vivaia.com/VA/image/Banner/20240227_6656/Rectangle%202326_0kk.jpg
                " media="(max-width:768px)" />
              <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20240227_6655/Rectangle-2324.jpg"
                alt="" />
            </picture>

            <div class="slide_area">
              <div class="slide_desc desc_1">News Anchor</div>
              <div class="common_title slide_title">Sara Lee Kessler</div>
              <div class="slide_desc">
                Sara Lee Kessler is a veteran TV and radio news anchor and reporter with more than 40 years of experience and name recognition in the New York market. 
She is a three-time Emmy Award winner for anchoring WWOR-TV's coverage of the 1993 World Trade Center bombing, which was carried nationally on CNN, and hosting and writing documentaries on autism and bone marrow donation that aired on PBS.  
Sara Lee says her favorite assignment was covering the late John Lennon's 1976 immigration hearing in which he was given a green card and he yelled out, "right on, brother" as she did her TV news standup for WCBS, a historic moment immortalized in the 2009 film, U.S. v Lennon.  Sara Lee Kessler has been with iHeart Radio since 2013 and can be heard in New York on 710 WOR and nationwide on NBC News Radio stations.
              </div>
              <div class="slide_desc">Instagram: @saraleekesslerofficial</div>
            </div>
          </div>
          <div class="swiper-slide">
            <picture>
              <source srcset="
              https://cdnimg.vivaia.com/VA/image/Banner/20240227_6656/Rectangle%202326-1.jpg
                " media="(max-width:768px)" />
              <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20240227_6655/Group-337599_acc.jpg"
                alt="" />
            </picture>

            <div class="slide_area">
              <div class="slide_desc desc_1">Surgeon</div>
              <div class="common_title slide_title">Heena Santry </div>
              <div class="slide_desc">
                Heena is an acute care surgeon, health services researcher, healthcare design consultant, and advocate for diversity, equity, and inclusion in the healthcare professions. Married for nearly 25 years, Heena has two children ages 20 and 16 and a pair of sweet lap dogs.
                <div style="height: 8px;"></div>
                Heena loves bringing together friends, neighbors, and colleagues and considers throwing parties one of her main hobbies. In addition, she loves being a foodie, doing jigsaw puzzles and reading to relax when she can, and making sure she gets in a run or Orangetheory workout whenever she is not on call at the hospital.
              </div>
              <!-- <div class="slide_desc">Instagram: @saraleekesslerofficial</div> -->
            </div>
          </div>
          <div class="swiper-slide">
            <picture>
              <source srcset="
              https://cdnimg.vivaia.com/VA/image/Banner/20240227_6656/Rectangle%202336.jpg
                " media="(max-width:768px)" />
              <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20240227_6655/Group-337601_hu5.jpg"
                alt="" />
            </picture>

            <div class="slide_area">
              <div class="slide_desc desc_1">Ballerina</div>
              <div class="common_title slide_title">Alicia Mae Holloway</div>
              <div class="slide_desc">
                Alicia Mae Holloway is from Morgantown, West Virginia and began dancing when she was three years old at Kat and Company Dance Studio. She has trained at Central Pennsylvania Youth Ballet and the University of North Carolina School of the Arts before attending the School of American Ballet from 2011-2015.
                <div style="height: 8px;"></div>
                 From there, she began her professional career dancing with the Suzanne Farrell Ballet, and completed seven seasons with the Dance Theatre of Harlem where she worked with Alicia Keys, Aretha Franklin, and Gladys Knight. Recently, she served as a co-chairwoman of the School of American Ballet’s Visiting Faculty program for two years and is currently the principal role of ‘Lena’ in Josh Bergasse’s Sugarhill: The Ellington/Strayhorn Nutcracker.
              </div>
              <div class="slide_desc">Instagram: @aliciamaeholloway_</div>
            </div>
          </div>
          <div class="swiper-slide">
            <picture>
              <source srcset="
              https://cdnimg.vivaia.com/VA/image/Banner/20240227_6656/Rectangle%202334.jpg
                " media="(max-width:768px)" />
              <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20240227_6655/Group-337600_zwk.jpg"
                alt="" />
            </picture>

            <div class="slide_area">
              <div class="slide_desc desc_1">Aspiring Chef</div>
              <div class="common_title slide_title">Gwyneth Yuma</div>
              <div class="slide_desc">
                Aspiring Chef and Content Creator, Gwyneth, sees cooking as a bridge to her Okinawan-Japanese roots, while also igniting curiosity in others to venture into new culinary realms. Beyond the kitchen, she documents her experiences as a young Asian-American woman navigating life in her twenties through travel videos, daily vlogs, and creative endeavors. With plans to enroll in culinary school this summer, Gwyneth aims to hone her skills and fulfill her dream of becoming a seasoned culinary professional.
              </div>
              <div class="slide_desc">Instagram: @gwynethyuma</div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="common_title space-w">In Your Shoes</div>
    <div class="y_shoes space-w">
      <picture>
        <source srcset="
        https://cdnimg.vivaia.com/VA/image/Banner/20240227_6656/review-m-1_68p.jpg
          " media="(max-width:768px)" />
        <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/Banner/20240227_6655/Untitled-1%201_fuu.jpg" alt="" />
      </picture>
      <div class="y_inner">
        <div class="y_title">What's your story?</div>
        <div class="y_desc">
          Between February 29 to March 14, visit our Instagram account and share
          what empowers you for a chance to win a pair of VIVAIA flats.
        </div>
        <a href="https://www.instagram.com/p/C37zeIxrkbJ" class="y_btn">
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
let str = '10019821,10012470,10019159,10003434,10003114,10019721,10020205,10020069,10020051,10019907,10020155,10019705';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';

export default {
  data () {
    return {
      goods_data: [],
     
    };
  },

  mounted () {
   this.getAllgoods();
    new Swiper('.bottom_swiper_inner', {
      slidesPerView: 'auto',
      autoplay:{
        delay:8000
      },
      // loop: true,
      pagination: {
        el: ' .swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
          nextEl: '.bottom_swiper .swiper-button-next',
          prevEl: '.bottom_swiper .swiper-button-prev',
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




  },
  methods: {
    async getAllgoods () {
      const res = await window._fengniao_getGoods_list({
        goods_id: str.replace(/\s/g, ''),
        disable_goods_number: 1,
      });

      let newArr = res.result.map(obj => {
        // 使用对象解构赋值创建新对象，并添加新属性
        return { ...obj, type: 'flat' }; // 这里的 0 是新属性的初始值，你可以根据需要修改
      });
      this.goods_data = newArr

      console.log(this.goods_data);
      this.$nextTick(() => {
        this.initSwiper()
      })
    },
    initSwiper () {
      new Swiper('.recommen_swiper_inner', {
        // autoplay:true,
        // loop: true,
        breakpoints: {
          310: {
            spaceBetween: 10,
            slidesPerView: 1.2,
          },
          1024: {

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
    }
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
  top: 22.917vw;
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
  top: 111.467vw !important;
  bottom: auto !important;
}
</style>
<style lang="less">
.women_day {
  padding: 0 0 4.167vw;
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
    width: calc(100% - 16.667vw);
    margin: 0 auto 4.167vw;
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
    top: -3.906vw;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #191817;
    background: #fcfbfb;
    margin-bottom: 0;

    // border: 1px solid rgba(0, 0, 0, 1);
    .po_text-area {
      padding: 3.906vw 22.135vw;

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
            margin-bottom: 2.083vw;

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
    margin-bottom: 1.667vw;
    .title {
      text-align: center;
    }

    #myVideo {
    display: block;
  }
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
            left: 9.896vw;

            .desc_1 {
              margin-bottom: 0.573vw;
            }

            .slide_desc {
              font-family: Roboto;
              font-size: 18px;
              font-weight: 400;
              line-height: 22px;
              letter-spacing: 0px;
              text-align: center;

              &:last-child {
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
        bottom: 2.083vw;
        width: 300px;
        margin: 0 auto;
        left: 33.646vw;
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
      top: 8.229vw;
      right: 11.458vw;
      width: 23.958vw;

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
      
      margin: 0 15.885vw 0 14.01vw;
    
      // margin: 0 auto 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #ffffff;
   

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
        height: 45px;
        margin-left:25px ;
        background: rgba(217, 217, 217, 1);
        // background: #eeeeee;
      }
    }
  }
}

@media screen and (min-width: 1024px) and (max-width: 1440px) {
  .women_day {
    padding: 0 0 4.167vw;
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
      width: calc(100% - 16.667vw);
      margin: 0 auto 4.167vw;
    }

    .common_title {
      font-family: Noto Serif;
      font-size: 24.005px;
      font-weight: 400;
      line-height: 33.005px;
      letter-spacing: 0px;
      text-align: left;
      margin-bottom: 24.005px;
    }

    .top_banner {}

    .po_box {
      position: relative;
      top: -3.906vw;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #191817;
      background: #fcfbfb;
margin-bottom: 0;
      // border: 1px solid rgba(0, 0, 0, 1);
      .po_text-area {
        padding: 3.906vw 22.135vw;

        .po_title {
          font-family: Noto Serif;
          font-size: 36px;
          font-weight: 400;
          line-height: 48.744px;
          letter-spacing: 0px;
          text-align: center;
        }

        .po_desc {
          font-family: Noto Serif;

          font-size: 15.005px;
          line-height: 20.246px;
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
                background: #191817;
              }

              .shop_btn {
                bottom: 10px;
                width: 91.6%;
                opacity: 0;
                margin: 0 auto;
                background: #fff;
                color: #191817;
                padding: 9px 0;
                font-family: Roboto;
                font-size: 12px;
                font-weight: 500;
                line-height: 1;
                letter-spacing: 0;
                text-align: center;
              }
            }

            .slide_info {
              margin-bottom: 29.995px;

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
                font-size: 12px;
                font-weight: 400;
                line-height: 14px;
                letter-spacing: 0;
                text-align: left;
                margin-top: 9px;
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
      margin-bottom: 1.667vw;
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
              width: 25.625vw;
              left: 9.896vw;

              .desc_1 {
                // margin-bottom: 11px;
              }

              .slide_desc {
                font-family: Roboto;
                font-size: 1.111vw;
                font-weight: 400;
                line-height: 1.319vw;
                letter-spacing: 0px;
                text-align: center;

                &:last-child {
                  margin-top: 15.005px;
                }
              }

              .slide_title {
                text-align: center;
                margin-bottom: 15.005px;
              }
            }
          }
        }

        .swiper-pagination {
          top: auto;
          bottom: 2.083vw;
          width: 20.833vw;
          margin: 0 auto;
          left: 33.646vw;
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
        top: 8.229vw;
        right: 11.458vw;
        width: 23.958vw;

        .y_title {
          font-family: Roboto;
          font-size: 15.005px;
          font-weight: 500;
          line-height: 17.251px;
          letter-spacing: 0px;
          text-align: left;
        }

        .y_desc {
          font-family: Roboto;
          font-size: 12px;
          font-weight: 400;
          line-height: 14px;
          letter-spacing: 0px;
          text-align: left;
          margin: 0.417vw 0 1.25vw 0;
        }

        .y_btn {
          display: flex;
          align-items: center;

          .desc {
            padding: 0.833vw 2.083vw;
            background-color: #191817;
            display: flex;
            align-items: center;
            color: #fff;
            font-family: Roboto;
            font-size: 14px;
            font-weight: 400;
            line-height: 17px;
            letter-spacing: 0px;
            text-align: left;

            img {
              width: 20.246px;
              height: 20.246px;
              margin-right: 6.005px;
            }
          }
        }
      }
    }

    .bottom_icon {
      background: #ffffff;
      
      .items {
        margin: 0 8.333vw;

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

          svg {
            width: 3.385vw;
            height: 3.385vw;
          }

          .title {
            font-family: Roboto;
            font-size: 14px;
            font-weight: 400;
            line-height: 17px;
            letter-spacing: 0px;
            text-align: center;
            margin-left: 6px;
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
          height: 30px;
          background: rgba(217, 217, 217, 1);
          // background: #eeeeee;
        }
      }
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .women_day {
    padding: 0 0 4.167vw;
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
      width: calc(100% - 16.667vw);
      margin: 0 auto 4.167vw;
    }

    .common_title {
      font-family: Noto Serif;
      font-size: 2.222vw;
      font-weight: 400;
      line-height: 3.056vw;
      letter-spacing: 0px;
      text-align: left;
      margin-bottom: 2.222vw;
    }

    .top_banner {}

    .po_box {
      position: relative;
      top: -3.906vw;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #191817;
      background: #fcfbfb;
    margin-bottom: 0;
      // border: 1px solid rgba(0, 0, 0, 1);
      .po_text-area {
        padding: 3.906vw 22.135vw;

        .po_title {
          font-family: Noto Serif;
          font-size: 3.333vw;
          font-weight: 400;
          line-height: 4.514vw;
          letter-spacing: 0px;
          text-align: center;
        }

        .po_desc {
          font-family: Noto Serif;

          font-size: 1.389vw;
          line-height: 1.875vw;
          letter-spacing: 0px;
          text-align: center;
        }

        .desc_1 {
          line-height: 1;
          margin-bottom: 1.528vw;
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
                font-size: 1.111vw;
                font-weight: 500;
                line-height: 1;
                letter-spacing: 0;
                text-align: center;
              }
            }

            .slide_info {
              margin-bottom: 2.083vw;

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
                font-size: 0.972vw;
                font-weight: 400;
                line-height: 1.111vw;
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
      margin-bottom: 1.667vw;
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
              width: 25.625vw;
              left: 9.896vw;

              .desc_1 {
                // margin-bottom: 11px;
              }

              .slide_desc {
                font-family: Roboto;
                font-size: 1.111vw;
                font-weight: 400;
                line-height: 1.319vw;
                letter-spacing: 0px;
                text-align: center;

                &:last-child {
                  margin-top: 1.389vw;
                }
              }

              .slide_title {
                text-align: center;
                margin-bottom: 1.389vw;
              }
            }
          }
        }

        .swiper-pagination {
          top: auto;
          bottom: 2.083vw;
          width: 20.833vw;
          margin: 0 auto;
          left: 33.646vw;
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
        top: 8.229vw;
        right: 11.458vw;
        width: 23.958vw;

        .y_title {
          font-family: Roboto;
          font-size: 1.389vw;
          font-weight: 500;
          line-height: 1.597vw;
          letter-spacing: 0px;
          text-align: left;
        }

        .y_desc {
          font-family: Roboto;
          font-size: 0.972vw;
          font-weight: 400;
          line-height: 1.111vw;
          letter-spacing: 0px;
          text-align: left;
          margin: 0.556vw 0 1.667vw 0;
        }

        .y_btn {
          display: flex;
          align-items: center;

          .desc {
            padding: 1.111vw 2.778vw;
            background-color: #191817;
            display: flex;
            align-items: center;
            color: #fff;
            font-family: Roboto;
            font-size: 1.111vw;
            font-weight: 400;
            line-height: 1.319vw;
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

          svg {
            width: 3.385vw;
            height: 3.385vw;
          }

          .title {
            font-family: Roboto;
            font-size: 1.111vw;
            font-weight: 400;
            line-height: 1.302vw;
            letter-spacing: 0px;
            text-align: center;
            margin-left: 0.694vw;
          }

          .desc {
            font-family: Roboto;
            font-size: 0.972vw;
            font-weight: 400;
            line-height: 1.111vw;
            letter-spacing: 0px;
            text-align: center;
            color: rgba(102, 102, 102, 1);
            margin: 0.417vw 0 1.823vw;
            padding: 0 4.167vw;
            box-sizing: border-box;
          }

          a {
            font-family: Roboto;
            font-size: 1.111vw;
            font-weight: 400;
            line-height: 1.319vw;
            letter-spacing: 0px;
            text-align: center;
            color: #191817;
          }
        }

        .line {
          width: 1px;
          height: 4.444vw;
          background: #eeeeee;
        }
      }
    }
  }
}

@media screen and(max-width: 768px) {
  .women_day {
    padding: 0 0 10.667vw;

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
      width: calc(100% - 10.667vw);
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

    .top_banner {}

    .po_box {
      position: relative;
      top: -10.667vw;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #191817;
      background: #fcfbfb;
      margin-bottom: 0 !important;

      .po_text-area {
        padding: 10.667vw 5.333vw;

        .po_title {
          font-size: 6.933vw;
          font-weight: 400;
          line-height: 9.333vw;
          letter-spacing: 0px;
          text-align: center;
        }

        .po_desc {
          font-family: Noto Serif;
          font-size: 3.733vw;
          font-weight: 400;
          line-height: 5.067vw;
          letter-spacing: 0px;
          text-align: center;
        }

        .desc_1 {
          line-height: 1;
          margin-bottom: 3.2vw;
        }
      }
    }

    .recommen_swiper {
      width: 100% !important;

      .recommen_swiper_inner {
        padding: 0 5.333vw;
        box-sizing: border-box;

        .swiper-wrapper {
          display: inline-flex;

          .swiper-slide {
            width: 66.667vw;

            .a_link {
              .shop_btn {
                display: none;
              }
            }

            .slide_info {
              margin-bottom: 5.333vw;

              .new_title_one {
                font-size: 3.2vw;
                line-height: 4.2vw;
                margin-top: 10px;
              }
            }
          }
        }

        .swiper-pagination {
          width: calc(100% - 10.667vw);
          left: auto;
          height: 2px;
        }
      }
    }

    .videos {
      margin-bottom: 5.333vw !important;

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
              padding: 10.667vw 5.333vw 0 5.333vw;
              height: 105.6vw;
              background-color: rgba(248, 248, 248, 1);

              .desc_1 {
                margin-bottom: 7px;
              }

              .slide_desc {
                font-family: Roboto;
                font-size: 3.2vw;
                font-weight: 400;
                line-height: 3.733vw;
                letter-spacing: 0px;
                text-align: center;

                &:last-child {
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
        width: auto;

        .y_title {
          //styleName: App/Tittle1/16-Bold;
          font-family: Roboto;
          font-size: 4.267vw;
          font-weight: 500;
          line-height: 5.067vw;
          letter-spacing: 0px;
          text-align: left;
          margin-bottom: 1.067vw;
        }

        .y_desc {
          //styleName: App/Body 1/14-Regular;
          font-family: Roboto;
          font-size: 3.733vw;
          font-weight: 400;
          line-height: 4.267vw;
          letter-spacing: 0px;
          text-align: left;
          margin: 0px 0 3.2vw 0;
        }

        .y_btn {
          display: flex;

          .desc {
            padding: 2.667vw 5.333vw;
            display: flex;
            align-items: center;
            font-family: Roboto;
            font-size: 3.2vw;
            font-weight: 500;
            line-height: 3.733vw;
            letter-spacing: 0px;
            text-align: left;

            img {
              width: 3.733vw;
              height: 3.733vw;
              margin-right: 2.133vw;
            }
          }
        }
      }
    }

    .bottom_icon {
      

      padding: 10.667vw 0 0 ;
      background: rgba(248, 248, 248, 1);
      .items {
        width: 78.667vw;
        background: rgba(248, 248, 248, 1);
        margin: 0 auto;
        flex-wrap: wrap;
        border: none;
        padding: 0px;

        .bottom_item {
          padding-bottom: 10.667vw;
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
