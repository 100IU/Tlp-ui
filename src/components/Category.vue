<template >
    <div class="Category_item">
        <a :href="category.link"><img class="categoryimg" :src="category.img" alt="VIVAIA">
        </a>
        <a class="categorylink" :href="category.link">{{category.name}}</a>
    </div>
</template>
<script>
export default {
    props:['category']
}
</script>
<style lang="less" scoped>
    .categoryimg{
        width: 100%;
        margin-bottom: 20px;
    }
    .Category_item{
        width: 24%;
    }
    .categorylink{
        color: #6B0000;
        font-family: "Roboto-Regular";
        font-size: 24px;
        display: block;
        text-align: center;
        text-decoration: underline;
    }
    @media screen and(max-width:768px) {
        .Category_item{
            width: 43%;
            &:nth-child(1){
                margin-bottom: 40px;
            }
        }
        .categorylink{
            font-size: 16px;
        }
    }
</style>