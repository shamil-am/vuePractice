import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import appHeader from "./components/common/appHeader.vue";
import appAxios from "./utils/appAxios";
import appBookmark from "./components/common/appBookmark.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

const app = createApp(App);
app.use(store);
app.use(router);
app.component("app-header", appHeader);
app.component("book-mark", appBookmark);
app.component("font-awesome-icon", FontAwesomeIcon);

app.config.globalProperties.$appAxios = appAxios;
app.mount("#app");
