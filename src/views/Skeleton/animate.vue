<template>
  <TlpSkeleton :rows="4" animated style="margin: 20px"> </TlpSkeleton>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      codeList: [
        {
          code: '<TlpSkeleton :rows="4" animated />',
        },
      ],
    };
  },
};
</script>
<style scoped></style>
