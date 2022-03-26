<template>
  <div class="summary mt-5 flex justify-end items-end">
    <div class="text-right mr-2">
      <div class="text-gray-500">Ara Toplam :</div>
      <div class="text-gray-400">KDV Toplam :</div>
      <div class="text-gray-300">Genel Toplam :</div>
    </div>
    <div class="text-right">
      <div class="text-gray-500">{{ sumPrice.midSum }}</div>
      <div class="text-gray-400">18,00</div>
      <div class="text-gray-300">{{ sumPrice.allSum }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const { items } = defineProps({ items: Array });
const sumPrice = computed(() => {
  let midSum = items.reduce((a, b) => {
    a += b.qty * b.unit_price;
    return a;
  }, 0);
  let allSum = midSum + midSum * 0.18;
  return {
    midSum,
    allSum: allSum.toFixed(2),
  };
});
</script>