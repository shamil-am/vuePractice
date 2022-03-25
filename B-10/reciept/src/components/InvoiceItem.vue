<template>
  <div class="table-body-item group">
    <input
      autocomplete="off"
      type="text"
      class="input w-[200px] mr-2"
      v-model="item.name"
    />
    <input
      autocomplete="off"
      type="number"
      class="input w-[50px] mr-2"
      v-model="item.qty"
    />
    <input
      autocomplete="off"
      type="number"
      class="input w-[100px] mr-2"
      v-model="item.unit_price"
    />
    <span class="p-1 text-center text-gray-400">${{ summary }}</span>
    <div class="text-right flex-grow">
      <button class="delete-button" @click="deleteInvoiceItem(item)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script setup>
const { item } = defineProps({
  item: Object,
});
import { computed, inject } from "vue";

const summary = computed(() => item.qty * item.unit_price);
const deleteInvoiceItem = inject("deleteInvoiceItem");
</script>

//    name: null,
//     qty: null,
//     unit_price: 0.0,
//     total_price: 0.0,