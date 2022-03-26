<template>
  <section
    class="bg-gray-900 w-1/3 mx-auto mt-10 p-2 px-5 rounded-md shadow-2xl"
  >
    <!-- FAtura Bilgileri -->
    <h3 class="text-gray-400 text-xl">Fatura Bilgileri</h3>
    <hr class="bg-gradient-to-r h-[1px] border-none from-gray-700 mb-2" />
    <InvoiceContact :contactInfo="state.contactInfo" />
    <div class="mt-5">
      <h3 class="text-gray-400 text-xl">Fatura Kalemleri</h3>
      <hr class="bg-gradient-to-r h-[1px] border-none from-gray-700 mb-2" />
      <InvoiceItems :items="state.items" :addInvoiceItem="addInvoiceItem" />
    </div>
    <!-- Summary -->
    <Summary :items="state.items" />
    <hr class="bg-gradient-to-r h-[1px] border-none from-gray-700 mt-5" />
    <div class="actionbar text-right my-5">
      <button class="purple-button" @click="onSave">Kaydet</button>
    </div>
  </section>
</template>

<script setup>
import InvoiceItems from "./InvoiceItems.vue";
import Summary from "./Summary.vue";
import InvoiceContact from "./InvoiceContact.vue";
import { reactive, provide, watch } from "vue";
const state = reactive({
  contactInfo: {
    contact_name: null,
    email: null,
    city: null,
    country: null,
    zipcode: null,
  },
  items: [],
});
const addInvoiceItem = (item) => {
  state.items.push({
    id: new Date().getTime(),
    name: null,
    qty: null,
    unit_price: 0.0,
    total_price: 0.0,
  });
};
const deleteInvoiceItem = (invoiceItem) => {
  state.items = state.items.filter((i) => i.id !== invoiceItem.id);
};
provide("deleteInvoiceItem", deleteInvoiceItem);
const { onSaveInvoice, editingInvoice } = defineProps({
  onSaveInvoice: Function,
  editingInvoice: [Object, null],
});
const onSave = () => {
  onSaveInvoice({ ...state, created_at: new Date(), id: new Date().getTime() });
  state.contactInfo = {
    contact_name: null,
    email: null,
    city: null,
    country: null,
    zipcode: null,
  };
  state.items = [];
};

watch(editingInvoice, (editInvoice) => {
  // state.contactInfo = {
  //   contact_name: "Shamil",
  //   email: "Shamil@mail.ru",
  //   city: "Baku",
  //   country: "Azerbaijan",
  //   zipcode: 1000,
  // };
  state.contactInfo = {
    ...editInvoice.current.contactInfo,
  };
  state.items = [...editInvoice.current.items];
});
</script>