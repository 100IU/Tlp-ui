<template>
  <a :href=item.src
     class="the-a-po">
    <picture>
      <source :srcset=item.m_bpt
              media="(max-width: 768px)" />
      <img class="sp_img"
           alt="VIVAIA"
           :src=item.pc_bpt />
    </picture>
    <div class="the-fs14 the-top black_cl">{{item.text1}}</div>
    <div class="the-top">
      <span class="the-fs12 black_cl">{{item.text2}}</span>
      <span class="the-fs16 orange_cl">{{item.text3}}</span>
    </div>
    <div class="the-fs16 the-top">
      <span class="the-fs12 orange_cl">{{item.text4}}</span>
      <span class="the-fs16 black_cl">{{item.text5}}</span>
    </div>
    <div class="the-text-Body the-pt-button the-top2">{{item.shopnow}}</div>
    <div class="the-discount"
         v-show="item.Number">
      <source :srcset=item.m_ipt
              media="(max-width: 768px)" />
      <img class="sp_img"
           alt="VIVAIA"
           :src=item.pc_ipt />
      <span class="the-discount-text">{{item.number}}% OFF</span>
    </div>
  </a>
</template>

<script>
import { picturebanner } from '../content.json'
export default {
  name: 'picturebanner',
  data() {
    return { picturebanner }
  },
  props: ['item'],
}
</script>