<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-3">
        <app-header></app-header>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-2">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Home/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
};
</script>