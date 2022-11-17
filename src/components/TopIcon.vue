<template>
  <div class="the-desc-item the-title-area the-topicon-flex">
    <div v-for="item in Topicon"
         :key="index"
         :style=item.theBackground>
      <div class="the-icon-size the-pt the-pb">
        <img class="sp_img"
             alt="VIVAIA"
             :src=item.Ticon />
      </div>
      <div class="the-text-Body tc the-pb"
           v-html="item.text"></div>
    </div>
  </div>
</template>

<script>
import { Topicon } from '../content.json'
export default {
  name: 'topicon',
  data() {
    return { Topicon }
  },
}
</script>