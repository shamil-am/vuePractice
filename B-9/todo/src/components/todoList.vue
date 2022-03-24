<template>
  <ul class="list-group">
    <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" @delete-todo="$emit('delete-todo', $event)" />
  </ul>
</template>


<script>
import TodoListItem from "./todoListItem.vue";
import { computed } from "vue";
export default {
  components: {
    TodoListItem,
  },
  props: {
    todos: {
      type: Array,
    },
  },
  setup(props, { emit }) {
    const count = computed(() => {
      return props.todos.length;
    });
    //
    return {
      count,
    };
  },
};
</script>