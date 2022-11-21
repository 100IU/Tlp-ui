<template>
  <div class="the-desc-item the-title-area the-topicon-flex">
    <div v-for="(item, index) in Topicon"
         :key="index"
         :style=item.theBackground>
      <a href="https://www.vivaia.com/category/sale-c_511.html?link_id=10412">
        <div class="the-icon-size the-pt the-pb">
          <img class="sp_img"
               alt="VIVAIA"
               :src=item.Ticon />
        </div>
      </a>
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