import Vue from 'vue'
import store from './store'
import router from './router'

Vue.use(require('vue-moment'))

// eslint-disable-next-line
const app = new Vue({
  store,
  router,
  data: {},
}).$mount('#app')
