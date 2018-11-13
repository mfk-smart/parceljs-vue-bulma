import Vue from 'vue'
import VueRouter from 'vue-router'

// RouteImports
import HomePage from '../components/pages/HomePage/route'
// import PageNotFound from '../components/pages/PageNotFound/route'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    HomePage,
    // PageNotFound,
  ],
})
