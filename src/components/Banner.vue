<template>
  <div class="the-back-top-banner the-banner-position">
    <div>
      <picture v-for="(item, idx) in Titlebig.Thebgimg"
               :key="idx">
        <source :srcset=item.m_pt
                media="(max-width: 768px)" />
        <img class="sp_img"
             alt="VIVAIA"
             :src=item.pc_pt />
      </picture>
    </div>
    <div class="the-title-content desc-title tc">
      <div>
        <div class="the-text-Body">{{Titlebig.Thebody}}</div>
        <div class="the-title-h1 the-text-desc-mb">{{Titlebig.Theh1}}</div>
        <div class="TopBox">
          <div class="the-box-h1">{{Titlebig.Boxtitle}}</div>
          <div class="the-box-flex">
            <div v-for="(item, index) in Titlebig.BoxContent"
                 :key="index"
                 class="the-small-box">
              <div class="the-btitle-po">
                <!-- <div class="the-hr"></div> -->
                <div class="the-btitle-ab the-btitle-h0 this-after-before"> {{item.contT}} </div>
              </div>
              <div class="the-content-h1">{{item.contC}}</div>
            </div>
          </div>
          <div class="the-box-body">{{Titlebig.Boxunder}}</div>
          <div class="the-title-button red-bg">With Code: <span @click="handleCopyCode">{{Titlebig.Boxbutton}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="the-title-footer the-text-body1 tc">{{Titlebig.Thefooter}}</div>
  </div>
</template>

<script>
import { Titlebig } from '../content.json'

export default {
  name: 'banner',
  data() {
    return {
      Titlebig,
    }
  },
  mountd() {},
  methods: {
    handleCopyCode(evt) {
      const val = evt.target.innerHTML
      var copyipt = document.createElement('input')
      copyipt.setAttribute('value', val)
      document.body.appendChild(copyipt)
      copyipt.select()
      document.execCommand('copy')
      document.body.removeChild(copyipt)
      alert('Copy Success')
    },
  },
}
</script>
<style>
</style>
