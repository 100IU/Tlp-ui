<template >
    <div class="bottomicon-wraper">
    <div class="bottomicon-item" v-for="(item,index) in bottomicon " :key="index">
        <img class="bottomicon-img" :src=item.img alt="VIVAIA">
        <span class="bottomicon-text" v-html="item.text"></span>
    </div>
</div>
</template>
<script>
import {bottomicon} from '../content.json'
export default {
    props:['bottomicon']
}
</script>
<style lang="less" scoped>
    .bottomicon-text{
        margin: 0 auto;
        margin-top: 40px;
        font-size: 18px;
        font-family: 'Roboto-Regular';
        text-align: center;
        width: 80%;
    }
    .bottomicon-wraper{
  display: flex;
  margin: 0 auto;
  width: 80%;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 80px 0;
}
.bottomicon-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 32%;
    &:nth-child(n+4){
        margin-top: 80px;
    }
}
.bottomicon-img{
    width: 74px;
    height: 62px;
    display: block;
    margin: 0 auto;
}
@media screen and (max-width:768px) {
    .bottomicon-img{
        width: 33.5px;
        height: 33.5px;
    }
    .bottomicon-wraper{
        width: 100%;
        padding: 80px 0;
    }
    .bottomicon-text{
        font-size: 12px;
        width: 100%;
    }
    .bottomicon-item{
        &:nth-child(2){
            .bottomicon-text{
                margin-top: 30px;
                
            }
        }
        &:nth-child(3){
            .bottomicon-text{
                margin-top: 30px;
                
            }
        }
        &:nth-child(4){
            .bottomicon-text{
                margin-top: 30px;
                
            }
        }
        &:nth-child(6){
            .bottomicon-text{
                margin-top: 50px;
                
            }
        }
    }
}
</style>