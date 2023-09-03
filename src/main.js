import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vue3Lottie from "vue3-lottie";
import {
  createSharedElementDirective,
  SharedElementRouteGuard,
  SharedElementDirective,
} from "v-shared-element";
const app = createApp(App);
app.use(Vue3Lottie);
app.use(SharedElementDirective);
app.use(router);

app.mount("#app");
