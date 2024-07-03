import Vue from 'vue'
import { PiniaVuePlugin, createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@unocss/reset/normalize.css'
import 'virtual:uno.css'

Vue.use(PiniaVuePlugin)

new Vue({
  router,
  pinia: createPinia(),
  render: h => h(App),
}).$mount('#app')
