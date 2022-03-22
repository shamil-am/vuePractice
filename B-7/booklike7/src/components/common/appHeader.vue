<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid p-0">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link btn btn-primary text-light" :to="{ name: 'NewBookMarkPage' }">+ NEW</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle justify-content-end"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ this.$store.getters._getCurrentUser?.fullName }}
              <!-- {{ this.$store.state.user?.fullName || 'Guest' }} -->
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Account</a></li>
              <li><a class="dropdown-item" href="#">Favorites</a></li>
              <li><a class="dropdown-item" @click="onLogout">-> Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    onLogout() {
      let response = confirm("Are u sure?");
      if (!response) return;
      this.$store.commit("logoutUser");
      // !after logout go to login page
      this.$router.push({ name: "LoginPage" });
    },
  },
};
</script>