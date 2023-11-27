<template>
  <div class="fengniao-outer" id="go_to1">
    <div class="fengniao_margot-info" id="section1"> 
      <div class="inner">
      <div class="inner_title">Running Heels</div>
      <div class="inner-desc show_big">
        Run and dance all day and night in comfortable elegance.
      </div>
    </div>
      <picture>
        <source srcset="
        https://cdnimg.vivaia.com/VA/image/loadpage/20231120_6489/16.jpg
            " media="(max-width:768px)" />
        <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/loadpage/20231120_6489/7.jpg" alt="" />
      </picture>
     
    </div>
    <div class="fengniao-margot space-w">

      <goods_item :goods_data="goods_data" swiper_name="Melody" ref="child"></goods_item>
    </div>
  </div>
</template>

<script>
let str1 = `
10016520,
10011923,
10012726,
10011027,
10011907,
10016472,
10011091,
10012710
`
import Goods_item from './goods_item.vue';
export default {
  components:{
    Goods_item,
  },
  data () {
    return {
      goods_data:[]
    }
  },
  mounted () {
    this.getAllgoods()
  },
  methods:{
    async getAllgoods(){
     const res = await  window._fengniao_getGoods_list({
        goods_id:str1.replace(/\s/g,''),
        disable_goods_number:1,
        is_app:1
     })
    //  console.log(res)
     
     this.goods_data = res.result
     
     this.$nextTick(() => {
      this.$refs.child.initSwiper();
    
    });

    },
  }
}
</script>
<style scoped>
.fengniao_margot-info{
  display: flex;
  flex-direction: column;
 /* align-items: center; */
  justify-content: center;
}
.fengniao_margot-info .inner{
  position: absolute;
  color: #191817;
  /* right:8.333vw ; */
  left: 8.333vw;
}
.fengniao_margot-info .inner .inner_title{
  font-family: Noto Serif;
font-size: 1.667vw;
font-weight: 400;
line-height: 1.198vw;
letter-spacing: 0px;
/* text-align: right; */

}
.fengniao_margot-info .inner .inner-desc{
  font-family: Roboto;
font-size: 0.833vw;
font-weight: 400;
line-height:0.573vw;
letter-spacing: 0px;
/* text-align: right; */
text-align: center;
margin-top: 1.25vw;
}
@media screen and (max-width: 768px) {
  .fengniao_margot-info .inner{
  position: static;
  margin: 10.667vw 0 5.333vw;
  color: #FFFFFF;
  /* right:8.333vw ; */
}
.fengniao_margot-info .inner .inner_title{
  font-family: Noto Serif;
font-size: 5.333vw;
font-weight: 400;
line-height: 7.2vw;
letter-spacing: 0em;
text-align: center;
width: 64.667vw;
margin: 0 auto;
color: #191817;
}
}
</style>