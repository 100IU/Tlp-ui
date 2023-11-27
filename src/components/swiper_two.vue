<template>
  <div class="fengniao-outer common_walker" id="go_to1">
    <div class="last_title">
      More Styles
    </div>
    <div class="fengniao-margot space-w">
      <goods_item_one :goods_data="goods_data" swiper_name="Ryan Boots"  :tabs_item="tabs_item" @show="show" v-if="width>768"></goods_item_one>
      <goods_item :goods_data="goods_data" swiper_name="Ryan Boots" ref="child" :tabs_item="tabs_item1" @show="show" v-else></goods_item>
      
    </div>
  </div>
</template>

<script>
let str1 = `
10016616,
10009502,
10017297,
10016829,
10010467,
10003770,
10016845,
10016696,
10001673,
3757,
10011747,
10011763,
10015337,
10015321,
10011379,
10012662,
10016260,
10016172,
10017085,
10017120,
10008953,
4568,
10016076,
10016188,
`
import Goods_item_one from './goos_item_one.vue';
import Goods_item from './goods_item.vue';
export default {
  components:{
    Goods_item_one,
    Goods_item
  },
  data () {
    return {
      all_goods:[],
     goods_data:[],
     width:'',
      tabs_item:[ 
      {tab_name:'Fun-Filled Loafers'},
      {tab_name:'Summer Freshness'},
      {tab_name:'Water-Repellent Boots'}
     
    ],
    tabs_item1:[ 
      {tab_name:'Loafers'},
      {tab_name:'Sandals'},
      {tab_name:'Boots'}
     
    ],
    }
  },
  created(){
    this.width = window.innerWidth
    
  },
  mounted () {
    this.getAllgoods()
  },
  watch: {
    width(newWidth) {
    // 在这里执行你想要的操作，比如根据屏幕宽度做出响应
    this.width = window.innerWidth
  },
  immediate: true
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
  /* flex-direction: row-reverse; */
  
}
.last_title{
  font-family: Noto Serif;
font-size: 1.667vw;
font-weight: 400;
line-height: 2.031vw;
letter-spacing: 0px;
text-align: center;
margin: 3.125vw 0 2.083vw;
}
@media screen and (max-width: 768px) {
  .last_title{
 
font-size: 5.333vw;
font-weight: 500;
line-height: 6.133vw;
letter-spacing: 0px;
text-align:center;
width: 100%;
margin: 10.667vw 0 -3.2vw;
}
}
</style>