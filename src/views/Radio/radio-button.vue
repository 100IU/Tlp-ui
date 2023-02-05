<template>
  <div class="radio">
    <Tlp-radioGroup v-model="radio">
      <Tlp-radio-button label="上海">上海</Tlp-radio-button>
      <Tlp-radio-button label="北京">北京</Tlp-radio-button>
      <Tlp-radio-button label="深圳">深圳</Tlp-radio-button>
      <Tlp-radio-button label="重庆">重庆</Tlp-radio-button>
    </Tlp-radioGroup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "上海",
      codeList:[
        {code:'<Tlp-radio-button label="上海">上海</Tlp-radio-button>'},
        {code:'<Tlp-radio-button label="北京">北京</Tlp-radio-button>'},
        {code:'<Tlp-radio-button label="深圳">深圳</Tlp-radio-button>'},
        {code:'<Tlp-radio-button label="重庆>重庆</Tlp-radio-button>'},
      ]
    };
  },
};
</script>
<style scoped>
.radio {
  padding: 20px;
}
</style>
