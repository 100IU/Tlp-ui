<template>
  <div class="fengniao-outer">
       
    
        <goods_item :goods_data="goods_data" swiper_name="New In-Store Arrivals" ref="child"></goods_item>
      </div>
  </template>
  
  <script>
  
													
    let str =`10016172,
10016244,	
4559,	
10017053,	
10016156,	
10016276,	
10017101,	
10017069,	
4579,	
4577`

  import goods_item from './goods_item.vue'
  export default {
    
    components:{
      goods_item,
    },
    data() {
  return {
    goods_data: [],
        Allgoods:[],
      
  }
  },
  mounted(){
    this.getAllgoods()
  },
  methods: {
      async getAllgoods(){
       const res = await  window._fengniao_getGoods_list({
          goods_id:str.replace(/\s/g,''),
          disable_goods_number:1
       })
       console.log(res.result)
      //  this.Allgoods = [res.result.slice(0,5),res.result.slice(5, 9)]
      //  console.log(this.Allgoods) 
       this.goods_data = res.result
       this.$nextTick(() => {
        this.$refs.child.initSwiper();
      
      });
  
      },
   
    }
  }
  </script>
  <style  scoped>
  
  </style>