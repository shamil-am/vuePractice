<template>
  <div>
    <h3>{{ title }}</h3>
    <input type="text" v-model="title" />
    <button @click="inc">{{ counter }}</button>
    <oddOrEven :count="counter" @odd-event="oddHandler" />
    <hr />
    <hr />
    <div class="info">
      <input type="text" v-model="user.name" />
      <input type="text" v-model="user.surname" />
      <input type="number" v-model="user.age" />
      <button @click="show">show</button>
    </div>
  </div>
</template>


<script setup>
import oddOrEven from "./components/oddOrEven.vue";
import CounterInfo from "./composables/CounterInfo";
import UserInfo from "./composables/UserInfo";
const { title, counter, inc, oddHandler } = CounterInfo();
// const { name, surname, age, show } = UserInfo();
const { user, show } = UserInfo();
</script>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>