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
        <p>Already registered?, <router-link :to="{name: 'LoginPage'}">Login!</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
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
    onRegister() {
      console.log(this.userData);
    },
  },
};
</script>