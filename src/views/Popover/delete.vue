<template>
  <div style="margin:20px">
    <TlpPopver trigger="click" placement="top" ref="popver">
      <span>删除</span>
      <template v-slot:inner>
        <p>
          <Tlp-icon icon="close" style="color: red"></Tlp-icon>
          这是一段内容这是一段内容确定删除吗？
        </p>
        <div style="text-align: right">
          <Tlp-button size="mini" @click.native="handerVisible">取消</Tlp-button>
          <Tlp-button type="primary" size="mini" @click.native="handerVisible">确定</Tlp-button>
        </div>
      </template>
    </TlpPopver>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  methods: {
    handerVisible () {
      this.$refs.popver.show = false;
    },
  },
};
</script>
<style>
.popver-inner {
  position: relative;
  z-index: 9999;
}
</style>
