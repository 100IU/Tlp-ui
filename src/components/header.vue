<template>
  <div class="headr">
    <div class="head-one">
      <img src="../assets/logo.png" alt="" />
      <p @click="$router.push('/')">Tlpment</p>
    </div>
    <div class="head-two">
      <div class="theme" @click="changeColor">
        <dark v-if="$store.state.isDark" ref="svg"></dark>
        <light v-else ref="svg"></light>
      </div>
      <span @click="$router.push('/about/Start')">组件</span>

      <a href="https://gitee.com/tlp-ui/tlp-ui">gitee地址</a>
    </div>
  </div>
</template>

<script>
import dark from './dark.vue'
import light from './light.vue'

export default {
  components: {
    dark,
    light
  },
  data () {
    return {
      isDark: false
    }
  },

  methods: {
    changeColor () {
      console.log(this.$store.state.isDark)
      this.$store.state.isDark = !this.$store.state.isDark

      if (this.$store.state.isDark === true) {
        document.documentElement.setAttribute('theme', 'dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.setAttribute('theme', '')
        localStorage.setItem('theme', '')
      }
    }
  }
}
</script>
<style scoped lang="less">
.headr {
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  font-size: 20px;
  // background-color: var(--bg-color);
  // border-bottom: 1px solid var(--color);

  span,
  a {
    cursor: pointer;
    color: #9499d4;
    text-decoration: none;

    &:hover {
      color: #616ae5;
    }
  }

  .head-one {
    display: flex;
    cursor: pointer;

    align-items: center;
    color: #616ae5;
    font-weight: bold;
    font-size: 30px;

    img {
      width: 50px;
      height: 50px;
      margin-right: 8px;

      vertical-align: bottom;
    }
  }

  .head-two {
    display: flex;
    align-items: center;

    .theme {
      position: relative;
      top: 2px;
      border-radius: 11px;
      width: 40px;
      height: 22px;
      background-color: var(--bg-color1);
      border: 1px solid var(--border-color);
      transition: all .3s;

      svg {
        height: 10px;
        position: absolute;
        top: 3px;
        // left: 3px;
        // right: 3px;
        width: 12px;
        height: 12px;
        fill: var(--fill)
      }
    }

    span {
      margin: 0 20px;
    }
  }
}
</style>
