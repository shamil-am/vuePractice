<template>
  <input
    placeholder="add products"
    type="text"
    class="w-100"
    v-model="product.name"
    @keydown.enter="productHandler"
  />
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: "",
      },
    };
  },
  methods: {
    productHandler() {
      this.addProducts(this.product);
      this.product = {
        name: "",
      };
    },
  },
  inject: ["addProducts"],
};
</script>