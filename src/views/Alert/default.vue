<template>
  <div class="alert">
    <Tlp-alert title="成功提示的文案" type="success" closeText="关闭"></Tlp-alert>
    <Tlp-alert title="消息提示的文案" type="info" closeText="关闭"></Tlp-alert>
    <Tlp-alert title="警告提示的文案" type="warn" closeText="关闭"></Tlp-alert>
    <Tlp-alert title="成功提示的文案" type="error" closeText="关闭"></Tlp-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codeList:[
        {code:'<Tlp-alert title="成功提示的文案" type="success" closeText="关闭"></Tlp-alert>'},
        {code:'<Tlp-alert title="成功提示的文案" type="info" closeText="关闭"></Tlp-alert>'},
        {code:'<Tlp-alert title="成功提示的文案" type="warn" closeText="关闭"></Tlp-alert>'},
        {code:'<Tlp-alert title="成功提示的文案" type="error" closeText="关闭"></Tlp-alert>'}
      ]
    }
  },
};
</script>

<style scoped>
.alert {
  padding: 20px;
  width: 100%;
  /* display: flex; */
}

.tlp-alert {
  margin: 10px 0;
}
</style>
