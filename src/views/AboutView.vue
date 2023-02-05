<template>
  <div class="layout" ref="layout">
    <div class="head">
      <Header></Header>
    </div>

    <div class="main">
      <div class="aside">


        <ul>
          <li v-for="(v, i) in list" :key="i" @click="go(v.name, i)" ref="go" class="go">
            {{ v.name }} {{ v.desc }}
          </li>
        </ul>
        <!-- <div style="height: 1200px"></div> -->
      </div>
      <div class="home">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
export default {
  components: {
    Header,
  },
  data () {
    return {
      list: [
        { name: "使用指南" },
        { name: "Start", desc: "快速上手" },
        { name: "组件" },
        { name: "Icon", desc: "图标" },
        { name: "Link", desc: "文字链接" },
        { name: "Radio", desc: "单选框" },
        { name: "Button", desc: "按钮" },
        { name: "CheckBox", desc: "多选框" },
        { name: "Alert", desc: "警告" },
        { name: "Input", desc: "输入框" },
        { name: "Select", desc: "下拉框" },
        { name: "Skeleton", desc: "骨架屏" },
        { name: "Image", desc: "图片" },
        { name: "Pagination", desc: "分页" },
        { name: "Popover", desc: "弹出框" },
        { name: "InfiniteScroll", desc: "无限滚动" },
      ],
    };
  },

  methods: {
    go (name, i) {
      let router = this.$router.options.routes[1].children;

      const arr = router.filter((v) => {
        return v.name === name;
      });
      ;
      if (arr.length > 0) {
        this.$router.push(`/about/${name}`);
      }
    },
  },
};
</script>
<style scoped lang="less">
li {
  list-style: none;
}

.layout {
  width: 100%;
  height: 100vh;

  .head {
    width: 90%;
    position: sticky;
    height: 100px;
    margin: 0 auto;
    top: 0;
    z-index: 99;
    border-bottom: 1px solid #dcdfe6;
    background-color: #ffff;
  }

  .main {
    width: 90%;
    height: 100%;
    // background-color: blue;
    // overflow-y: scroll;
    margin: 0 100px;
    position: absolute;
    // bottom: 100px;

    .aside {
      // background: yellow;
      position: absolute;
      top: 0;
      left: 0;
      width: 250px;
      overflow-y: scroll;
      height: 100%;

      &::-webkit-scrollbar {
        width: 1px;
        height: 1px;
        border-radius: 10px;
        background-color: #f1f1f1;
      }

      ul {
        height: 100%;
        margin-bottom: 60px;
        padding-left: 60px;

        li {
          padding: 15px 0;
          width: 100%;
          text-align: left;
          cursor: pointer;
          list-style: none;

          &:hover {
            color: #616ae5;
          }

          &:nth-child(1),
          ~ :nth-child(3) {
            font-size: 20px;
            color: rgb(160, 149, 149);
            cursor: alias;
          }
        }
      }
    }

    .home {
      position: absolute;
      left: 300px;
      top: 0;
      bottom: 0;
      right: 0;
      width: 60%;
      height: 100%;
      // background-color: aqua;
      overflow-x: hidden;

      // overflow-y: hidden;
      &::-webkit-scrollbar {
        width: 1px;
        height: 1px;
        border-radius: 10px;
        background-color: #f1f1f1;
      }
    }
  }

 
}
</style>
