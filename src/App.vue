<template>
  <div>

    <keep-alive> <router-view /></keep-alive>

  </div>
</template>

<script>
export default {
  mounted () {
    console.log(localStorage.getItem('theme'))
    const Theme = localStorage.getItem('theme')
    document.documentElement.setAttribute('theme', Theme)
  }
}
</script>
<style lang="less">
html,
body {
  height: 100%;
  scroll-behavior: smooth;
  background-color: var(--bg-color);
  color: var(--color);
  transition: all 0.3s;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
