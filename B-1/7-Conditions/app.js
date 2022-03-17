Vue.createApp({
  data() {
    return {
      showContainer: true,
      counter: 0,
    };
  },
  computed: {
    bgColor() {
      return {
        "alert-danger": this.counter < 0,
        "alert-success": this.counter > 0,
      };
    },
  },
}).mount("#app");
