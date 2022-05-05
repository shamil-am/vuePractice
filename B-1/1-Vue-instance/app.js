Vue.createApp({
  data() {
    return {
      message: "Hello vue!",
      content: "Test content",
      url: {
        pageName: "Facebook,Twitter",
        target: "_blank",
        pageUrl: "http://facebook.com",
      },
    };
  },
  methods: {
    changeTitle() {
      this.message = "good bye React";
    },
    mouseMove(event, par) {
      console.log(par);

      this.target = {
        x: event.offsetX,
        y: event.offsetY,
      };
    },
  },
}).mount("#app");
