<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <h4>{{ productInfo.name }}</h4>
    <button class="btn btn-danger" @click="deleteProduct(productInfo.id)">
      X
    </button>
  </li>
</template>

<script>
export default {
  props: ["productInfo"],
  inject: ["deleteProduct"],
};
</script>