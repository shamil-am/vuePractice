<template>
  <div>
    <!-- <Screen :count="count" /> -->
    <Screen />
    <CounterButtons :add="plus" :remove="minus" />
  </div>
</template>

<script>
import Screen from "./components/ScreenCount.vue";
import CounterButtons from "./components/CounterButtons.vue";
export default {
  name: "App",
  components: {
    Screen,
    CounterButtons,
  },
  data() {
    return {
      provideData: {
        count: 5,
      },
    };
  },
  methods: {
    plus() {
      this.provideData.count = this.provideData.count + 2;
    },
    minus() {
      this.count = this.count - 1;
    },
  },
  provide() {
    return {
      count: this.provideData,
      add: this.plus,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
