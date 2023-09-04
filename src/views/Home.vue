<script setup>
import NameJSON from "../assets/name.json";
import AbstractJSON from "../assets/abstract.json";
// import Services from "../components/Services.vue";
import { Icon } from "@iconify/vue";
// import { animate, stagger } from "motion";
import HeroBg from "../components/HeroBg.vue";
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
const darkMode = ref(false);
// save the current theme to localStorage
const saveTheme = (theme) => {
  localStorage.setItem("theme", theme);
};
// get the current theme from localStorage
const getTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme ? savedTheme : "light";
};
// set the current theme
const setTheme = (theme) => {
  document.documentElement.className = theme;
  darkMode.value = theme === "dark";
  saveTheme(theme);
};
// toggle the current theme
const toggleTheme = () => {
  const currentTheme = getTheme();
  const theme = currentTheme === "dark" ? "light" : "dark";
  setTheme(theme);
};
// set the current theme on page load
setTheme(getTheme());
</script>

<template>
  <main id="nav" class="container mx-auto">
    <nav class="flex items-center justify-between p-2">
      <button
        @click="scrollTo('about', 4000)"
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
        class="dark:invert"
      />
      <div class="flex items-center justify-start space-x-2">
        <button>
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              @change="toggleTheme"
              :checked="darkMode"
              class="sr-only peer"
            />
            <div
              class="w-11 h-8 bg-transparent border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-3 peer-checked:after:bg-zinc-800 peer-checked:after:border-zinc-800 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-pulse-yellow-200 after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-pulse-yellow-200"
            ></div>
          </label>
        </button>
      </div>
    </nav>
  </main>
  <section class="container mx-auto overflow-hidden">
    <div class="relative overflow-hidden rounded-4xl">
      <HeroBg />

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
                class="relative flex items-center w-auto px-10 group h-14 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-tr before:to-pulse-yellow-100 before:from-pulse-yellow-200 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:scale-100 disabled:before:bg-gray-300"
              >
                <span class="relative text-xl font-medium text-gray-800 w-max">
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
