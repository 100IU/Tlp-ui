<template>
  <div class="">
    <Tlp-pagination :total="1000" @current-change="handelCurrentpage" :current-page.sync="currentPage"
      :pageSize="options" background></Tlp-pagination>

  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1,
      options: [
        { value: "1条每页" },
        { value: "10条每页" },
        { value: "100条每页" },
        { value: "200条每页" },

      ],
      codeList: [
        { code: '<Tlp-pagination :total="1000" @current-change="handelCurrentpage" :current-page.sync="currentPage"' },
        {code:':pageSize="options" background'},
        {code:'</Tlp-pagination>'}
      ]
    };
  },
  methods: {
    handelCurrentpage (val) {
      console.log(this.$refs.icon);
    },
  },
};
</script>
<style scoped>

</style>
