<template>
  <div class="alert">
    <Tlp-alert
      type="success"
      title="成功提示的文案"
      show-icon
      description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
      closeText="关闭"
    ></Tlp-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codeList: [
        { code: '<Tlp-alert type="success" title="成功提示的文案" show-icon' },
        {
          code: 'description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"',
        },
        { code: 'closeText="关闭">' },
        {code:'</Tlp-alert>'}
      ],
    };
  },
};
</script>

<style scoped>
.alert {
  padding: 20px;
  /* display: flex; */
  width: 100%;
}

.tlp-alert {
  margin: 10px 0;
}
</style>
