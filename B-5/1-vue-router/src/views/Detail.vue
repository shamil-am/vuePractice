<template>
  <div>
    <h1>Detail {{ $route.params.userID }}</h1>
    <router-link to="/anasayfa" class="btn btn-info"> Geri don </router-link>
    <button @click="goBack">Hakkindaya don</button>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params.userID);
  },
  methods: {
      goBack(){
          this.$router.push('/hakkinda')
      }
  }
};
</script>