<script setup>
import NameJSON from "../assets/name.json";
import AbstractJSON from "../assets/abstract.json";
import ScrollDown from "../components/ScrollDown.vue";
import Footer from "../components/Footer.vue";
import HeroBg from "../components/HeroBg.vue";
import MoveTo from "moveto";
import SplitType from "split-type";
import { onMounted, ref } from "vue";
import Work from "../components/Work.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import { heroData } from "../db";
import DarkBg from "../components/DarkBg.vue";
import { animate, stagger } from "motion";
const isShowLottie = ref(false);
onMounted(() => {
  const headingOne = new SplitType("#headingOne", {
    types: "chars",
  });
  const paraOne = new SplitType("#paraOne", {
    types: "words",
  });
  const buttonWrap = document.querySelector("#buttonWrap");
  const detailsWrap = document.getElementsByClassName("detailsWrap");
  const heroElements = [...headingOne.chars, ...paraOne.words, buttonWrap];
  animate(
    heroElements,
    {
      y: [24, 0],
      opacity: [0, 1],
    },
    { duration: 0.8, delay: stagger(0.05) }
  ).finished.then(() => {
    isShowLottie.value = true;
    animate(
      detailsWrap,
      { y: [100, 0], opacity: [0, 1] },
      { duration: 1, delay: stagger(0.4) }
    );
  });
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
        @click="scrollTo('about', 2500)"
        class="py-2 px-4 bg-gray-100 dark:bg-pulse-yellow-200 font-semibold rounded-full text-sm"
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
        <button aria-label="toggle theme">
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              @change="toggleTheme"
              :checked="darkMode"
              class="sr-only peer"
            />
            <div
              class="w-14 h-8 bg-transparent border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:bg-zinc-800 peer-checked:after:border-zinc-800 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-pulse-yellow-200 after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-pulse-yellow-200"
            ></div>
          </label>
        </button>
      </div>
    </nav>
  </main>
  <section class="container mx-auto overflow-hidden">
    <div class="relative overflow-hidden rounded-4xl">
      <HeroBg />
      <div
        class="absolute z-0 -inset-x-8 hidden scale-y-150 opacity-60 dark:block sm:scale-y-100 lg:-top-56"
      >
        <DarkBg class="sm:hidden" />
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
                @click="scrollTo('work')"
                :class="
                  color === 'dark'
                    ? 'before:bg-pulse-yellow-200 text-gray-800'
                    : 'before:bg-gray-800 text-pulse-yellow-200'
                "
                class="relative flex items-center p-5 px-4 group w-max before:absolute before:inset-0 before:rounded-3xl before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:scale-100 disabled:before:bg-gray-300"
              >
                <span
                  class="relative leading-[0] flex w-max items-center font-medium"
                >
                  <ScrollDown
                    class="w-0 group-hover:w-8 h-8 transition-all duration-300 ease-in-out group-hover:mr-2"
                  />
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
                <h1 class="text-lg font-semibold text-gray-700 dark:text-white">
                  {{ item.title }}
                </h1>
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
  <Footer />
</template>
