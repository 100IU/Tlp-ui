<template >
    <div class="Christmas">
        <picture >
            <source media="(max-width: 768px )" srcset="">
            <img src="https://cdnimg.vivaia.com/VA/image/Banner/20221116_5032/2@2x.jpg" alt="VIVAIA">
        </picture>
        <div class="texts">
            <p class="title">Now is the best time to shop for 
Christmas!</p>
        <p class="text">
            Prepare your holiday gifts now with the biggest sales of the year and the optimum quality. Running out fast. Don’t miss the chance!
        </p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    img{
        width: 100%;
    }
    .Christmas{
        position: relative;
        .texts{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 34%;
            left: 8%;
            .title{
                font-family: 'Noto Serif';
                font-size: 40px;
                margin-bottom: 30px;
            }
            .text{
                font-size: 24px;
                font-family: 'Roboto-Regular';
                color: #B3B3B3;
            }
        }
    }
    @media screen and(max-width:1300px) {
        .Christmas{
            .texts{
                .title{
                    font-size: 32px;
                }
                .text{
                    font-size: 18px;
                }
            }
        }
    }
    @media screen and(max-width:1024px) {
        .Christmas{
            .texts{
                .text{
                    font-size: 16px;
                }
                .title{
                    font-size: 24px;
                }
            }
        }
    }
</style>