<template>
  <div class="">
    <Tlp-pagination
      :total="100"
      @current-change="handelCurrentpage"
      :current-page.sync="currentPage"
      :pageSize="options"
    ></Tlp-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      options: [
        { value: "1条每页" },
        { value: "10条每页" },
        { value: "100条每页" },
        { value: "200条每页" },
      ],
      codeList: [
        {
          code: '<Tlp-pagination :total="1000" @current-change="handelCurrentpage" :current-page.sync="currentPage"',
        },
        { code: ':pageSize="options" background' },
        { code: "</Tlp-pagination>" },
      ],
    };
  },
  methods: {
    handelCurrentpage(val) {
      console.log(val);
    },
  },
};
</script>
<style scoped></style>
