<template>
  <div class="image">
    <Tlp-image style="width: 180px; height: 240px; display: inline-block" v-for="(item, i) in lazyImgs" :key="i"
      :src="item" lazy></Tlp-image>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lazyImgs: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ],
      codeList: [{ code: '<TlpImage   v-for="(item, i) in lazyImgs" :key="i" :src="item" lazy />' }]
    }
  }
}
</script>
<style scoped lang="less">
.image {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  height: 400px;
  width: 100%;
  /* overflow-y: auto; */
  overflow: auto;
  flex-wrap: wrap;
  padding: 20px;
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    width: 1px;
    height: 1px;
    border-radius: 10px;
    background-color: #f1f1f1;
  }
}

.Tlpimg {
  width: 100% !important;
  height: 400px !important;

}
</style>
