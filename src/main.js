import Vue from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  loading:'https://cdnimg.vivaia.com/VA/image/Banner/20230919_6294/2862c4e09c5a8f67149e53a0d81d62fd.jpg' 
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
