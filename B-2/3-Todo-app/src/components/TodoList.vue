<template>
  <ul>
    <SingleTodo
      v-for="todo in todos"
      :key="todo.id"
      :todoName="todo.name"
      @remove-todo="$emit('remove-Todo', $event)"
    />
  </ul>
</template>

<script>
import SingleTodo from "./SingleTodo.vue";

export default {
  components: {
    SingleTodo,
  },
  props: {
    todos: {
      type: Array,
      required: false,
    },
  },
};
</script>