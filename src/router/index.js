import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import CNC from "../components/CNC.vue";
import EDM from "../components/EDM.vue";
import WEDM from "../components/WEDM.vue";
import CNCDetailsVictor from "../components/machines/cnc/victor/Details.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
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
    path: "/cnc/details/victor",
    name: "cnc-details-victor",
    component: CNCDetailsVictor,
  },
];

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? "hash" : "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
