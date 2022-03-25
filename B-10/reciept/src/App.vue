<template>
  <div
    class="
      w-screen
      h-screen
      bg-gray-800
      flex flex-row
      text-white
      items-start
      justify-center
    "
  >
    <Sidebar :invoiceList="invoiceList"/>
    <InvoiceContent :onSaveInvoice="onSaveInvoice" />
  </div>
</template>

<script setup>
import Sidebar from "./components/appSidebar.vue";
import InvoiceContent from "./components/InvoiceContent.vue";
import { ref } from "vue";
const invoiceList = ref([]);
const onSaveInvoice = (invoice) => {
  invoiceList.value.push(invoice);
  // console.log("saved",{...invoice});
};
</script>