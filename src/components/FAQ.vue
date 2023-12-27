<template>
  
   
    <div class="addition_item"   @click="handleShow()">
      <div class="item_container">
        <div style="display: flex;align-items: start;">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18" height="18" fill="#E5E5E5" />
            <rect x="-56" y="-87" width="456" height="617" fill="white" />
            <path d="M17 1H1V13.8H4.2V17L7.4 13.8H17V1Z" fill="#191817" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M10.899 11.0153C10.3602 11.3246 9.74463 11.5 9.09096 11.5C6.96966 11.5 5.25 9.65316 5.25 7.37499C5.25 5.09682 6.96966 3.25 9.09096 3.25C11.2123 3.25 12.9319 5.09682 12.9319 7.37499C12.9319 8.37798 12.5986 9.29735 12.0444 10.0123L13.25 11.1893L12.1636 12.25L10.899 11.0153ZM9.74404 9.88773C9.53101 9.9614 9.31047 9.99998 9.09096 9.99998C7.9527 9.99998 6.78638 8.96247 6.78638 7.37499C6.78638 5.78751 7.9527 4.75 9.09096 4.75C10.2292 4.75 11.3955 5.78751 11.3955 7.37499C11.3955 7.98701 11.2222 8.51728 10.9439 8.93788L10.1772 8.18935L9.09084 9.25001L9.74404 9.88773Z"
              fill="white" />
          </svg>

          <span class="item_title"> {{ item.title }}</span>
        </div>

        <span class="add" v-show="!show">+</span>
        <span  class="jian" v-show="show">-</span>
      </div>
      <div class="item_info"  v-show="show">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="18" height="18" fill="#E5E5E5" />
          <rect x="-56" y="-145" width="456" height="617" fill="white" />
          <path d="M1 1H17V13.8H13.8V17L10.6 13.8H1V1Z" fill="#3A6223" />
          <path
            d="M13 11.5H11.578C11.2598 11.5 11.0498 11.3336 10.9701 11.0992L10.5034 9.70453H7.49661L7.02985 11.0992C6.95818 11.3022 6.73976 11.5 6.43284 11.5H5L8.06106 3.5H9.93894L13 11.5ZM7.91995 8.44166H10.0801L9.35278 6.25086C9.30574 6.11176 9.24966 5.94887 9.18453 5.76218C9.12302 5.57184 9.06151 5.36685 9 5.14722C8.94211 5.37051 8.88241 5.57733 8.8209 5.76767C8.75938 5.95802 8.70149 6.12274 8.64722 6.26184L7.91995 8.44166Z"
            fill="white" />
        </svg>


        <span class="item_desc" v-html="item.desc">
         </span>
      </div>
    </div>

    

  
</template>

<script>
export default {
  props:{
   item:{
    default:[]
   }
  },
  data () {
    return {
    
      show:false,
    }

  },
  methods: {
    handleShow () {
      
     this.show = !this.show
    }
  },
}
</script>
<style >

.fengniao_addition svg {
  width: auto !important;
  height: auto !important;
}

.space-w {
  width: 68.75vw;
  margin: 0 auto;
}

.lp_title_one {
  font-family: Noto Serif;
  font-size: 1.667vw;
  font-weight: 400;
  line-height: 2.292vw;
  padding-bottom: 1.823vw;
}

.fengniao_addition {
  padding: 0 0 3.125vw;
}

.fengniao_addition .addition_title {


  border-bottom: 1px solid #E1E1E1;
}

.fengniao_addition .addition_item {
  padding: 1.5625vw 0;
  border-bottom: 1px solid #E1E1E1;
  cursor: pointer;
}

.fengniao_addition .addition_item .item_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fengniao_addition .addition_item .item_container .item_title {
  font-family: Roboto;
  font-size: 18px;
  margin-left: 5px;
}

.fengniao_addition .addition_item .item_info {
  margin-top: 1.5625vw;
  transition: 0.4s;
  color: rgba(25, 24, 23, 0.7);
  display: flex;
  align-items: start;
}

.fengniao_addition .addition_item .item_info .item_desc {
  margin-left: 5px;
  font-family: Roboto;
  font-size: 14px;
  max-width: 52.0833333vw;
}
@media screen and (min-width: 769px) and (max-width: 1440px) {
   

   .lp_title_one {

    font-size: 24px;
line-height: 1.12;
padding-bottom: 20px;
  }
 .fengniao_addition .addition_item .item_container .item_title{
  font-size: 16px;
}
.fengniao_addition .addition_item .item_info .item_desc{
  font-size: 14px;
}
}
/* 
@media screen and (min-width: 769px) and (max-width: 1100px) {
   .space-w {
    width: 90vw;
    margin: 0 auto;
  }
   .lp_title_one {

    font-size: 18px;
line-height: 1.12;
padding-bottom: 20px;
  }
 .fengniao_addition .addition_item .item_container .item_title{
  font-size: 14px;
}
   .fengniao_addition .addition_item .item_info .item_desc{
    font-size: 12px;
  }
   .fengniao_addition {
    padding: 40px 0 20px;
  }
} */

@media screen and (max-width: 768px) {

  .space-w {
    width: 89.3333333vw;
  }

  .lp_title_one {
    font-size: 4.8vw;
    font-weight: 400;
    line-height: 6.667vw;
    padding-bottom: 5.333vw;
  }

  .fengniao_addition {
    padding: 0 0 10.667vw;
  }

  .fengniao_addition .addition_title {
    font-family: Noto Serif;
    font-size: 4.8vw;
    font-weight: 400;
    line-height: 6.6666667vw;
  }

  .fengniao_addition .addition_item {
    padding: 5.3333333vw 0;

  }

  .fengniao_addition .addition_item .item_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .fengniao_addition .addition_item .item_container .item_title {
    font-family: Noto Serif;
font-size: 3.733vw;
font-weight: 400;
line-height: 5.067vw;
letter-spacing: 0px;
text-align: left;
max-width: 73.333vw;
  }

  .fengniao_addition .addition_item .item_info {
    margin-top: 5.3333333vw;
  }

  .fengniao_addition .addition_item .item_info .item_desc {
    width: 73.3333333vw;
    margin-left: 2.6666667vw;
    max-width: 100%;
    
font-size: 3.733vw;
font-weight: 400;
line-height: 4.533vw;

text-align: left;

  }
}</style>