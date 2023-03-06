<template>
  <div>
    <div class="s0">
      <h3><a>¶</a>
        InfiniteScroll 无限滚动
      </h3>
      <span>滚动至底部时，加载更多数据。</span>
    </div>
    <div class="s0">
      <h3><a>¶</a>
        基础用法
      </h3>

    </div>
    <ShowCode>
      <Default></Default>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>
        禁用加载
      </h3>

    </div>
    <ShowCode>
      <Load></Load>
    </ShowCode>
  </div>
</template>

<script>
import ShowCode from '@/components/ShowCode.vue'
import Default from './default.vue'
import Load from './load.vue'

export default {
  data () {
    return {}
  },
  components: { ShowCode, Default, Load }
}
</script>
<style scoped lang="less">
.tlp {
  display: block;
}

.s0 {
  text-align: left;
  margin-top: 50px;

  h3 {
    margin-bottom: 10px;

    color: var(--color);

    a {
      padding-right: 4px;
      opacity: 0;
      cursor: pointer;
      color: rgb(171, 164, 164)
    }

    &:hover a {
      opacity: 1;
    }
  }

  span {
    color: #5e6d82;
    font-size: 14px;
    margin-left: 18px;
  }
}
</style>
