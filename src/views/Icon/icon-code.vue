<template>
  <div style="margin: 20px;">
    <Tlp-icon icon="set" size="plus"></Tlp-icon>
    <Tlp-icon icon="delete" size="medium"></Tlp-icon>
    <Tlp-icon icon="clear" size="small"></Tlp-icon>
    <!-- <Tlp-icon icon="alert" size="mini"></Tlp-icon> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      codeList: [
        { code: '<Tlp-icon icon="set" size="plus"></Tlp-icon>' },
        { code: '<Tlp-icon icon="delete" size="medium"></Tlp-icon>' },
        { code: '<Tlp-icon icon="clear" size="small"></Tlp-icon>' },
        
      ],
    };
  },
};
</script>
<style scoped>

</style>
