<script setup></script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-4 offset-4">
        <div class="card bg-gray-100 p-2 mt-3">
          <AddSection :addNewTodo="addNewTodo" />
          <TodoList :todos="todos" @delete-todo="deleteTodoFromList" />
          <Summary :todos="todos" />
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import AddSection from "./components/addSection.vue";
import TodoList from "./components/todoList.vue";
import Summary from "./components/summarysection.vue";

import { ref } from "vue";
export default {
  components: {
    AddSection,
    TodoList,
    Summary,
  },
  setup() {
    const todos = ref([{ id: 1, text: "coding", done: false }]);
    const addNewTodo = (inputText) => {
      todos.value.push({
        id: new Date().getTime(),
        text: inputText,
        done: false,
      });
    };
    const deleteTodoFromList = (todo) => {
      todos.value = todos.value.filter((t) => t.id !== todo.id);
    };
    return {
      todos,
      addNewTodo,
      deleteTodoFromList,
    };
  },
};
</script>

