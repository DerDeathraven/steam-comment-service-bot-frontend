import Home from "../views/Home.vue";
import Loading from "../views/Loading.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/loading", component: Loading },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
