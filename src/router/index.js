import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import Categories from "../views/Categories.vue";
import Items from "../views/Items.vue";
import Favoritview from "../views/Favoritview.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";

const routes = [
  { path: "/", redirect: "/register" },
  { path: "/register", component: Register },
  { path: "/login", component: Login },

  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        path: "dashboard",
        component: Dashboard,
      },

      {
        path: "categories",
        component: Categories,
      },

      {
        path: "items",
        component: Items,
      },

      {
        path: "favoritview",
        component: Favoritview,
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
