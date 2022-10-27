import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import VueGtag from "vue-gtag"
import VueResource from 'vue-resource'

Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(VueGtag, {
  config: { id: "G-NKX058BD0G" }
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
