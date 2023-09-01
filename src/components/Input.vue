<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { animate } from "motion";
onMounted(() => {
  const input = document.querySelector("input");
  const line = document.querySelector(".elastic-line");
  const start =
    "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512";
  const end =
    "M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512";
    const tl = gsap.timeline({ defaults: { duration: 1 } });
    input.addEventListener("click", (e) => {
      if (!input.value) {
        tl.fromTo(
          line,
          { attr: { d: start } },
          { attr: { d: end }, ease: "Power2.easeOut", duration: 0.35 }
        );
        tl.to(line, { attr: { d: start }, ease: "elastic.out(3, 0.5)" }, "<95%");
      }
    });
});
</script>
<template>
  <div class="p-16">
    <div class="relative">
      <svg
        class="line-svg overflow-visible"
        width="300"
        height="2"
        viewBox="0 0 300 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="elastic-line"
          d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512"
          stroke="#D1D4DA"
          stroke-width="2"
        />
      </svg>
      <input
        type="text"
        name=""
        id=""
        class="p-2 absolute bottom-0 left-0 w-full outline-none bg-transparent"
      />
    </div>
  </div>
</template>
<style scoped></style>
