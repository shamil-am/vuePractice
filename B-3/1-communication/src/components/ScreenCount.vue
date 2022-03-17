<template>
  <h1>{{ count.count }}</h1>
</template>

<script>
export default {
  // props: ["count"],
  inject: ["count"]
};
</script>

