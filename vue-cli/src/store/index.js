import Vue from 'vue'
import Vuex from 'vuex'

let store = new Vuex.Store({
  state: {
    storeVal: 0
  },
  getters: {},
  actions: {},
  mutations: {
    storeVal (state, value) {
      state.storeVal = value
    }
  }
})

export default store