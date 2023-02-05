<template>
  <div class="link">
    <Tlp-link href="https://gitee.com">默认链接</Tlp-link>
    <Tlp-link type="primary">主要链接</Tlp-link>
    <Tlp-link type="success">成功链接</Tlp-link>
    <Tlp-link type="warning">警告链接</Tlp-link>
    <Tlp-link type="danger">危险链接</Tlp-link>
    <Tlp-link type="info">信息链接</Tlp-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codeList: [
        { code: '<Tlp-link type="https://gitee.com">默认链接</Tlp-link>' },
        { code: '<Tlp-link type="primary">主要链接</Tlp-link>' },
        { code: '<Tlp-link type="sucess">成功链接</Tlp-link>' },
        { code: '<Tlp-link type="warning">警告链接</Tlp-link>' },
        { code: '<Tlp-link type="danger">危险链接</Tlp-link>' },
        { code: '<Tlp-link type="info">信息链接</Tlp-link>' },
      ],
    };
  },
};
</script>
<style scoped>
.link {
  margin: 20px;
}
</style>
