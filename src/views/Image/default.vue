<template>
  <div class="image">
    <TlpImage style="width: 180px; height: 240px; display: inline-block" :src="url" :preview-src="lazyImgs"></TlpImage>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      lazyImgs:
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      codeList: [{ code: '<TlpImage  :src="url" :preview-src="lazyImgs" />' }]
    }
  }
}
</script>
<style scoped>
.image {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  width: 100%;
  padding: 20px;

}

.Tlpimg {
  height: 100px !important;
}
</style>
