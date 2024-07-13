import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Admin from "../components/Admin.vue";
import Add from "../components/Add.vue";
import Update from "../components/Update.vue";
import Users from "../components/Users.vue";
import UpdateUsers from "../components/UpdateUsers.vue";

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
    {
      path: "/add",
      name: "add",
      component: Add,
    },
    {
      path: "/update/:id",
      name: "update",
      component: Update,
    },
    {
      path: "/users",
      name: "users",
      component: Users,
    },
    {
      path: "/user/updateUsers/:id",
      name: "updateUsers",
      component: UpdateUsers,
    },
  ],
});

export default router;
