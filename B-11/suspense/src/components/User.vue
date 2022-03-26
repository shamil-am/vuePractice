<template>
  <div>
    <h1>User</h1>
    <hr />
    <!-- <p v-if="loader">Loading...</p> -->
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
// const loader = ref(true);
const users = ref([]);
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
      if(!response.ok){
          throw new Error('oppss')
      }
      return response.json()
  })
  .then((result) => {
    users.value = result;
    //   loader.value = !loader.value
  });
</script>
