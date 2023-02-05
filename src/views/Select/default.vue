<template>
  <div class="select">
    <Tlp-select v-model="input" :options="options"></Tlp-select>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      input: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      codeList: [
        {
          code: '<Tlp-select v-model="input" :options="options"></Tlp-select>',
        },
      ],
    };
  },
};
</script>
<style scoped>
.select {
  position: relative;
  z-index: 3;
  margin: 20px;
}
</style>
