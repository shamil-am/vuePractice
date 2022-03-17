<template>
  <div>
      <!-- <IncreaseCount :add="add"/>
      <DecreaseCount :remove="remove"/> -->
      <IncreaseCount />
      <DecreaseCount />
  </div>
</template>

<script>
import DecreaseCount from "./DecreaseCount.vue";
import IncreaseCount from "./IncreaseCount.vue";
export default {
  // props: ["add","remove"],
  components: {
    DecreaseCount,
    IncreaseCount,
  },
};
</script>

