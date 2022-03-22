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
      <div class="col-12 col-md-6 col-lg-10" v-if="_isAuthenticated">
        <h1>Welcome back! {{ this.$store.getters._getCurrentUser.fullName }}</h1>
        <Bookmarklist />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Home/Sidebar.vue";
import Bookmarklist from "../components/Home/BookmarkList.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Sidebar,
    Bookmarklist,
  },
  computed: {
    ...mapGetters(["_isAuthenticated"]),
  },
};
</script>