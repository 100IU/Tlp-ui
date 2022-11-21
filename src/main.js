import Vue from 'vue'
import App from './App.vue'
import './assets/common.less'
import './assets/mobile.less'
import './assets/pc.less'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


