const app = Vue.createApp({
  data() {
    return {
      title: "This is title from data!",
      itemsFromDb: [],
    };
  },
  beforeCreate() {
    console.log("Started.. beforeCreate");
  },
  created() {
    console.log("Started.. created");
    setTimeout(() => {
      this.itemsFromDb = [1, 2, 3, 4, 5];
    }, 2000);
  },
  beforeMount() {
    console.log("Started.. beforeMount");
  },
  mounted() {
    console.log("Started.. mounted");
  },
  beforeUpdate() {
    console.log("Started.. beforeUpdate");
  },
  updated() {
    console.log("Started.. updated");
  },
  beforeUnmount() {
    console.log("Started.. beforeUnmount");
  },
  unmounted() {
    console.log("Started.. unmounted");
  },
});
app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 5000);
