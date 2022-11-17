<template>
  <div class="the-title-area the-pb the-black-po">
    <picture>
      <source :srcset=blackbg.m_bcsrc
              media="(max-width: 768px)" />
      <img class="sp_img"
           alt="VIVAIA"
           :src=blackbg.pc_bcsrc />
    </picture>
    <div class="the-black-ab pc-vi">
      <div class="the-mr-br">
        <div class="the-blt-h1">Get The Best Deal Of <br>The Year!</div>
        <div class="the-fs12">With Code: BFCM2022</div>
      </div>
      <div class="the-ml-br">
        <div class="the-bl-h1">Buy 1 item, from＄56/piece</div>
        <div class="the-bl-h2">Buy 2 items, from＄52/piece </div>
        <div class="the-bl-h3">Buy 3 items, from＄49/piece</div>
      </div>
    </div>
    <div class="the-black-ab m-vi tc">
      <div class="the-btitle-h0">Get The Best Deal Of The Year!</div>
      <div class="the-mt-mb">
        <div class="the-bl-h1">Buy 1 item, from＄56/piece</div>
        <div class="the-bl-h2">Buy 2 items, from＄52/piece </div>
        <div class="the-bl-h3">Buy 3 items, from＄49/piece</div>
      </div>
      <div class="the-box-body">With Code: BFCM2022</div>
    </div>
  </div>
</template>
<script>
import { blackbg } from '../content.json'
export default {
  name: 'blackbg',
  data() {
    return {
      blackbg,
    }
  },
}
</script>