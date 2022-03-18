<template>
  <ul class="list-group">
    <ProductItem
      v-for="product in provideData.productList"
      :key="product.id"
      :productInfo="product"
    />
  </ul>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  components: {
    ProductItem,
  },
  inject: ["provideData"],
};
</script>