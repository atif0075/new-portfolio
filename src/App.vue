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
* {
  font-family: "Google Sans", sans-serif;
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
</style>
