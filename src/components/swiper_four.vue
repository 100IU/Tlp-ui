<template>
  <div class="fengniao-outer common_walker">
    <div class="last_title">
      More Styles
    </div>
    <goods_item_one :goods_data="goods_data" swiper_name="Ryan Boots"  :tabs_item="tabs_item" @show="show" v-if="width>768" ></goods_item_one>
      <goods_item :goods_data="goods_data" swiper_name="Ryan Boots" ref="child" :tabs_item="tabs_item1" @show="show" :show="false" v-else></goods_item>
  </div>
</template>

<script>
let str1 = `
10003770,
10003588,
10016829,
10016861,
10003596,
10009518,
10016797,
10016845,
10016504,
10016520,
10011907,
10011923,
10011059,
10011091,
10010778,
10010794,
10011155,
10011123,
10012678,
10012662,
10012398,
10012414,
10013171,
10013203,
`
import goods_item_one from './goods_item_one.vue';
import goods_item from './goods_item.vue';
export default {
  components:{
    goods_item_one,
    goods_item
  },
  data () {
    return {
      all_goods:[],
     goods_data:[],
     width:window.innerWidth,
      tabs_item:[ 
      {tab_name:'Fun-Filled Loafers'},
      {tab_name:'Running Heels'},
      {tab_name:'Sandals'}
     
    ],
    tabs_item1:[ 
      {tab_name:'Loafers'},
      {tab_name:'Heels'},
      {tab_name:'Sandals'}
     
    ],
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
    
     
     this.all_goods = [res.result.slice(0,8),res.result.slice(8,16),res.result.slice(16,24)]
     this.goods_data = this.all_goods[0]
  

     this.$nextTick(() => {
      
      
      this.$refs.child?.initSwiper();
    
    });

    },
    show(index){ 
      this.goods_data = this.all_goods[index]
    }
  }
}
</script>
<style >
.common_walker  .fengniao_margot-info{
  display: flex;
  align-items: center;
  justify-content: center;
  
  
}
.last_title{
  font-family: Noto Serif;
font-size: 1.667vw;
font-weight: 400;
line-height: 2.031vw;
letter-spacing: 0px;
text-align: center;
padding: 3.125vw 0 2.083vw;
}
@media screen and (max-width: 768px) {
  .last_title{
 
font-size: 5.333vw;
font-weight: 500;
line-height: 6.133vw;
letter-spacing: 0px;
text-align:center;
width: 100%;
padding: 0;
margin: 0 0 3.2vw;
}
}
</style>