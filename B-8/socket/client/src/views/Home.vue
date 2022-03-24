

<template>
  <div>
    <AppHeader />
    <div class="flex flex-row">
      {{socket}}
      <Sidebar />
      <app-bookmark-list />
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Home/Sidebar";
import io from "socket.io-client";
export default {
  components: {
    Sidebar,
    socket: {},
  },
  mounted() {
    this.socket = io("http://localhost:2018");
  },
};
</script>
