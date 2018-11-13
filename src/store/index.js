import Vue from 'vue'
import Vuex from 'vuex'

// StoreImports
import TopMenu from '../components/subcomponents/TopMenu/store/'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    TopMenu,
  },
})
