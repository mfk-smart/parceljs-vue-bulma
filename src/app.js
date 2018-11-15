import Vue from 'vue'
import store from './store'
import router from './router'
import i18n from './locale'

import topmenu from './components/subcomponents/TopMenu'
import footercmp from './components/subcomponents/Footer'

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/404')
  } else {
    next()
  }
})

// eslint-disable-next-line
const app = new Vue({
  i18n,
  store,
  router,
  components: { topmenu, footercmp },
  data: {},
}).$mount('#app')
