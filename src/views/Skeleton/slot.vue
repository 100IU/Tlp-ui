<template>
  <TlpSkeleton :rows="4" animated style="margin: 20px">
    <template #append>
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      />
    </template>
  </TlpSkeleton>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      codeList: [
        { code: '<TlpSkeleton :rows="4" animated >' },
        {
          code: `<template #append>`,
        },
        { code: "<img" },
        {
          code: '  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"/>',
        },
        { code: "</template>" },
        { code: "</TlpSkeleton>" },
      ],
    };
  },
};
</script>
<style scoped></style>
