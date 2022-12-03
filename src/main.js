import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Calzados from "./pages/Calzados.vue";
import ProdNuevos from "./pages/ProdNuevos.vue";
import Contactos from "./pages/Contactos.vue";
import Map from "./pages/Map.vue"
import Carteras from "./pages/Carteras.vue"
import Login from "./pages/Login.vue"


const routes = [
  { path: "/", component: Home },
  { path: "/calzados", component: Calzados },
  { path: "/productosNuevos", component: ProdNuevos },
  { path: "/contactos", component: Contactos },
  { path: "/contactos", component: Contactos },
  { path: "/mapa", component: Map },
  { path: "/carteras", component: Carteras },
  { path: "/login", component: Login },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
