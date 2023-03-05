import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ShowCode from './components/ShowCode'
import tlpmentui from 'tlpment-ui'
import 'tlpment-ui/dist/tlp-ui.css'

Vue.use(tlpmentui)

Vue.component('ShowCode', ShowCode)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

