import Vue from 'vue'
import store from './store'
import router from './router'
import i18n from './locale'

//Vue.use(require('vue-moment'))

// eslint-disable-next-line
const app = new Vue({
  i18n,
  store,
  router,
  data: {},
}).$mount('#app')
