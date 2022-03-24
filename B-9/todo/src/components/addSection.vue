<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="todo" @keydown.enter="addFn" />
  </div>
</template>


<script>
// import { ref } from "vue";
export default {
  props: {
    addNewTodo: {
      type: Function,
    },
  },
  setup(props) {
    const addFn = (event) => {
      props.addNewTodo(event.target.value);
      //   reset
      event.target.value = "";
    };
    return {
      addFn,
    };
  },
};
</script>