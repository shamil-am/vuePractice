Vue.createApp({
  data() {
    return {
      name: "",
    };
  },
  methods: {
    printName(msg) {
      alert(`${msg} ${this.name}`);
    },
  },
}).mount("#app");
