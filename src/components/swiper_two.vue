<template>
  <div class="fengniao-outer" >
        <div class="fengniao_margot-info space-w">
          <div class="inner">
            <div class="common-title">
              Cozy Walking Flats 
            </div>
            <div class="common-desc">
              <p>-Roomy toe box, wide feet friendly.</p>
                <p>-Arch support and heel padding, ultra comfy heels you can wear all day. </p>
                <p>-Knit uppers made from recycled plastic bottles, lightweight and flexible</p>
            </div>
          </div>
          <picture>
            <source srcset="
            https://cdnimg.vivaia.com/VA/image/HomePage/20231129_6513/Group%203549.jpg
              " media="(max-width:768px)" />
            <img class="common-img" src="https://cdnimg.vivaia.com/VA/image/HomePage/20231129_6513/Rectangle%202315.jpg"
              alt="" />
          </picture>
         
        </div>
        <goods_item :goods_data="goods_data" swiper_name="Walker Collection" ref="child" >
          
          </goods_item>
      </div>
  </template>
  
  <script>
  let str ='10003530,10012694,10016616,10003770,10015129,10012470,10018073,10016829,10002135,10016893,10016312,10014712'
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
    color: #191817;
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