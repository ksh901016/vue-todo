import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
  fetch(){
    const arr = [];
      if(localStorage.length > 0){
        for(let i=0; i<localStorage.length; i++){
          if(localStorage.key(i) !== 'loglevel:webpack-dev-server' && localStorage.key(i) !== "randid"){
            arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
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
    addTodo(state, payload){
      // localStorage에 추가
      localStorage.setItem(payload.item, JSON.stringify(payload));
      state.todoItems.push(payload);
    },
    removeTodo(state, payload) {
      localStorage.removeItem(payload.todoItem);
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload){
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAll(state){
      localStorage.clear();
      state.todoItems = [];
    }
  }
});
