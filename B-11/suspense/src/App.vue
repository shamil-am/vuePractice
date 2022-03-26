<template>
  <div>
    <p v-if="error">{{error}}</p>
    <suspense v-else>
      <template #default>
        <Users />
      </template>
      <template #fallback>
        <p>Loading...</p>
      </template>
    </suspense>
    <Todos />
  </div>
</template>

<script setup>
import { onErrorCaptured, defineAsyncComponent, ref } from "vue";
import Todos from "./components/Todos.vue";
const error = ref(null);
const Users = defineAsyncComponent(() => import("./components/User.vue"));
onErrorCaptured((e) => {
  error.value = e;
  return true;
});
</script>