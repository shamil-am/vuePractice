<template>
  <input
    type="text"
    name=""
    id=""
    v-model="newTodo"
    @keydown.enter="addTodo"
    class="w-100 mb-3 input-group"
    placeholder="ad todo"
  />
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      this.$emit("new-todo", this.newTodo);
      this.newTodo = "";
    },
  },
};
</script>
