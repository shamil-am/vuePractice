<template>
  <div class="bg bg-primary">
    <h1>Green Component</h1>
    <input type="text" />
  </div>
</template>

<script>
export default {
  // mounted() {
  //   console.log("blue mounted");
  // },
  // unmounted() {
  //   console.log("blue unmounted");
  // },
  activated() {
    console.log("blue activated");
  },
  deactivated() {
    console.log("blue deactivated");
  },
};
</script>