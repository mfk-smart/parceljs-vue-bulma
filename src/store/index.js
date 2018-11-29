import Vue from 'vue'
import Vuex from 'vuex'

// StoreImports
import TopNavBar from '../components/subcomponents/TopNavBar/store'
import PageSM from '../components/pages/PageSM/store'
import SideMenu from '../components/subcomponents/SideMenu/store'
import AboutPage from '../components/pages/AboutPage/store'
import TopMenu from '../components/subcomponents/TopMenu/store/'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    TopNavBar,
    PageSM,
    SideMenu,
    AboutPage,
    TopMenu,
  },
})
