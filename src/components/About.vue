<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import DarkBg from "./DarkBg.vue";
gsap.registerPlugin(ScrollTrigger);
const skills = [
  "Vue",
  "React",
  "Svelte",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "HTML/CSS",
  "Firebase",
  "Git/GitHub",
  "Figma",
];
const top_rated_width = ref(null);
onMounted(() => {
  // top-rated
  const topRated = document.getElementById("top-rated");
  // get width of the topRated div
  if (topRated) {
    // Get the width of the topRated div
    top_rated_width.value = topRated.clientWidth;
    // console.log(`Width of the top-rated div: ${width}px`);
  } else {
    console.error("Element with ID 'top-rated' not found");
  }
});
</script>
<template>
  <div id="about" class="container p-2 py-16 mx-auto">
    <!-- <button @click="morph">Morph!</button> -->
    <div data-aos="fade-up" data-aos-duration="1000">
      <h1
        class="relative inline-block mt-4 font-mono text-3xl font-bold tracking-widest text-gray-700 capitalize sm:text-5xl lg:text-7xl dark:text-gray-300"
      >
        About
      </h1>
    </div>
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      class="relative p-8 mt-10 overflow-hidden bg-gray-900 lg:p-10 text-pulse-yellow-100 rounded-5xl"
    >
      <div
        class="absolute scale-y-150 -inset-x-8 opacity-60 dark:block sm:scale-y-100 lg:-top-56"
      >
        <svg
          class="w-full blur-3xl contrast-150"
          viewBox="0 0 1440 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_103_49)">
            <path
              data-color="lime"
              class="transition duration-500 fill-gray-950"
              d="M795.5 572C1247.1 572 1365 190.667 1367.5 0H1552V1021H50V806C110.333 728 343.9 572 795.5 572Z"
              fill="currentColor"
            ></path>
            <path
              data-color="lime"
              class="transition duration-500 fill-gray-950"
              d="M-73.1784 0L-563 316L-73.1784 632L418 316L-73.1784 0Z"
              fill="currentColor"
            ></path>
            <path
              data-color="lime"
              class="transition duration-500 opacity-60"
              d="M1099.5 477C1235.9 453.8 1363.33 327.333 1410 267C1367.17 351 1257.8 530.1 1163 574.5C1068.2 618.9 750.167 623.667 603 620.5C711.667 582.333 963.1 500.2 1099.5 477Z"
              fill="currentColor"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_103_49">
              <rect width="1440" height="1024" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        class="absolute z-0 -inset-x-8 scale-y-150 opacity-60 sm:scale-y-100 lg:-top-56"
      >
        <DarkBg class="sm:hidden h-full" />
      </div>
      <div
        class="absolute z-0 bottom-0 -inset-x-8 scale-y-150 opacity-60 sm:scale-y-100 lg:-top-56"
      >
        <DarkBg class="sm:hidden h-full" />
      </div>
      <h1 data-aos="fade-up" data-aos-duration="1100" class="text-3xl">
        Atîf Mēhmööd
      </h1>
      <p data-aos="fade-up" data-aos-duration="1300">Frontend Developer</p>
      <div class="h-[1px] bg-pulse-yellow-100/50 mt-5"></div>
      <div class="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-2">
        <div class="space-y-3">
          <div data-aos="fade-up" data-aos-duration="1300">
            <h1>
              <i> Background </i>
            </h1>
            <div>
              A passionate web developer from Pakistan, with a Bachelor's degree
              in Software Engineering. For the past year, I've been working as a

              <div class="relative inline-block group px-0.5" id="top-rated">
                <span
                  class="relative z-10 group-hover:text-gray-900 duration-500 ease-in"
                >
                  Frontend Web Developer
                </span>
                <div
                  class="absolute bottom-0 left-0 z-0 w-full h-1 transition-all duration-500 ease-in-out group-hover:h-full bg-pulse-yellow-200"
                ></div>
              </div>
              at H2people, a groundbreaking job platform that transforms
              recruitment with AI, chatbots, and live streaming.
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1400">
            In addition to my full-time role, I'm also a
            <div class="relative inline-block group px-0.5" id="top-rated">
              <span
                class="relative z-10 group-hover:text-gray-900 duration-500 ease-in"
              >
                Top-Rated
              </span>
              <div
                class="absolute bottom-0 left-0 z-0 w-full h-1 transition-all duration-500 ease-in-out group-hover:h-full bg-pulse-yellow-200"
              ></div>
            </div>
            Freelance Web Engineer on Upwork, where I've delivered quality
            solutions to clients around the globe, using Vue 3, React, Svelte,
            Nuxt 3, Typescript, and Tailwind CSS. As a dedicated problem solver
            and continuous learner, I'm committed to refining my craft and
            staying at the forefront of web development innovation.
          </div>
        </div>
        <div class="space-y-3">
          <div data-aos="fade-up" data-aos-duration="1300">
            <h1>
              <i> Enthusiasms </i>
            </h1>
            <div>
              Beyond coding, I'm also an advocate for knowledge-sharing and
              community-building. I enjoy contributing to
              <div class="relative inline-block group px-0.5" id="top-rated">
                <span
                  class="relative z-10 group-hover:text-gray-900 duration-500 ease-in"
                >
                  Open-Source
                </span>
                <div
                  class="absolute bottom-0 left-0 z-0 w-full h-1 transition-all duration-500 ease-in-out group-hover:h-full bg-pulse-yellow-200"
                ></div>
              </div>
              projects, writing insightful articles, and engaging in meaningful
              discussions that empower aspiring developers.
            </div>
          </div>
          <h1
            data-aos="fade-up"
            data-aos-duration="1300"
            class="mt-5 text-3xl font-bold text-pulse-yellow-100"
          >
            <q> In a world of reversals, I code forward. </q>
          </h1>
          <div data-aos="fade-up" data-aos-duration="1300">
            <h1>
              <i> Skills </i>
            </h1>
            <div class="flex flex-wrap items-start justify-start w-full">
              <span
                v-for="(item, index) in skills"
                :key="index"
                class="px-3 py-1 m-1 text-xs font-medium text-gray-700 border rounded-full bg-pulse-yellow-200 whitespace-nowrap border-pulse-yellow-200"
              >
                {{ item }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
