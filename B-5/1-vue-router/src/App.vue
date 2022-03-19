<template>
  <div class="container">
    <div class="row py-5">
      <div class="col-12">
        <router-link to="/anasayfa" active-class="is-active">Home</router-link>
        <router-link to="/hakkinda" active-class="is-active">About</router-link>
        <router-link to="/detay/2" active-class="is-active">Detail</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style>
a {
  text-decoration: none;
  color: #000;
  border: 2px solid #000;
  padding: 1rem;
  margin: 0 0.5rem;
}
a:hover {
  color: inherit;
}

a.is-active {
  background-color: rebeccapurple;
  color: #fff;
}
</style>