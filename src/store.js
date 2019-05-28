import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authType: 'dd'

  },
  getters: {
    authType: state => {
      return state.authType
    }

  },
  mutations: {

  },
  actions: {

  }
})
