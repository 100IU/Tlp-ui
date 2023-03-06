<template>
  <div style="margin:20px">
    <TlpPopver trigger="click" placement="top">
      <span>click激活</span>
      <template v-slot:inner>
        <span> 这是一段内容,这是一段内容,这是一段内容,这是一段内容。 </span>
      </template>
    </TlpPopver>

    <TlpPopver trigger="over" placement="bottom">
      <span>hover激活</span>
      <template v-slot:inner>
        <span> 这是一段内容,这是一段内容,这是一段内容,这是一段内容。 </span>
      </template>
    </TlpPopver>
  </div>
</template>

<script>
export default {
  data () {
    return {
      codeList: [{ code: '<TlpPopver trigger="click" placement="top">' },
      { code: '<span>click激活</span>' },
      { code: '<template v-slot:inner>' },
      { code: '<span> 这是一段内容,这是一段内容,这是一段内容,这是一段内容。 </span>' },
      {
        code: '</template'
      },
      {
        code: '</TlpPopver> '
      }
      ]
    }
  }
}
</script>
<style>
.popver-inner {
  position: relative;
  z-index: 999;
}
</style>
