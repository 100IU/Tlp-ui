import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isDark: false
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
export default store
