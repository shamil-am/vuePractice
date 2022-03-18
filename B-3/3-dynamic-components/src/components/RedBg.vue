<template>
  <div class="bg bg-danger">
    <h1>Red Component</h1>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  props: ["msg"],
};
</script>