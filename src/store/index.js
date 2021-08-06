import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[]

  },
  mutations: {
    addtodos(state,todo){
      state.todos.push(todo)
    }
  },
  actions: {
    addtodos({commit},todo){
      commit("addtodos",todo)
    },
    
  },
  getters: {
  }
})
