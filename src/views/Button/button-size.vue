<template>
  <div class="btn-size">
    <div>
      <Tlp-button>默认按钮</Tlp-button>
      <Tlp-button size="medium">中等按钮</Tlp-button>
      <Tlp-button size="small">小型按钮</Tlp-button>
      <Tlp-button size="mini">超小按钮</Tlp-button>
    </div>

    <div>
      <Tlp-button round>默认按钮</Tlp-button>
      <Tlp-button size="medium" round>中等按钮</Tlp-button>
      <Tlp-button size="small" round>小型按钮</Tlp-button>
      <Tlp-button size="mini" round>超小按钮</Tlp-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codeList: [
        { code: "<Tlp-button>默认按钮</Tlp-button>" },
        { code: '<Tlp-button size="medium">中等按钮</Tlp-button>' },
        { code: '<Tlp-button size="small">小型按钮</Tlp-button>' },
        { code: ' <Tlp-button size="mini">超小按钮</Tlp-button>' },
        { code: "" },
        { code: "<Tlp-button round>默认按钮</Tlp-button>" },
        { code: '<Tlp-button size="medium" round>中等按钮</Tlp-button>' },
        { code: '<Tlp-button size="small" round>小型按钮</Tlp-button>' },
        { code: ' <Tlp-button size="mini" round> 超小按钮</Tlp-button>' },
      ],
    };
  },
};
</script>
<style scoped>
.btn-size {
  margin: 20px;
}
button {
  margin-left: 10px;
  margin-top: 10px;
}
</style>
