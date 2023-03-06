<template>
  <div>
    <div class="icon">
      <div class="s0">
        <h2> <a>¶</a>Icon 图标</h2>

        <span>提供了一套常用的图标集合</span>
      </div>
      <div class="s0">
        <h2> <a>¶</a>使用方法</h2>
        <span>直接通过设置icon='icon-name' 来使用即可。例如:</span>
      </div>
      <ShowCode>
        <IconCode></IconCode>
      </ShowCode>
    </div>
    <div class="s0">
      <h2> <a>¶</a>图标集合</h2>

    </div>
    <div class="icon-list">
      <Tlp-icon icon="right1" class="icon-one" size="medium">
        <span class="icon-text">right</span>
      </Tlp-icon>
      <Tlp-icon icon="left_one" class="icon-one" size="medium">
        <span class="icon-text">left</span>
      </Tlp-icon>
      <Tlp-icon icon="up_" class="icon-one" size="medium">
        <span class="icon-text">up</span>
      </Tlp-icon>
      <Tlp-icon icon="down_" class="icon-one" size="medium">
        <span class="icon-text">down</span>
      </Tlp-icon>
      <Tlp-icon icon="error" class="icon-one" size="medium">
        <span class="icon-text">error</span>
      </Tlp-icon>
      <Tlp-icon icon="zhuye1" class="icon-one" size="medium">
        <span class="icon-text">home</span>
      </Tlp-icon>
      <Tlp-icon icon="home" class="icon-one" size="medium">
        <span class="icon-text">home-outline</span>
      </Tlp-icon>
      <Tlp-icon icon="more" class="icon-one" size="medium">
        <span class="icon-text">more</span>
      </Tlp-icon>
      <Tlp-icon icon="delete" class="icon-one" size="medium">
        <span class="icon-text">delete</span>
      </Tlp-icon>
      <Tlp-icon icon="delete-outline" class="icon-one" size="medium">
        <span class="icon-text">delete-outline</span>
      </Tlp-icon>
      <Tlp-icon icon="set" class="icon-one" size="medium">
        <span class="icon-text">set</span>
      </Tlp-icon>
      <Tlp-icon icon="set-outline" class="icon-one" size="medium">
        <span class="icon-text">set-outline</span>
      </Tlp-icon>
      <Tlp-icon icon="jia" class="icon-one" size="medium">
        <span class="icon-text">plus</span>
      </Tlp-icon>
      <Tlp-icon icon="jian" class="icon-one" size="medium">
        <span class="icon-text">minus</span>
      </Tlp-icon>
      <Tlp-icon icon="search" class="icon-one" size="medium">
        <span class="icon-text">search</span>
      </Tlp-icon>

      <Tlp-icon icon="search-outline" class="icon-one" size="medium">
        <span class="icon-text">search-outline</span>
      </Tlp-icon>
      <Tlp-icon icon="clear" class="icon-one" size="medium">
        <span class="icon-text">clear</span>
      </Tlp-icon>
      <Tlp-icon icon="upload" class="icon-one" size="medium">
        <span class="icon-text">upload</span>
      </Tlp-icon>
      <Tlp-icon icon="bottom" class="icon-one" size="medium">
        <span class="icon-text">bottom</span>
      </Tlp-icon>
      <Tlp-icon icon="star" class="icon-one" size="medium">
        <span class="icon-text">star</span>
      </Tlp-icon>
      <Tlp-icon icon="showCode" class="icon-one" size="medium">
        <span class="icon-text">showCode</span>
      </Tlp-icon>
      <Tlp-icon icon="right1" class="icon-one" size="medium">
        <span class="icon-text">right_one</span>
      </Tlp-icon>
      <Tlp-icon icon="Close" class="icon-one" size="medium">
        <span class="icon-text">close</span>
      </Tlp-icon>
      <Tlp-icon icon="alert" class="icon-one" size="medium">
        <span class="icon-text">alert</span>
      </Tlp-icon>
      <Tlp-icon icon="left_two" class="icon-one" size="medium">
        <span class="icon-text">left_one</span>
      </Tlp-icon>
      <Tlp-icon icon="check" class="icon-one" size="medium">
        <span class="icon-text">check</span>
      </Tlp-icon>
      <Tlp-icon icon="pause" class="icon-one" size="medium">
        <span class="icon-text">paused</span>
      </Tlp-icon>
      <Tlp-icon icon="play" class="icon-one" size="medium">
        <span class="icon-text">play</span>
      </Tlp-icon>
      <Tlp-icon icon="success" class="icon-one" size="medium">
        <span class="icon-text">success</span>
      </Tlp-icon>
      <Tlp-icon icon="fail" class="icon-one" size="medium">
        <span class="icon-text">fail</span>
      </Tlp-icon>
      <Tlp-icon icon="warn" class="icon-one" size="medium">
        <span class="icon-text">warn</span>
      </Tlp-icon>
    </div>
  </div>
</template>

<script>
import IconCode from './icon-code.vue'
export default {
  components: {
    IconCode
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.s0 {
  text-align: left;
  margin-top: 50px;

  h2 {
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

.icon-list {
  cursor: pointer;
  padding: 10px 0;
  display: flex;
  width: 80%;
  flex-wrap: wrap;
}

.icon-one {
  /* width: 18%; */
  width: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  padding: 0 20px;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  border-top: 1px solid #eee;
}

.icon-one .tlp-icon {
  align-items: center;
  margin-bottom: 10px;
}

.icon-text {
  text-align: center;
}

.icon-one:hover {
  color: #409eff;
}

.icon-one:nth-last-child(1) {
  border-bottom: 1px solid #eee;
}

.icon-one:nth-last-child(2) {
  border-bottom: 1px solid #eee;
}

.icon-one:nth-last-child(3) {
  border-bottom: 1px solid #eee;
}

.icon-one:nth-last-child(4) {
  border-bottom: 1px solid #eee;
}

.icon-one:nth-last-child(5) {
  border-bottom: 1px solid #eee;
}
</style>
