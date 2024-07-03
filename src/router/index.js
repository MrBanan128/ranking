import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Admin from "../components/Admin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../components/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../components/Register.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
    },
  ],
});

export default router;
