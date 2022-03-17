const app = Vue.createApp({});

app.component("counter-item", {
  data() {
    return {
      count: 0,
    };
  },
  template: `
  <div class="counter">
      <div class="buttons">
        <button class="btn btn-success" @click="count++">+</button>
        <button class="btn btn-danger" @click="count--">-</button>
        <h3 class="text-center">{{count}}</h3>
      </div>
  </div> 
  `,
});

app.mount("#app");
