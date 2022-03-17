const app = Vue.createApp({
  data() {
    return {
      showHide: false,
      isBig: false,
      boxClass: "red mborder",
      colorFromInput: "red", 
    };
  },
  computed: {
    computeStyle() {
      return {
        mdborder: this.showHide,
        xlSize: this.isBig,
        red: this.showHide,
      };
    },
  },
});
app.mount("#app");
