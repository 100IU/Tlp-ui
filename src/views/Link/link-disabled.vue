<template>
  <div style="padding: 20px">
    <Tlp-link  disabled>默认链接</Tlp-link>
    <Tlp-link type="primary" disabled>主要链接</Tlp-link>
    <Tlp-link type="success" disabled>成功链接</Tlp-link>
    <Tlp-link type="warning" disabled>警告链接</Tlp-link>
    <Tlp-link type="danger" disabled>危险链接</Tlp-link>
    <Tlp-link type="info" disabled>信息链接</Tlp-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codeList: [
        { code: '<Tlp-link disabled>默认链接</Tlp-link>' },
        { code: '<Tlp-link type="primary" disabled>主要链接</Tlp-link>' },
        { code: '<Tlp-link type="sucess" disabled>成功链接</Tlp-link>' },
        { code: '<Tlp-link type="warning" disabled>警告链接</Tlp-link>' },
        { code: '<Tlp-link type="danger" disabled>危险链接</Tlp-link>' },
        { code: '<Tlp-link type="info" disabled>信息链接</Tlp-link>' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
