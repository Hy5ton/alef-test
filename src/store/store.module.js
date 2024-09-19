import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const userModule = {
  namespaced: true,

  state: {
    userData: {},
  },

  mutations: {
    setUserData(state, userData) {
      state.userData = userData
    },
  },
}

export default new Vuex.Store({
  modules: {
    user: userModule,
  },
})