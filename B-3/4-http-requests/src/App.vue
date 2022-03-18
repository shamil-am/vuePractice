<template>
  <div class="container">
    <div class="row">
      <div class="col-4 offset-4">
        <ProductInput />
        <ProductList />
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import ProductInput from "./components/ProductInput.vue";
const API = "http://localhost:3000/products";
import axios from "axios";
//
export default {
  name: "App",
  components: {
    ProductList,
    ProductInput,
  },
  data() {
    return {
      provideData: {
        productList: [],
      },
    };
  },
  methods: {
    async addProducts(product) {
      let newProduct = { ...product, created_at: new Date().toLocaleString() };
      let response = await axios.post(API, newProduct);
      if (response.status !== 201) return;
      this.provideData.productList.push(product);
    },
    async deleteProduct(id) {
      let response = await axios.delete(`${API}/${id}`);
      if (response.status !== 200) return;
      this.provideData.productList = this.provideData.productList.filter(
        (product) => product.id !== id
      );
    },
  },
  async mounted() {
    let response = await axios.get(API);
    if (response.status !== 200) return;
    this.provideData.productList = response.data;
  },
  provide() {
    return {
      provideData: this.provideData,
      addProducts: this.addProducts,
      deleteProduct: this.deleteProduct,
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
