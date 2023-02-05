<template>
  <div style="width: 100%">
    <Infinite-scroll></Infinite-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codeList: [{ code: " <Infinite-scroll></Infinite-scroll>" }],
    };
  },
};
</script>
<style lang="less">
.infinite {
  width: 100% !important;
  &::-webkit-scrollbar {
    width: 1px;
    height: 1px;
    border-radius: 10px;
    background-color: #f1f1f1;
  }
}
</style>
