<template>
  <li
    class="
      d-flex
      justify-content-between
      border border-primary
      rounded
      mb-3
      p-2
    "
  >
    <h6>{{ todoName }}</h6>
    <!-- <button class="btn btn-danger" @click="removeTodo">Remove</button> -->
    <button class="btn btn-danger" @click="$emit('remove-todo',todoName)">Remove</button>
  </li>
</template>

<script>
export default {
  props: ["todoName"],
};
</script>