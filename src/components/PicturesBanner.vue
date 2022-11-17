<template>
  <a :href=picdata.src
     class="the-a-po the-flex">
    <picture>
      <source :srcset=picdata.m_bpt
              media="(max-width: 768px)" />
      <img class="sp_img"
           alt="VIVAIA"
           :src=picdata.pc_bpt />
    </picture>
    <div class="the-fs14 the-top black_cl fwb  ">{{picdata.text1}}</div>
    <div class="the-top  ">
      <span class="the-fs12 black_cl">was <span class="text-line-through">{{picdata.text2}}</span></span>
      <span class="the-fs16 orange_cl the-ml">{{picdata.text3}}</span>
    </div>
    <div class="the-fs16 the-top  ">
      <span class="the-fs16 orange_cl ">{{picdata.text4}}</span>
      <span class="the-fs16 black_cl">{{picdata.text5}}</span>
    </div>
    <div class="the-text-Body the-pt-button the-top2 tc">{{picdata.shopnow}}</div>
    <div class="the-discount tc"
         v-show="picdata.number">
      <img class="sp_img disicon"
           alt="VIVAIA"
           :src=picdata.Disicon />
      <span class="the-discount-text the-fs16">-{{picdata.number}}%</span>
    </div>
  </a>
</template>

<script>
// import { picturebanner } from '../content.json'
export default {
  name: 'picturebanner',
  props: ['picdata', 'picdata1'],
}
</script>