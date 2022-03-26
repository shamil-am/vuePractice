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
    <Sidebar :invoiceList="invoiceList" @edit-invoice="editThisInvoice" />
    <InvoiceContent
      :onSaveInvoice="onSaveInvoice"
      :editingInvoice="editingInvoice"
    />
  </div>
</template>

<script setup>
import Sidebar from "./components/appSidebar.vue";
import InvoiceContent from "./components/InvoiceContent.vue";
import { ref, reactive } from "vue";
const invoiceList = ref([]);
const editingInvoice = reactive({
  current: null,
});
const onSaveInvoice = (invoice) => {
  invoiceList.value.push(invoice);
  alert("Saved");
};
const editThisInvoice = (invoice) => {
  editingInvoice.current = invoice;
  // setTimeout(() => {
  //   editingInvoice.current = null;
  // }, 2000);
};
</script>