import { createRouter, createWebHashHistory } from "vue-router";
// control login or not from stores
import store from "../store";
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

router.beforeEach((to, _, next) => {
  const authRequiredRoutes = ["HomePage"];
  let isAuthenticated = store.getters._isAuthenticated;
  if (to.name === "LoginPage" && isAuthenticated) next(false);
  if (authRequiredRoutes.indexOf(to.name) > -1 && !isAuthenticated) {
    alert("Login first");
    next({ name: "LoginPage" });
  }
  next();
});

export default router;
