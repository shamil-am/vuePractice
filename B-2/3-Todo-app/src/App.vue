<template>
  <div class="container">
    <div class="row">
      <div class="col-4 offset-4" >
        <h3 class="text-center">Todo App</h3>
        <TodoApp />
      </div>
    </div>
  </div>
</template>


<script>
import TodoApp from "./components/TodoApp.vue";
export default {
  components: {
    TodoApp,
  },
};
</script>