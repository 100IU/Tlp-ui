<template >
  <div class="Christmas the-title-area">
    <picture>
      <source media="(max-width: 768px )"
              srcset="https://cdnimg.vivaia.com/VA/image/Banner/20221116_5032/625@2x.png">
      <img src="https://cdnimg.vivaia.com/VA/image/Banner/20221116_5032/2@2x.jpg"
           alt="VIVAIA">
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
export default {}
</script>
<style lang="less" scoped>
img {
  width: 100%;
}
.Christmas {
  position: relative;
  .texts {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 34%;
    left: 8%;
    .title {
      font-family: 'Noto Serif';
      font-size: 40px;
      margin-bottom: 30px;
    }
    .text {
      font-size: 24px;
      font-family: 'Roboto-Regular';
      color: #b3b3b3;
    }
  }
}
@media screen and(max-width:1300px) {
  .Christmas {
    .texts {
      .title {
        font-size: 32px;
      }
      .text {
        font-size: 18px;
      }
    }
  }
}
@media screen and(max-width:1024px) {
  .Christmas {
    .texts {
      .text {
        font-size: 16px;
      }
      .title {
        font-size: 24px;
      }
    }
  }
}
@media screen and(max-width:769px) {
  .Christmas {
    .texts {
      position: absolute;
      top: 24%;
      transform: translateY(-50%);
      width: 90%;
      left: 8%;
      .text {
        font-size: 16px;
      }
      .title {
        font-size: 24px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>