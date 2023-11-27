<template>
  <div class="fengniao-outer" id="go_to1">
    <div class="fengniao_margot-info" id="section1" style="position: relative;">
      <div class="inner">
      <div class="inner_title">Timeless Classics Built with Comfort</div>
      <div class="inner-desc show_big">
        Elegant styles with knit-made and AdaptAll™ Strap detailing.
      </div>
    </div>
      <picture>
        <source srcset="
        https://cdnimg.vivaia.com/VA/image/loadpage/20231120_6489/14.jpg
            " media="(max-width:768px)" />
        <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/loadpage/20231120_6489/4.jpg" alt="" />
      </picture>
   
   
    </div>
    <div class="fengniao-margot space-w">

      <goods_item :goods_data="goods_data" :tabs_item="tabs_item" swiper_name="Prime" ref="child" @show="show"></goods_item>
    </div>
  </div>
</template>

<script>
let str1 = `
10009326,
10002950,
10003530,
10002966,
10015433,
10015417,
10014003,
10011411,
10012694,
10003014,
10003482,
10003418,
10003434,
10000346,
10001046,
10014371,
10013043,
10013011,
10013107,
10013059,
10013075,
10013027,
10013091,
10002135,
10014967,
10016312,
10011331,
10011715,
10011699,
10010883,
10011299,
`



import Goods_item from './goods_item.vue';
export default {
  components:{
    Goods_item,
  },
  data () {
    return {
      goods_data:[],
      Allgoods:[],
      screenWidth: window.innerWidth,
      tabs_item:[ 
      {tab_name:'Square Toe'},
      {tab_name:'5° Wider Pointed Toe'},
      {tab_name:'Round Toe'},
      {tab_name:'Almond Toe'}
    ], 
    tabs_item_one:[ 
      {tab_name:'Square'},
      {tab_name:'Pointed'},
      {tab_name:'Round'},
      {tab_name:'Almond'}
    ]
    }
  },
  created () {
    
  //   if(window.innerWidth<768){
    
  //   this.tabs_item = this.tabs_item_one
  //  }
  this.getAllgoods()
  this.handleResize()
  if(this.screenWidth<768){
         
         this.tabs_item = this.tabs_item_one
        }
   
  },
 
  watch: {
    width(newWidth) {
    
  this.handleResize()
   
    if(newWidth<768){
   
    
    this.tabs_item = this.tabs_item_one
   }
  },
  immediate: true
},
  methods:{
    handleResize(){
      window.addEventListener('resize', function() {
        
        if(this.screenWidth<768){
         
    this.tabs_item = this.tabs_item_one
   }
});
    },
    async getAllgoods(){
     const res = await  window._fengniao_getGoods_list({
        goods_id:str1.replace(/\s/g,''),
        disable_goods_number:1
     })
     this.Allgoods = [res.result.slice(0, 8), res.result.slice(8, 16), res.result.slice(16,23), res.result.slice(23,31)]
      this.goods_data = this.Allgoods[0]
     
    
     this.goods_data = this.Allgoods[0]
    
     this.$nextTick(() => {
      this.$refs.child.initSwiper();
    
    });

    },
    show (index) {
     
      
      this.goods_data = this.Allgoods[index]
    },
  }
}
</script>
<style scoped>
.fengniao_margot-info{
  display: flex;
  flex-direction: column;
 
  justify-content: center;
}
.fengniao_margot-info .inner{
  position: absolute;
  color: #FFFFFF;
  right:8.333vw ;
}
.fengniao_margot-info .inner .inner_title{
  font-family: Noto Serif;
font-size: 1.667vw;
font-weight: 400;
line-height: 1.198vw;
letter-spacing: 0px;
text-align: right;

}
.fengniao_margot-info .inner .inner-desc{
  font-family: Roboto;
font-size: 0.833vw;
font-weight: 400;
line-height:0.573vw;
letter-spacing: 0px;
text-align: right;
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

