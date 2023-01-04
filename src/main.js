import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

global.jQuery = require('jquery');
window.$ = jQuery
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
