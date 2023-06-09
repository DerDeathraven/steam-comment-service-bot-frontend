import Home from "../views/Home.vue";
import Bots from "../views/Bots.vue";

import Loading from "../views/Loading.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/loading", component: Loading },
  { path: "/bots", component: Bots },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
