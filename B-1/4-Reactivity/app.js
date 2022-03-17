Vue.createApp({
  data() {
    return {
      searchedFruit: "",
      fruitList: ["apple", "beach", "cherry", "strawberry"],
      // showList: ["apple", "beach", "cherry", "strawberry"],
    };
  },
  methods: {
    // filterFruits() {
      //   this.showList = this.fruitList.filter((fruit) => {
      //     if (fruit.includes(this.searchedFruit)) {
      //       return fruit;
      //     }
      //   });
    // },
  },
  computed: {
    showList() {
      return this.fruitList.filter((fruit) =>
        fruit.includes(this.searchedFruit)
      );
    },
  },
}).mount("#app");
