<template>
  <div id="app">
    <TodoHeader></ToDoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
  /* 컴포넌트 불러오기 */
  import TodoHeader from "./components/TodoHeader.vue"
  import TodoInput from "./components/TodoInput.vue"
  import TodoList from "./components/TodoList.vue"
  import TodoFooter from "./components/TodoFooter.vue"

export default {
  /* 컴포넌트 등록  */
  components : {
    "TodoHeader" : TodoHeader,
    "TodoInput" : TodoInput,
    "TodoList" : TodoList,
    "TodoFooter" : TodoFooter
  }
}
</script>

<style>

</style>
