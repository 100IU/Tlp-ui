<template>
  <div style="padding: 20px">
    <Tlp-checkbox-button
      v-for="city in cityOptions"
      :label="city"
      :key="city"
      >{{ city }}</Tlp-checkbox-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityOptions: ["上海", "北京", "广州", "深圳"],
      codeList: [
        {
          code: '<Tlp-checkbox-button v-for="city in cityOptions" :label="city" :key="city">{{ city }}</Tlp-checkbox-button>',
        },
      ],
    };
  },
};
</script>
