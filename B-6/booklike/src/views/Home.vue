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
      <div class="col-12 col-md-6 col-lg-8" v-if="_isAuthenticated">
        <h1>Welcome back! {{ this.$store.getters._getCurrentUser.fullName }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Home/Sidebar.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Sidebar,
  },
  computed: {
    ...mapGetters(["_isAuthenticated"]),
  },
};
</script>