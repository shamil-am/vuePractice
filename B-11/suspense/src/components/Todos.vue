<template>
  <div>
    <h1>Todos</h1>
    <hr />
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const todos = ref([]);
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((result) => (todos.value = result));
</script>