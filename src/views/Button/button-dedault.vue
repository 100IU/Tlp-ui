<template>
  <div class="btn01">
    <div class="btn-default">
      <Tlp-button type="default">默认按钮</Tlp-button>
      <Tlp-button type="primary">主要按钮</Tlp-button>
      <Tlp-button type="success" >成功按钮</Tlp-button>
      <Tlp-button type="danger">危险按钮</Tlp-button>
      <Tlp-button type="info">介绍按钮</Tlp-button>
      <Tlp-button type="warn">警告按钮</Tlp-button>
    </div>
    <div class="btn-plain">
      <Tlp-button type="default" plain>默认按钮</Tlp-button>
      <Tlp-button type="primary" plain>主要按钮</Tlp-button>
      <Tlp-button type="success" plain>成功按钮</Tlp-button>
      <Tlp-button type="danger" plain>危险按钮</Tlp-button>
      <Tlp-button type="info" plain>介绍按钮</Tlp-button>
      <Tlp-button type="warn" plain>警告按钮</Tlp-button>
    </div>
    <div class="btn-round">
      <Tlp-button type="default" round>默认按钮</Tlp-button>
      <Tlp-button type="primary" round>主要按钮</Tlp-button>
      <Tlp-button type="success" round>成功按钮</Tlp-button>
      <Tlp-button type="danger" round>危险按钮</Tlp-button>
      <Tlp-button type="info" round>介绍按钮</Tlp-button>
      <Tlp-button type="warn" round>警告按钮</Tlp-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
       codeList: [
        { code: ' <Tlp-button type="default"  >默认按钮</Tlp-button>' },
        { code: ' <Tlp-button type="primary" >主要按钮</Tlp-button>' },
        { code: ' <Tlp-button type="success">成功按钮</Tlp-button>' },
        { code: ' <Tlp-button type="danger"  >危险按钮</Tlp-button>' },
        { code: ' <Tlp-button type="info" >信息按钮</Tlp-button>' },
        { code: ' <Tlp-button type="warn" >警告按钮</Tlp-button>' },
        { code: "" },
        { code: ' <Tlp-button type="default" plain>默认按钮</Tlp-button>' },
        { code: ' <Tlp-button type="primary" plain>主要按钮</Tlp-button>' },
        { code: ' <Tlp-button type="success" plain>成功按钮</Tlp-button>' },
        { code: ' <Tlp-button type="danger" plain>危险按钮</Tlp-button>' },
        { code: ' <Tlp-button type="info" plain>信息按钮</Tlp-button>' },
        { code: ' <Tlp-button type="warn" plain>警告按钮</Tlp-button>' },
        {code:''},
        { code: ' <Tlp-button type="default" round >圆角按钮</Tlp-button>' },
        { code: ' <Tlp-button type="primary" round>主要按钮</Tlp-button>' },
        { code: ' <Tlp-button type="success" round>成功按钮</Tlp-button>' },
        { code: ' <Tlp-button type="danger" round >危险按钮</Tlp-button>' },
        { code: ' <Tlp-button type="info" round>信息按钮</Tlp-button>' },
        { code: ' <Tlp-button type="warn" round>警告按钮</Tlp-button>' },
      ],
    };
  },
};
</script>
<style>
.btn01{
  margin-top: 20px;
}
.btn-default {
  width: 100%;
  margin: 10px;
}
.btn-plain {
  width: 100%;
  margin: 10px;
}
.btn-round{
  /* background-color: red; */
  margin-left: 14px;
}
</style>
