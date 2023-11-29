<template>
<div class="fengniao-outer" >
      <div class="fengniao_margot-info space-w">
        <div class="inner">
          <div class="common-title">
            Warm Winter Boots
          </div>
          <div class="common-desc">
            <p>-Cozy and water-repellent material.</p>
              <p>-Strong enough to withstand snow and rain.</p>
              <p>-Non-slip rubber outsole.</p>
          </div>
        </div>
        <picture>
          <source srcset="
          https://cdnimg.vivaia.com/VA/image/HomePage/20231129_6513/Group%203578.jpg
            " media="(max-width:768px)" />
          <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/HomePage/20231129_6513/Rectangle%202316.jpg"
            alt="" />
        </picture>
       
      </div>
      <goods_item :goods_data="goods_data" swiper_name="Walker Collection" ref="child"  >
        
        </goods_item>
    </div>
</template>

<script>
let str ='10016076,10017005,10010127,10017825,10016012,10018169,10018249,10017761,10017457,10017993,10018873,10010159'
import goods_item from './goods_item.vue'
export default {
  
  components:{
    goods_item,
  },

  // props:{
  //   goods_one: {
  //     default: [],
  //   },
    
  // },
data() {
return {
  goods_data: [],
     Allgoods:[],
  tabs_item: [
        {
          tab_name: 'Square-Toe',
        },
        {
          tab_name: 'Pointed-Toe',
        },
       
      ],
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
    //  console.log(res.result)
    //  this.Allgoods = [res.result.slice(0, 12),res.result.slice(12, 21)]
    //  console.log(this.Allgoods) 
    this.goods_data = res.result
     this.$nextTick(() => {
      this.$refs.child.initSwiper();
    
    });

    },
   
  //  show(index){
  //   this.goods_data = this.Allgoods[index]
     
  //  }

  }
}
</script>
<style  scoped>
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
}
</style>