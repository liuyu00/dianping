import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installComponent from './plugins/installComponent'
import api from './api'
import ElementUI from 'element-ui'
import './assets/css/reset.css'

Vue.use(ElementUI)
Vue.use(installComponent)
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
