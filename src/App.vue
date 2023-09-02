<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
onMounted(() => {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {});

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
</script>

<template>
  <div class=" ">
    <RouterView />
  </div>
</template>

<style>
@import url("https://cdn.jsdelivr.net/gh/mortezaom/google-sans-cdn@master/fonts.css");
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap");
* {
  font-family: "Google Sans", sans-serif;
}
.font-mono {
  font-family: "Space Mono", monospace;
}
body {
  scroll-behavior: smooth;
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
