// import { createRouter, createWebHistory } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

const routes = [
  {
    name: 'HomePage',
    path: "/anasayfa",
    component: Home,
    // component: () => import("./views/Home.vue"),
  },
  {
    name: 'AboutPage',
    path: "/hakkinda",
    component: About,
    // component: () => import("./views/About.vue"),
  },
  {
    name: 'DetailPage',
    path: "/detay/:userID",
    component: () => import("./views/Detail.vue"),
  },
];

const router = createRouter({
  // routes: [
  //   {
  //     path: "/home",
  //     component: Home,
  //   },
  // ],
  routes,
  // history: createWebHistory(),
  history: createWebHashHistory(),
});

export default router;
