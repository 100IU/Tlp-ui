<template>
  <div class="the-desc-item-banner the-vmbutton vmtext">
    <a class=" tc"
       :href=viewmore.vmsrc>{{bannerTitle.ViewMore}}</a>
  </div>
</template>
<script>
export default {
  props: ['viewmore', 'bannerTitle'],
  mounted() {
    console.log('this.viewmore :>> ', this.viewmore)
  },
}
</script>