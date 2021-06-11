import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dialog: false
  },
  mutations: {
    openDialog(state){
      state.dialog=true
    },
    closeDialog(state){
      state.dialog=false
    }
  },
  actions: {
  },
  modules: {
  }
})
