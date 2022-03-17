<template>
  <button @click="add">+1</button>
</template>

<script>
export default {
  // props: ["add"]
  inject: ["add"]
};
</script>

