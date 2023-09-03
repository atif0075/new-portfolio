import { createRouter, createWebHistory } from "vue-router";
import { SharedElementRouteGuard } from "v-shared-element";
import Home from "../views/Home.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
  ],
});
router.beforeEach(SharedElementRouteGuard);
export default router;
