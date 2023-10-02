<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
onMounted(() => {
  AOS.init();
  const lenis = new Lenis({ wrapper: document.body });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
</script>

<template>
  <div class="dark:bg-gray-900">
    <RouterView />
  </div>
</template>

<style>
* {
  font-family: "Google Sans", sans-serif;
}
.font-mono {
  font-family: "Space Mono", monospace;
}
body {
  scroll-behavior: smooth;
  scroll-behavior: cubic-bezier(0.42, 0, 0.58, 1);
}
html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
@keyframes pop {
  0% {
    transform: scale(0.9);
  }
  40% {
    transform: scale(1.02);
  }
  to {
    transform: scale(1);
  }
}
</style>
