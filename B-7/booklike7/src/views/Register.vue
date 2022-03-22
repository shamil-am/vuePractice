<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6 col-lg-4">
      <form class="border border-secondary rounded-3 p-5 mt-5">
        <div class="mb-3">
          <label class="form-label">Fullname</label>
          <input type="text" class="form-control" v-model="userData.fullName" />
        </div>
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input type="text" class="form-control" v-model="userData.username" />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" v-model="userData.password" />
        </div>
        <button type="submit" class="btn btn-primary mb-3" @click="onRegister">Register</button>
        <p>Already registered?, <router-link :to="{ name: 'LoginPage' }">Login!</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
export default {
  data() {
    return {
      userData: {
        fullName: null,
        username: null,
        password: null,
      },
    };
  },
  methods: {
    async onRegister() {
      // !get from store with getter
      // let saltKey = "Adm!n_L0cale?26-66";
      let ciphertext = CryptoJS.HmacSHA1(this.userData.password, this.$store.getters._saltKey).toString();
      let response = await this.$appAxios.post("/users", { ...this.userData, password: ciphertext });
      if (response.statusText !== "Created") {
        alert("An error occured");
        return;
      }
      this.userData = {
        fullName: null,
        username: null,
        password: null,
      };
      this.$router.push({ name: "HomePage" });
    },
  },
};
</script>