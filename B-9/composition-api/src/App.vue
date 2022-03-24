<template>
  <h1>
    {{ title }}
  </h1>
</template>

<script>
export default {
  data() {
    return {
      title: "Sample header from title",
    };
  },
  // beforeCreate() {
  //   console.log("bc");
  // },
  // created() {
  //   console.log("c");
  // },
  setup() {
    console.log("s");
  },
};
</script>