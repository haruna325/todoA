import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[],
    sequence:1

  },
  mutations: {
    addtodos(state,todo){
      state.todos.push(todo)
    },
    deletetodos(state,index){
      state.todo.splice(index,1)
    }
  },
  actions: {
    addtodos({commit},todo){
      commit("addtodos",todo)
    },
    deletetodos({commit},todo){
      commit('deletetodos',todo)
    }    
  },
  getters: {
  }
})
