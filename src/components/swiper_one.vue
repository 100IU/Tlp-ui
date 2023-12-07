<template>
<div class="fengniao-outer" >
  <div class="title_">
                Gifts for Her
              </div>
              <div class="desc_">
                Four Seasons Versatility: Comfy at home and fashionable out on the town
              </div>
     <div class="new_m_slide show_small" style="margin-bottom: 10.667vw;">
            
              
             <div class="outer">
               <div class="inner">
                <a class="imgs" href="https://www.vivaia.com/item/furry-criss-cross-strap-slippers-hannah-p_10017505.html?gid=10017511">
                  <img src="https://cdnimg.vivaia.com/VA/image/Banner/20231207_6527/m01.png" alt="">
                </a>

               

               </div>
             </div>
            </div>
       <goods_item :goods_datas="goods_datas"  v-if="innerWidth>768">
        </goods_item>
       
         <!-- <goods_item_one :Allgoods="Allgoods" ref="child"  :swiper_name="hello" v-else>
          </goods_item_one> -->
       
    </div>
</template>

<script>
let str ='10017505,10017569,10017521,10017585,10017553,10017537'
import goods_item from './goods_item.vue'
// import goods_item_one from './goods_item_one.vue'
export default {
  
  components:{
    goods_item,
    // goods_item_one
  },

  
data() {
return {
  goods_datas: [],
   Allgoods:[],
     innerWidth:window.innerWidth
  
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
   
    let data1 = {goods_sn:'1',goods_thumb:'https://cdnimg.vivaia.com/VA/image/Banner/20231207_6527/pc02.png',goods_name:'2 Pairs Savings: Save 28% for a Limited Time',goods_url:'/item/furry-criss-cross-strap-slippers-hannah-p_10017505.html?gid=10017511'}
    let data2 = {goods_sn:'1',goods_thumb:'https://cdnimg.vivaia.com/VA/image/Banner/20231207_6527/pc01.png',goods_name:'Explore Another Warm and Cozy Style',goods_url:'/item/round-toe-wool-slippers-hazel-p_10017969.html?gid=10017981',}
    this.goods_datas = res.result

    this.goods_datas.unshift(data1)
    this.goods_datas.push(data2)
   

    },
   
  //  show(index){
  //   this.goods_data = this.Allgoods[index]
     
  //  }

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