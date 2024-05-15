<template>
  <div class="your-container-className">
    <div class="top-slide-block pc-slide-block">
      <div class="content common-style">
        <div class="content-left">
          <a
            :href="item.link"
            v-for="(item, index) in CircleImg"
            :key="index"
            class="show_big"
          >
            <img :src="item.src" alt="vivaia" />
          </a>
          <a
            :href="item.link"
            v-for="(item, index) in CircleImg"
            :key="index"
            class="show_small"
          >
            <img :src="item.src" alt="vivaia" />
          </a>

          <div class="title-color">
            <div class="title">Versatile & Softer Birken-Style Slides</div>
          </div>
        </div>
      <a href="https://www.vivaia.com/category/kara-c_1037.html" class="shop-now">Discover Now</a>

      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      CircleImg: [
        {
          src: "https://cdnimg.vivaia.com/vivaia/products/1714135377-f5c8aabb-b323-41eb-8b66-25f6eeeb77c1.jpg?imresize=800x800",
          link: "https://www.vivaia.com/category/kara-c_1037.html",
          data_url:
            "https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/Rectangle%202209.jpg",
          data_title: "Abstract Dots",
        },
        {
          src: "https://cdnimg.vivaia.com/vivaia/products/1706766689-e74cd3fd-9da9-4111-8f13-1577ad094fae.jpg?imresize=800x800",
          link: "https://www.vivaia.com/category/kiara-c_1043.html",
          data_url:
            "https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/Rectangle%202210.jpg",
          data_title: "Abstract Dots",
        },
        {
          src: "https://cdnimg.vivaia.com/vivaia/products/1706841294-1868696c-5c89-48b3-9691-3b7ee0696d51.jpg?imresize=800x800",
          link: "https://www.vivaia.com/category/katarina-c_1042.html",
          data_url:
            "https://cdnimg.vivaia.com/VA/image/Banner/20240515_6843/Rectangle%202211.jpg",
          data_title: "Abstract Dots",
        },
      ],
    };
  },
  mounted() {
    this.getslideshow();
  },
  methods: {
    getslideshow() {
      /* 滑动弹出藏入效果 */
      window.addEventListener("scroll", function (e) {
        const block = document.querySelector(".top-slide-block");
        if (window.innerWidth > 768) {
          // pc
          if (window.scrollY > 100)
            block.classList.add("top-slide-block-show"); // 弹出
          else block.classList.remove("top-slide-block-show"); // 隐藏
        } else {
          // mobile
          const height = document.body.scrollHeight;
          if (
            window.scrollY >= height - window.innerHeight - 100 ||
            window.scrollY < 100
          )
            block.classList.remove("top-slide-block-show"); // 显示
          else block.classList.add("top-slide-block-show"); // 隐藏
        }
      });
    },
  },
};
</script>
  
  <style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: "Roboto";
  color: #191817;
  font-size: 0px;
}
picture {
  display: inline-block;
  height: 0px;
}
.your-container-className {
  width: 100%;
  height: 100%;
  /* margin-top: -8px */
  /* height: 4000px; */
}
.show_big {
  display: block !important;
}

.show_small {
  display: none !important;
}

.color-list {
  float: left;
}
.your-container-className .top-slide-block {
  height: 80px;
  width: 100%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  transition: all 0.5s linear;
  transform: translateY(-100%);
  z-index: 100;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.08);
}
.your-container-className .top-slide-block .content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 68.75vw;
  margin: 0 auto;
}
.your-container-className .top-slide-block .content .content-left {
  display: flex;
  align-items: center;
}
.your-container-className .top-slide-block .content .content-left a {
  display: inline-block;
  margin-right: 10px;
}
.your-container-className .top-slide-block .content .content-left a img {
  display: inline-block;
  width: 60px;
  height: 60px;

}
.your-container-className .top-slide-block .content .content-left .title-color {
  margin-left: 12px;
}
.your-container-className
  .top-slide-block
  .content
  .content-left
  .title-color
  .title {
  font-size: 16px;
  line-height: 18.75px;

}
.your-container-className
  .top-slide-block
  .content
  .content-left
  .title-color
  .color-list {
  margin-top: 8px;
}
.your-container-className
  .top-slide-block
  .content
  .content-left
  .title-color
  .color-list
  .color-item {
  display: inline-block;
  margin-right: 5px;
}
.your-container-className
  .top-slide-block
  .content
  .content-left
  .title-color
  .color-list
  .color-item
  img {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.your-container-className .top-slide-block .content .shop-now {
  font-size: 16px;
  line-height: 18.75px;
  text-decoration: none;
  padding: 12px 20px;
  background-color: #191817;
  color: #ffffff;
  border: none;
  box-sizing: border-box;
  flex-shrink: 0;
}
.your-container-className .top-slide-block .content .shop-now:hover {
  transition: all 0.2s;
  background: #ffffff;
  color: #191817;
  border: 1px solid #191817;
}
.your-container-className .top-slide-block-show {
  transition: all 0.5s linear;
  transform: translateY(0%);
}

@media screen and (max-width: 768px) {
  .show_big {
    display: none !important;
  }

  .show_small {
    display: block !important;
  }

  .your-container-className .top-slide-block {
    bottom: 0px;
    transform: translateY(100%);
  }
  .your-container-className .top-slide-block .content {
    width: calc(100% - 40px);
  }

  .your-container-className .top-slide-block .content .content-left{
    width: unset;
  }
  .your-container-className .top-slide-block .content .content-left a {
    margin-right: 4px;
  }

  .your-container-className .top-slide-block .content .shop-now{
    font-size: 12px;
    line-height: 14px;
    padding: 9px 7px;
    margin-left: 12px;
  }

  .your-container-className
    .top-slide-block
    .content
    .content-left
    .title-color {
    margin-left: 6px;
  }

  .your-container-className .top-slide-block .content .content-left a img {
    width: 36px;
    height: 36px;
  }

  
  .your-container-className
    .top-slide-block
    .content
    .content-left
    .title-color
    .title {
      min-width: 104px;
    font-size: 12px;
    line-height: 14.06px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .your-container-className
    .top-slide-block
    .content
    .content-left
    .title-color
    .color-list
    .color-item
    img {
    width: 16px;
    height: 16px;
  }
  .your-container-className
    .top-slide-block
    .content
    .content-left
    .title-color
    .color-list
    .color-item:nth-child(n + 7) {
    display: none;
  }
  .your-container-className .top-slide-block-show {
    transition: all 0.5s linear;
    transform: translateY(0%);
  }
}
</style>
  