<script setup>
import gsap from "gsap";
import { workData } from "../db";
import { onMounted, ref } from "vue";
import { ScrollTrigger } from "gsap/all";
import { animate, inView } from "motion";
import WorkCard from "./WorkCard.vue";
gsap.registerPlugin(ScrollTrigger);
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
const workArray = [
  {
    title: "H2PEOPLE",
    description:
      "H2People is a platform that connects people with the right skills to the right jobs. It is a platform that helps people to find jobs and companies to find the right candidates.",
    image:
      "https://plus.unsplash.com/premium_photo-1681566925324-ee1e65d9d53e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    link: "https://h2people.tv/",
  },
  {
    title: "CREW DOG",
    description:
      "Crew Dog is a platform that connects people with the right skills to the right jobs.",
    image:
      "https://plus.unsplash.com/premium_photo-1681566925324-ee1e65d9d53e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    link: "https://h2people.tv/",
  },
  {
    title: "H2PEOPLE",
    description:
      "H2People is a platform that connects people with the right skills to the right jobs. It is a platform that helps people to find jobs and companies to find the right candidates.",
    image:
      "https://plus.unsplash.com/premium_photo-1681566925324-ee1e65d9d53e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    link: "https://h2people.tv/",
  },
  {
    title: "H2PEOPLE",
    description:
      "H2People is a platform that connects people with the right skills to the right jobs.",
    image:
      "https://plus.unsplash.com/premium_photo-1681566925324-ee1e65d9d53e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    link: "https://h2people.tv/",
  },
];
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
