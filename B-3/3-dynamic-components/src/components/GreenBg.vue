<template>
  <div class="bg bg-success">
    <h1>Green Component</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
    },
  },
};
</script>