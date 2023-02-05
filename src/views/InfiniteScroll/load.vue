<template>
  <div class="">
    <Infinite-load delayTime="250"></Infinite-load>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codeList: [{ code: "<Infinite-load></Infinite-load>" }],
    };
  },
};
</script>
<style scoped></style>
