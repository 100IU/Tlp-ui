<template>
<div class="fengniao-outer">
 
   
       <goods_item :goods_data="goods_data"  swiper_name="new_swiper" ref="child">
        <div class="common-title" style="text-align: left;">
          Our Highlights
        </div>
        </goods_item>
       
    
       
    </div>
</template>

<script>
let str ='10012694,10015113,10016228,10017085,10016829,10003770,10011923,10012710'
import goods_item from './goods_item.vue'
// import goods_item_one from './goods_item_one.vue'
export default {
  
  components:{
    goods_item,
    // goods_item_one
  },

  
data() {
return {
  goods_data: [],
  
  
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
   
  
    this.goods_data = res.result

    if(window.innerWidth<768){
      this.$nextTick(() => {
      this.$refs.child.initSwiper();
    
    })
    }


    },
   

  }
}
</script>
<style >
 .title_{
  font-family: Noto Serif;
font-size: 1.563vw;
font-weight: 400;
line-height: 2.083vw;
letter-spacing: 0px;
text-align: center;


 }

  .desc_{
    font-family: Roboto;
font-size: 0.833vw;
font-weight: 300;
line-height: 1.25vw;
letter-spacing: 0px;
text-align: center;
opacity: .7;


 }
.fengniao-outer .fengniao_margot-info{
  position: relative;
  display: flex;
  align-items: center;
}
.fengniao-outer .inner{
  position: absolute;
  color: #FFFFFF;
  right: 10.208vw;

}
@media screen and (max-width: 768px) {
  .fengniao-outer .fengniao_margot-info{
    display: block;
  }
  .fengniao-outer .inner{
  color: #191817;
  position: static;
margin-bottom: 5.333vw;
}

 .title_{
  font-family: Noto Serif;
font-size: 5.333vw;
font-weight: 400;
line-height: 7.2vw;
letter-spacing: 0px;
text-align: left;
margin:0 5.333vw ;

 }

  .desc_{
  font-family: Roboto;
font-size: 3.2vw;
font-weight: 400;
line-height: 3.733vw;
letter-spacing: 0px;
text-align: left;
margin: 2.133vw 5.333vw 5.333vw;


 }
 .new_m_slide .outer{
  width: 100vw;
  
  overflow-x:scroll;

 }
 .new_m_slide .outer::-webkit-scrollbar{
  display: none;
 }
 .new_m_slide .inner{
  display: flex;
  justify-content: space-between;
width: 181.333vw;
margin:0 5.333vw ;

 }
.new_m_slide .inner .imgs{
   width: 49.2%;
}
.new_m_slide img{
  width:100%;
}
}
</style>