import { createApp } from "vue";
import App from "./App.vue";
import header from "@/components/AppHeader";

const app = createApp(App);
app.component("app-header", header);

app.mount("#app");
