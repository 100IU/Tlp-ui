<template>
  <div class="start">
    <div class="s0">
      <h2><a>¶</a>快速上手</h2>
      <span>本节将介绍如何在项目中使用 Tlpment。</span>
    </div>
    <div class="s0">
      <h2><a>¶</a>npm安装</h2>
      <p class="s1">npm i tlpment-ui -S</p>
    </div>
    <div class="s0">
      <h2><a>¶</a>引入 Tlpment</h2>
      <p>在 main.js 中写入以下内容：</p>
      <div class="s1">
        <p class="s2" v-for="(v, i) in codeList" :key="i">{{ v.code }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      codeList: [
        { code: "import tlpmentui from 'tlpment-ui'" },
        { code: "import 'tlpment-ui/dist/tlp-ui.css'" },
        { code: 'Vue.use(tlpmentui)' }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.start {
  text-align: left;
}

p {
  margin-top: 20px;
}

.s0 {
  margin: 30px;

  h2 {
    margin-bottom: 10px;

    color: var(--color);

    a {
      padding-right: 4px;
      opacity: 0;
      cursor: pointer;
      color: rgb(171, 164, 164);
    }

    &:hover a {
      opacity: 1;
    }

  }

  span {
    color: #5e6d82;
    font-size: 14px;
    margin-left: 18px;
  }
}

.s1 {
  background-color: var(--bg-color1);
  padding: 20px;
  margin-top: 20px;
  color: rebeccapurple;

  padding: 20px;
  margin-top: 20px;
  color: var(--color);
}

.s2 {
  background-color: var(--bg-color1);
  margin-top: 10px;
  font-size: 14px;
  color: var(--color);
}
</style>
