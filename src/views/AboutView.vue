<template>
  <div class="layout" ref="layout">
    <div class="head">
      <Header></Header>
    </div>
    <div class="main">

      <div class="aside">

        <ul>
          <li v-for="(v, i) in list" :key="i" @click="go(v.name, i)" ref="go" :class="{ 'active': currentIndex == i }">
            {{ v.name }} {{ v.desc }}
          </li>

        </ul>

      </div>

      <div class="home" v-scrollBar>
        <KeepAlive :max="3">
          <router-view></router-view>
        </KeepAlive>

      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
export default {
  components: {
    Header
  },
  data () {
    return {
      currentIndex: 1,
      list: [
        { name: '使用指南' },
        { name: 'Start', desc: '快速上手' },
        { name: '组件' },
        { name: 'Icon', desc: '图标' },
        { name: 'Link', desc: '文字链接' },
        { name: 'Radio', desc: '单选框' },
        { name: 'Button', desc: '按钮' },
        { name: 'CheckBox', desc: '多选框' },
        { name: 'Alert', desc: '警告' },
        { name: 'Input', desc: '输入框' },
        { name: 'Select', desc: '下拉框' },
        { name: 'Skeleton', desc: '骨架屏' },
        { name: 'Image', desc: '图片' },
        { name: 'Pagination', desc: '分页' },
        { name: 'Popover', desc: '弹出框' },
        { name: 'InfiniteScroll', desc: '无限滚动' }
      ]
    }
  },

  methods: {
    go (name, i) {
      console.log(i)
      this.currentIndex = i
      const router = this.$router.options.routes[1].children

      const arr = router.filter((v) => {
        return v.name === name
      })

      if (arr.length > 0) {
        this.$router.push(`/about/${name}`)
      }
    }
  }
}
</script>
<style scoped lang="less">
.layout {

  height: 100%;

  .head {
    width: 100%;
    padding: 0 160px;
    position: fixed;
    height: 100px;
    margin: 0 auto;
    top: 0;
    z-index: 999;
    border-bottom: 1px solid var(--border-color);
    background-color: var(--bg-color);

  }

  .main {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;

    .aside {
      // background: yellow;
      position: fixed;
      top: 100px;
      left: 0;
      width: 250px;
      margin-left: 200px;
      overflow: scroll;
      height: 100%;
      border-right: 2px solid rgba(144, 147, 153, .3);

      ul {
        height: 100%;
        margin-bottom: 60px;
        padding-left: 60px;

        li {
          padding: 15px 0;
          width: 100%;
          // color: var(--color);
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
      // margin-left: 550px;
      margin-left: 20px;
      padding-bottom: 100px;
      position: relative;
      // top: 100px;
      left: 550px;
      // bottom: 100px;
      right: 0;
      width: 70%;
      // height: 100vh;

    }
  }
}

.active {
  color: #616ae5;
}
</style>
