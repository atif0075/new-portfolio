<script setup>
import { workData } from "../db";
import { onMounted, ref } from "vue";
import { animate, inView } from "motion";
import WorkCard from "./WorkCard.vue";
onMounted(() => {
  //   animate headingOne on scrollTrigger
  inView("#work", () => {
    animate(
      "#headingOne",
      {
        y: [24, 0],
        opacity: [0, 1],
      },
      {
        duration: 0.5,
        stagger: 0.05,
        delay: 0.5,
      }
    );
  });
});
</script>
<template>
  <section id="work">
    <div class="container mx-auto py-16 p-2">
      <div>
        <h1
          id="headingOne"
          class="mt-4 tracking-widest font-mono text-3xl font-bold text-gray-700 capitalize sm:text-5xl lg:text-7xl dark:text-gray-300"
        >
          {{ workData.title }}
        </h1>
      </div>
      <WorkCard />
    </div>
  </section>
</template>
<style scoped></style>
