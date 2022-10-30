import { createRouter, createWebHistory } from "vue-router";
import store from "./store.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./pages/LoginPage.vue"),
    },
    {
      path: "/products",
      component: () => import("./pages/ProductListingPage.vue"),
    },
    {
      path: "/product/:id",
      component: () => import("./pages/ProductDetailPage.vue"),
      props: true,
    },
    {
      component: () => import("./pages/NotFound.vue"),
      path: "/:notFound(.*)",
    },
  ],
});

export default router;
