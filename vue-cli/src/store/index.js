import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeVal: 0
  },
  getters: {},
  actions: {},
  mutations: {
    setStoreVal (state, value) {
      state.storeVal = value
    }
  }
})