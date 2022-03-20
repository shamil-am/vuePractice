import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("../views/Home.vue"),
  },
  {
    name: "LoginPage",
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: () => import("../views/Register.vue"),
  },
  {
    name: "NewBookMarkPage",
    path: "/newbook",
    component: () => import("../views/NewBookmark.vue"),
  },
];

const router = createRouter({
  routes: routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  console.log("from", from);
  console.log("to", to);
  next();
});

export default router;
