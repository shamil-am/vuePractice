<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <input v-model="todo.done" type="checkbox" />
    <span>{{ todo.text }}</span>
    <button class="btn btn-danger" @click="deleteTodo">X</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
    },
  },
  setup({ todo }, { emit }) {
    const deleteTodo = () => {
      emit("delete-todo", todo);
    };

    return {
      deleteTodo,
    };
  },
};
</script>