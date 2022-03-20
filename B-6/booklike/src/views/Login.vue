<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6 col-lg-4">
      <form class="border border-primary rounded-3 p-5 mt-5">
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input type="text" class="form-control border border-primary" />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control border border-primary" />
        </div>
        <button type="submit" class="btn btn-primary mb-3">Enter</button>
        <p>Have not an account?, <router-link :to="{ name: 'RegisterPage' }">Register!</router-link></p>
      </form>
    </div>
  </div>
</template>