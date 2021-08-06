import App from './App.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

new Vue({
  render: h => h(App)
}).$mount('#app')
