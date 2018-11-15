import Vue from 'vue'
import VueRouter from 'vue-router'

// RouteImports
import NotFoundPage from '../components/pages/NotFoundPage/route'
import AboutPage from '../components/pages/AboutPage/route'
import HomePage from '../components/pages/HomePage/route'
// import PageNotFound from '../components/pages/PageNotFound/route'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    NotFoundPage,
    AboutPage,
    HomePage,
    // PageNotFound,
  ],
})
