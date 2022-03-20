<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6 col-lg-4">
      <form class="border border-primary rounded-3 p-5 mt-5" @submit.prevent>
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input type="text" class="form-control border border-primary" v-model="userData.username" />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control border border-primary" v-model="userData.password" />
        </div>
        <button type="submit" class="btn btn-primary mb-3" @click="onSubmit">Enter</button>
        <p>Have not an account?, <router-link :to="{ name: 'RegisterPage' }">Register!</router-link></p>
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
        username: null,
        password: null,
      },
    };
  },
  methods: {
    async onSubmit() {
      // GET /posts?title=json-server&author=typicode
      let pw = CryptoJS.HmacSHA1(this.userData.password, this.$store.getters._saltKey).toString();      
      let response = await this.$appAxios.get(`/users?username=${this.userData.username}&password=${pw}`);
      this.$store.commit("setUser",response.data[0])
      this.$router.push('/')
    },
  },
};
</script>