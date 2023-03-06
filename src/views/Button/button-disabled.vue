<template>
  <div class="btn-disabled">
    <Tlp-button type="default" disabled>默认按钮</Tlp-button>
    <Tlp-button type="primary" disabled>主要按钮</Tlp-button>
    <Tlp-button type="success" disabled>成功按钮</Tlp-button>
    <Tlp-button type="danger" disabled>危险按钮</Tlp-button>
    <Tlp-button type="info" disabled>介绍按钮</Tlp-button>
    <Tlp-button type="warn" disabled>警告按钮</Tlp-button>
  </div>
</template>

<script>


export default {
  components: {
    readme
  },
  data () {
    return {

      codeList: [
        { code: ' <Tlp-button type="default" disabled >默认按钮</Tlp-button>' },
        { code: ' <Tlp-button type="primary" disabled>主要按钮</Tlp-button>' },
        { code: ' <Tlp-button type="success" disabled>成功按钮</Tlp-button>' },
        { code: ' <Tlp-button type="danger"  disabled>危险按钮</Tlp-button>' },
        { code: ' <Tlp-button type="info" disabled>信息按钮</Tlp-button>' },
        { code: ' <Tlp-button type="warn" disabled>警告按钮</Tlp-button>' }
      ]
    }
  }
}
</script>
<style scoped>
.btn-disabled {
  margin: 20px;
}
</style>
