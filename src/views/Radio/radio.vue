<template>
  <div>
    <div class="s0">
      <h3><a>¶</a>
        Radio 单选框</h3>
      <span>在一组备选项中进行单选</span>
    </div>
    <div class="s0">
      <h3><a>¶</a>
        基础用法</h3>
      <!-- <span>由于</span> -->
    </div>
    <ShowCode desc="使用 Radio 组件，设置v-model绑定变量，选中变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。">
      <radioDefault></radioDefault>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>
        禁用状态</h3>
      <span>单选框变为不可用状态</span>
    </div>
    <ShowCode desc="设置disabled属性即可，它接受一个Boolean，true为禁用。">
      <radioDisabled></radioDisabled>
    </ShowCode>
    <div class="s0">
      <h3><a>¶</a>
        单选框按钮</h3>
      <span>按钮样式的单选框组合</span>
    </div>
    <ShowCode desc="只需要把tlp-radio元素换成tlp-radio-button元素即可">
      <radioButton></radioButton>
    </ShowCode>
    <!-- <button></button> -->
    <!-- <span @click="count++">{{ count }}</span> -->
  </div>
</template>

<script>
import radioDefault from './radio-default.vue'
import radioButton from './radio-button.vue'
import radioDisabled from './radio-disabled.vue'
import ShowCode from '@/components/ShowCode.vue'

export default {
  components: {
    radioDefault,
    radioButton,
    radioDisabled,
    ShowCode
  },
  data () {
    return {
      count: 0
    }
  }

}
</script>
<style scoped lang="less">
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
    color: var(--color);
    font-size: 14px;
    margin-left: 18px;
  }
}
</style>
