import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import appHeader from "./components/common/appHeader.vue";
import appAxios from "./utils/appAxios";

const app = createApp(App);
app.use(store);
app.use(router);
app.component("app-header", appHeader);
app.config.globalProperties.$appAxios = appAxios;
app.mount("#app");
