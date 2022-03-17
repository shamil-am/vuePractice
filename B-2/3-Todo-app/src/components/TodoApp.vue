<template>
  <div>
    <TodoInput @new-todo="addTodo" />
    <h5 v-if="todos.length === 0" class="text-center">Loading...</h5>
    <TodoList :todos="todos" @remove-todo="removeTodo" v-else />

    <button @click="removeAll" class="btn btn-warning">clear</button>
  </div>
</template>

<script>
import TodoInput from "./TodoInput.vue";
import TodoList from "./TodoList.vue";
export default {
  components: {
    TodoInput,
    TodoList,
  },
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.todos = [
        { id: 1, name: "Coding Vue JS" },
        { id: 2, name: "Reading book" },
        { id: 3, name: "Listening music" },
        { id: 4, name: "Sport" },
      ];
    }, 2000);
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push({ id: Date.now(), name: newTodo });
    },
    removeTodo(todoDel) {
      this.todos = this.todos.filter((todo) => todo.name !== todoDel);
    },
    removeAll() {
      this.todos = [];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>