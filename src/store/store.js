import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
  fetch(){
    const arr = [];
      if(localStorage.length > 0){
        for(let i=0; i<localStorage.length; i++){
          if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
            arr.push(localStorage.key(i));
          }
        }
      }
    return arr;
  }
};

export const store = new Vuex.Store({
  state : {
    todoItems : storage.fetch()
  },

  mutations : {
    addTodo(state, todoItem){
      // localStorage에 추가
      localStorage.setItem(todoItem, todoItem);
      state.todoItems.push(todoItem);
    },
    removeTodo(state, payload) {
      localStorage.removeItem(payload.todoItem);
      state.todoItems.splice(payload.index, 1);
    }
  }
});
