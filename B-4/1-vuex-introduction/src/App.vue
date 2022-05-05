<template>
  <div>
    <h1 class="text-danger">{{ $store.state.person.name }}</h1>
    <p v-for="item in fromStore" :key="item.id">
      {{ item.title }} - {{ item.type }}
    </p>
    <hr />
    <hr />
    <p class="text-danger" v-for="item in fromStoreGetter" :key="item.id">
      {{ item.title }} - {{ item.type }}
    </p>
    <!--!reactiv add etme -->
    <button @click="addProduct">add iphone 13</button>
    <p class="text-danger" v-for="item in _electronicItems" :key="item.id">
      {{ item.title }} - {{ item.type }}
    </p>
    <hr />
    <hr />
    <!-- mutation ile add etme -->
    <button @click="addFurnitureC">add shelf</button>
    <p class="text-danger" v-for="item in _furniture" :key="item.id">
      {{ item.title }} - {{ item.type }}
    </p>
    <hr />
    <hr />
    <!-- actions ile add etme -->
    <button @click="addFurnitureD">add shelf</button>
    <p class="text-danger" v-for="item in _furniture" :key="item.id">
      {{ item.title }} - {{ item.type }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      fromStore: [],
      fromStoreGetter: [],
    };
  },

  mounted() {
    // console.log(
    //   this.$store.state.itemList.filter((item) => item.type === "mobilya")
    // );
    this.fromStore = this.$store.state.itemList.filter(
      (item) => item.type === "mobilya"
    );
    //!getters
    // console.log(this.$store.getters.electronicItems);
    this.fromStoreGetter = this.$store.getters._electronicItems;
    //!changed some data in store
    console.log(this.$store.state.person);
    console.log(this.$store.getters.person);
  },
  methods: {
    addProduct() {
      this.$store.state.itemList.push({
        id: 6,
        title: "Iphone",
        type: "elektronik",
      });
      console.log(this.$store.state.itemList);
    },
    //!mutation ile add olunur
    addFurnitureC() {
      this.$store.commit("addNewItem", {
        id: 2,
        title: "Raf",
        type: "mobilya",
      });
    },
    addFurnitureD() {
      this.$store.dispatch("addNewItemA", {
        id: 2,
        title: "Raf",
        type: "mobilya",
      });
    },
  },
  // computed: {
  //   elektronikKategori() {
  //     return this.$store.getters.electronicItems;
  //   },
  // },
  // computed: mapGetters(["electronicItems"]),
  computed: {
    ...mapGetters(["_electronicItems", "_person", "_furniture"]),
    // customComputed1() {},
    // customComputed2() {},
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
