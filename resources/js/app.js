import App from './App.vue'
import Vue from 'vue'
import vuetify from './vuetify'

Vue.use(Vuetify)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
