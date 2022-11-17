<template>
  <div class="the-back-top-banner the-banner-position">
    <div>
      <picture v-for="item in Titlebig.Thebgimg">
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
            <div v-for="item in Titlebig.BoxContent"
                 :key="index"
                 class="the-small-box">
              <div class="the-btitle-po">
                <div class="the-hr"></div>
                <div class="the-btitle-ab the-btitle-h0">{{item.contT}}</div>
              </div>
              <div class="the-content-h1">{{item.contC}}</div>
            </div>
          </div>
          <div class="the-box-body">{{Titlebig.Boxunder}}</div>
          <a href="链接"
             target="_blank"
             class="the-title-button red-bg">{{Titlebig.Boxbutton}}
          </a>
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
  // mounted() {
  //   console.log('this.Titlebig :>> ', this.Titlebig)
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
