<template>
  <TlpSkeleton :rows="4" style="margin: 20px"> </TlpSkeleton>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      codeList: [
        {
          code: '<TlpSkeleton :rows="4" /> ',
        },
      ],
    };
  },
};
</script>
<style scoped></style>
