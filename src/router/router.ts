import Home from "../views/Home.vue";
import Bots from "../views/Bots.vue";
import Settings from "../views/Settings.vue";

import Loading from "../views/Loading.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/loading", component: Loading },
  { path: "/bots", component: Bots },
  { path: "/settings", component: Settings },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
