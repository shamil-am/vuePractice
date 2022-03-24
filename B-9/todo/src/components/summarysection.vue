<template>
  <div class="d-flex flex-column">
    <small class="text-danger">Uncomplited-{{uncomplited}}</small>
    <small class="text-success">Complited-{{ complited }}</small>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    todos: {
      type: Array,
    },
  },
  setup(props) {
    const complited = computed(() => {
      return props.todos.filter((t) => t.done).length;
    });
    const uncomplited = computed(() => {
      return props.todos.filter((t) => !t.done).length;
    });
    return {
      complited,
      uncomplited
    };
  },
};
</script>