<template>
  <h4>CountFromProp : {{ result }}</h4>
</template>

<script setup>
import { computed, watch } from "vue";

// const props = defineProps(["count"]);
// const props = defineProps({ count: Number });
const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits();
const result = computed(() => {
  return props.count % 2 === 0 ? "even" : "odd";
});
watch(result, (res) => {
  if (res === "odd") {
    emit("odd-event", true);
  }
});
</script>