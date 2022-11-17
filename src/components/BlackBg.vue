<template>
  <div class="the-title-area the-pb">
    <picture>
      <source srcset=blackbg.m_bcsrc
              media="(max-width: 768px)" />
      <img class="sp_img"
           alt="VIVAIA"
           :src=blackbg.pc_bcsrc />
    </picture>
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