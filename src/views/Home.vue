<script setup>
import NameJSON from "../assets/name.json";
import AbstractJSON from "../assets/abstract.json";
// import Services from "../components/Services.vue";
import { Icon } from "@iconify/vue";
// import { animate, stagger } from "motion";
import gsap from "gsap";
import MoveTo from "moveto";
import SplitType from "split-type";
import { onMounted, ref } from "vue";
import Work from "../components/Work.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import { heroData } from "../db";
const isShowLottie = ref(false);
onMounted(() => {
  const headingOne = new SplitType("#headingOne", {
    types: "chars",
  });
  const paraOne = new SplitType("#paraOne", {
    types: "words",
  });
  const buttonWrap = document.querySelector("#buttonWrap");
  const detailsWraped = document.getElementsByClassName("detailsWrap");
  const heroElements = [
    ...headingOne.chars,
    ...paraOne.words,
    buttonWrap,
    // detailsWrap,
  ];
  const tl = gsap.timeline();
  tl.fromTo(
    heroElements,
    {
      y: 24,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      delay: 0.5,
      onComplete: () => {
        isShowLottie.value = true;
        gsap.fromTo(
          detailsWraped,
          {
            y: 24,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.5,
          }
        );
      },
    },
    "-=0.5"
  );
});
const scrollTo = (id, duration = 2000) => {
  const moveTo = new MoveTo({
    tolerance: 0,
    duration: duration,
    easing: "easeOutQuart",
  });
  const target = document.getElementById(id);
  moveTo.move(target);
};
</script>

<template>
  <main id="nav" class="container mx-auto">
    <nav class="flex items-center justify-between p-2">
      <button
        @click="scrollTo('about',5000)"
        class="py-2 px-4 bg-[#f5f2f1] font-semibold rounded-full text-sm"
      >
        About
      </button>
      <Vue3Lottie
        :animation-data="NameJSON"
        :height="30"
        :width="40"
        :loop="false"
        :delay="5"
      />
      <div class="flex items-center justify-start space-x-2">
        <button class="p-1 border rounded-md">
          <Icon icon="arcticons:spike-email" class="w-6 h-6 text-gray-900" />
        </button>
      </div>
    </nav>
  </main>
  <section class="container mx-auto overflow-hidden">
    <div class="relative overflow-hidden rounded-3xl">
      <div
        class="absolute hidden scale-y-150 -inset-x-8 dark:block sm:scale-y-100 lg:-top-56"
      >
        <svg
          class="w-full blur-3xl contrast-150"
          viewBox="0 0 1440 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_103_49)">
            <path
              data-color="pink"
              class="fill-[#19004E] transition duration-500 data-[color=blue]:fill-blue-950 data-[color=cyan]:fill-cyan-950 data-[color=indigo]:fill-indigo-950 data-[color=lime]:fill-lime-950 data-[color=orange]:fill-orange-950/40 data-[color=pink]:fill-pink-950/40 data-[color=purple]:fill-purple-950/40 data-[color=red]:fill-red-950/40"
              d="M795.5 572C1247.1 572 1365 190.667 1367.5 0H1552V1021H50V806C110.333 728 343.9 572 795.5 572Z"
              fill="currentColor"
            ></path>
            <path
              data-color="pink"
              class="fill-[#19004E] transition duration-500 data-[color=blue]:fill-blue-950 data-[color=cyan]:fill-cyan-950 data-[color=indigo]:fill-indigo-950 data-[color=lime]:fill-lime-600/5 data-[color=orange]:fill-orange-950/40 data-[color=pink]:fill-pink-950/40 data-[color=purple]:fill-purple-950/40 data-[color=red]:fill-red-950/40"
              d="M-73.1784 0L-563 316L-73.1784 632L418 316L-73.1784 0Z"
              fill="currentColor"
            ></path>
            <path
              data-color="pink"
              class="opacity-60 transition duration-500 data-[color=blue]:fill-blue-500 data-[color=cyan]:fill-cyan-500 data-[color=indigo]:fill-[#916AFF] data-[color=lime]:fill-lime-500 data-[color=orange]:fill-orange-500 data-[color=pink]:fill-pink-500 data-[color=purple]:fill-purple-500 data-[color=red]:fill-red-500"
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
        aria-hidden="true"
        class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div
          class="blur-[106px] h-56 bg-gradient-to-br from-indigo-500 to-purple-400 dark:from-blue-700"
        ></div>
        <div
          class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"
        ></div>
        <div
          class="blur-[106px] h-56 bg-gradient-to-br from-pulse-yellow-100 to-pulse-yellow-200 dark:from-blue-700"
        ></div>
        <div
          class="blur-[106px] h-32 bg-gradient-to-r from-pulse-yellow-200 to-pulse-yellow-100 dark:to-indigo-600"
        ></div>
      </div>

      <div class="container relative px-6 m-auto md:px-12 lg:px-7">
        <div class="relative z-10 py-40 ml-auto">
          <div class="mx-auto text-center lg:w-2/3">
            <h1
              class="flex items-center justify-center space-x-2 text-2xl font-medium text-gray-900 dark:text-white"
            >
              <div id="headingOne" class="font-mono">
                Hi, I am {{ heroData.name }} 😉
              </div>
            </h1>
            <p
              id="paraOne"
              class="mt-4 text-3xl font-bold text-gray-700 capitalize sm:text-5xl lg:text-6xl dark:text-gray-300"
            >
              {{ heroData.title }}
            </p>
            <div
              id="buttonWrap"
              class="flex flex-wrap justify-center mt-16 gap-y-4 gap-x-6"
            >
              <button
                id="buttonOne"
                @click="scrollTo('work')"
                class="group relative flex h-14 w-auto items-center px-10 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-tr before:to-pulse-yellow-100 before:from-pulse-yellow-200 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:scale-100 disabled:before:bg-gray-300"
              >
                <span class="relative w-max text-xl font-medium text-gray-800">
                  See My Work
                </span>
              </button>

              <!-- <Button />  -->
            </div>
            <!-- v-show="isShowLottie" -->
            <div
              :class="{ invisible: !isShowLottie }"
              class="justify-between hidden pt-8 mt-16 border-t border-gray-100 dark:border-gray-700 sm:flex"
            >
              <div
                v-for="(item, index) in heroData.achivements"
                :key="index"
                class="text-left detailsWrap"
              >
                <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
                  {{ item.title }}
                </h6>
                <p class="mt-2 text-gray-500">
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="isShowLottie" class="absolute inset-0 z-0">
          <Vue3Lottie
            :animation-data="AbstractJSON"
            :width="400"
            :loop="false"
            :delay="5"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- <Services /> -->
  <Work />
  <About />
  <Contact />
</template>
