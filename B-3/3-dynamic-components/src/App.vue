<template>
  <div class="container">
    <div class="row">
      <div class="col-4 offset-4 my-2">
        <!-- <button class="btn btn-danger" @click="currentPage = 'red'">Red</button>
        <button class="btn btn-success" @click="currentPage = 'green'">
          Green
        </button>
        <button class="btn btn-primary" @click="currentPage = 'blue'">
          Blue
        </button> -->
        <button class="btn btn-danger" @click="currentPage = 'RedBg'">
          Red
        </button>
        <!-- <button class="btn btn-success" @click="currentPage = 'GreenBg'">
          Green
        </button> -->
        <button class="btn btn-primary" @click="currentPage = 'BlueBg'">
          Blue
        </button>
      </div>
    </div>
    <div class="row">
      <!-- <div class="col-6 offset-3">
        <RedBg v-if="currentPage === 'red'" />
        <GreenBg v-else-if="currentPage === 'green'" />
        <BlueBg v-else />
      </div> -->
      <div class="col-6 offset-3">
        <keep-alive>
          <component :is="currentPage" msg="from component" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import RedBg from "./components/RedBg.vue";
import GreenBg from "./components/GreenBg.vue";
import BlueBg from "./components/BlueBg.vue";
export default {
  name: "App",
  components: {
    RedBg,
    GreenBg,
    BlueBg,
  },
  data() {
    return {
      // currentPage: "red",
      currentPage: "RedBg",
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
  margin-top: 60px;
}
</style>
