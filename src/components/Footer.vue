<script setup>
import { Icon } from "@iconify/vue";
import MoveTo from "moveto";
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
  <footer class="container py-5 mx-auto p-2">
    <div class="p-4 bg-white rounded-4xl dark:bg-gray-800">
      <div
        class="w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between"
      >
        <span
          class="text-base text-gray-500 sm:text-center dark:text-pulse-yellow-200 font-medium"
        >
          Imagine, Craft, Amaze
        </span>
        <div
          class="flex justify-between items-center space-x-3 mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
        >
          <ul class="flex justify-start space-x-3">
            <li>
              <button @click="scrollTo('about', 2500)" class="hover:underline">
                About
              </button>
            </li>
            <li>
              <button @click="scrollTo('work', 2500)" class="hover:underline">
                Work
              </button>
            </li>
          </ul>

          <button
            @click="scrollTo('nav', 2500)"
            aria-label="move to top"
            class="relative flex items-center justify-center h-9 w-9 before:absolute before:inset-0 before:rounded-full before-grad before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:scale-100 disabled:before:bg-gray-300"
          >
            <Icon
              icon="fluent:arrow-up-16-regular"
              class="relative w-5 h-5 leading-[0] text-gray-800"
            />
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped></style>
