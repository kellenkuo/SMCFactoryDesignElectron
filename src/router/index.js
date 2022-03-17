import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import CNC from "../components/CNC.vue";
import EDM from "../components/EDM.vue";
import WEDM from "../components/WEDM.vue";
import Delta from "../components/machines/cnc/Delta.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cnc",
    name: "cnc",
    component: CNC,
  },
  {
    path: "/edm",
    name: "edm",
    component: EDM,
  },
  {
    path: "/wedm",
    name: "wedm",
    component: WEDM,
  },
  {
    path: "/details-cnc-delta",
    name: "details-cnc-delta",
    component: Delta,
  },
];

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? "hash" : "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
