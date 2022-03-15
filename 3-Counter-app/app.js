Vue.createApp({
  data() {
    return {
      count: 0,
      count2: 0,
    };
  },
  // methods: {
  //   getCounterResult() {
  //     console.log("Counter 1 changed!");
  //     return this.count > 5 ? "5den boyuk" : "5den kicik";
  //   },
  //   getCounter2Result() {
  //     console.log("Counter 2 changed!");
  //     return this.count2 > 5 ? "5den boyuk" : "5den kicik";
  //   },
  // },
  computed: {
    getCounterResult() {
      console.log("Counter 1 changed!");
      return this.count > 5 ? "5den boyuk" : "5den kicik";
    },
    getCounter2Result() {
      console.log("Counter 2 changed!");
      return this.count2 > 5 ? "5den boyuk" : "5den kicik";
    },
  },
}).mount("#app");
