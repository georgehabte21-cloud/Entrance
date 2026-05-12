import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import Categories from "../views/Categories.vue";
import Items from "../views/Items.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/dashboard", component: Dashboard },
  { path: "/categories", component: Categories },
  { path: "/items", component: Items },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
