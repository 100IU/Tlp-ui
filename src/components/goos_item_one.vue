<template>
  <div class="fengniao-margot space-w margot_swiper">

    <div class="fengniao_tab-container" v-if="tabs_item.length > 0">

      <div class="fengniao-tab">

        <div :class="`tab_item ${index === cur_index ? 'active' : ''}`" v-for="(item, index) in tabs_item" :key="index"
          @click="show_one(index)" style="cursor: pointer;">
          {{ item.tab_name }}
        </div>
      </div>
    </div>
    <div class="fengniao_margot-swiper" style="position: relative;">
      <div class="fengniao_swiper_one swiper_one  space-w"
        style="overflow: hidden;display: flex;flex-wrap: wrap;justify-content: space-between;">

        <div class="slide_item" v-for="(item) in goods_data" :key="item.goods_sn
          " style="width: 24%;">
          <a :href="`https://www.vivaia.com${item.goods_url}`" style="position: relative;display: flex;justify-content: center;">
            <img  v-lazy="item.goods_thumb"  style="height: auto;"/>
            
             <!-- <img src="https://cdnimg.vivaia.com/VA/image/Banner/20230919_6294/2862c4e09c5a8f67149e53a0d81d62fd.jpg" alt="" style="height: auto;"> -->
            <div class="inner_btn">Shop Now</div>
          </a>

          <div class="slide_info">
            <p class="new_title_one"> {{ item.goods_name }}  </p>

            <!-- <p class="new_title_one"> {{ item.title}}</p> -->

            <p class="new_title_one" v-if="item.pc_shop_price_converted !== item.old_shop_price_converted">
              <span style="margin-right: 4px;font-weight: 500;">{{ item.pc_shop_price_converted }}</span>
              <span style="text-decoration: line-through;">{{ item.old_shop_price_converted
              }}</span>


            </p>
            <p v-else class="new_title_one" style='font-weight: 500;'>
              <span>{{ item.pc_shop_price_converted }} </span>
            </p>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    swiper_name: {
      type: String,

    },
    goods_data: {
      type: Array,
      default: () => []
    },
    tabs_item: {
      type: Array,
      default: () => []
    },
    str: {
      type: String,
      default: ''
    }

  },
  data () {
    return {

      // all_goods:[],

      
      cur_index: 0
    }
  },
  mounted () {



  
  },

  methods: {

   
    show_one (index) {
      this.cur_index = index

      this.$emit('show', index)
     
    },
  }
}
</script>
<style  scoped>
.margot_swiper {
  margin-top: 3.125vw !important;
}

.slide_info{
    padding: 0.833vw 0 2.083vw;
  }
  .fengniao-margot a:hover .inner_btn{
opacity: 1;
}
.inner_btn{
  position: absolute;
  bottom: 10px;
  width: 91.6%;
  opacity: 0;
  margin: 0 auto;
  background: #FFFFFF;
  color: #191817;
  padding: 0.625vw 0;
  font-family: Roboto;
font-size: 0.833vw;
font-weight: 500;
line-height: 1.25vw;
letter-spacing: 0px;
text-align: center;

}
.inner_btn:hover{
  color: #FFFFFF;
  background: #191817;
}
.fengniao_new .fengniao-outer .fengniao-margot .fengniao_tab-container .fengniao-tab {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.604vw;
    width: 100%;
    height: 1.979vw;
    border-bottom: 2px solid rgba(186, 186, 186, 1);
}
@media screen and (max-width: 768px) {
  .margot_swiper {
    margin-top: 5.3333333vw !important;
  }
  .inner_btn{
   display: none;

}

}
</style>