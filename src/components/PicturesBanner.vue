<template>
  <a :href=picdata.src
     class="the-a-po">
    <picture>
      <source :srcset=picdata.m_bpt
              media="(max-width: 768px)" />
      <img class="sp_img"
           alt="VIVAIA"
           :src=picdata.pc_bpt />
    </picture>
    <div class="the-fs14 the-top black_cl">{{picdata.text1}}</div>
    <div class="the-top">
      <span class="the-fs12 black_cl">{{picdata.text2}}</span>
      <span class="the-fs16 orange_cl">{{picdata.text3}}</span>
    </div>
    <div class="the-fs16 the-top">
      <span class="the-fs12 orange_cl">{{picdata.text4}}</span>
      <span class="the-fs16 black_cl">{{picdata.text5}}</span>
    </div>
    <div class="the-text-Body the-pt-button the-top2">{{picdata.shopnow}}</div>
    <div class="the-discount"
         v-show="picdata.Number">
      <source :srcset=picdata.m_ipt
              media="(max-width: 768px)" />
      <img class="sp_img"
           alt="VIVAIA"
           :src=picdata.pc_ipt />
      <span class="the-discount-text">{{picdata.number}}% OFF</span>
    </div>
  </a>
</template>

<script>
// import { picturebanner } from '../content.json'
export default {
  name: 'picturebanner',
  props: ['picdata'],
}
</script>