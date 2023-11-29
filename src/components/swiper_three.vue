<template>
  <div class="fengniao-outer" >
        <div class="fengniao_margot-info space-w">
          <div class="inner">
            <div class="common-title">
              Chic Style
            </div>
            <div class="common-desc">
              <p>-Effortlessly transition from the office to a night on the town.</p>
                <p>-Inject a sense of elegance into everyday life.</p>
            </div>
          </div>
          <picture>
            <source srcset="
            https://cdnimg.vivaia.com/VA/image/HomePage/20231129_6513/Group%203580.jpg
              " media="(max-width:768px)" />
            <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/HomePage/20231129_6513/Rectangle%202321.jpg"
              alt="" />
          </picture>
         
        </div>
        <goods_item :goods_data="goods_data" swiper_name="Walker Collection" ref="child"  >
          
          </goods_item>
      </div>
  </template>
  
  <script>
  let str ='10011923,10016488,10015980,10017361,10012726,10015836,10010762,10014565,10017889,10017505,10013630,10015868'
  import goods_item from './goods_item.vue'
  export default {
    
    components:{
      goods_item,
    },
  
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
       console.log(res.result)
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
    left: 4.167vw;
  
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