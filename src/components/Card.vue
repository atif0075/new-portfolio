<script setup>
import { Icon } from "@iconify/vue";

// import aos

import { onMounted } from "vue";
import DarkBg from "./DarkBg.vue";
defineProps({
  title: String,
  description: String,
  image: String,
  link: String,
  color: {
    type: String,
    default: "gard",
  },
  sm: Boolean,
});
</script>
<template>
  <div
    data-aos="fade-up"
    data-aos-duration="1000"
    :class="
      color === 'dark'
        ? 'bg-gray-800 dark:bg-gray-900 text-pulse-yellow-200 dark:text-pulse-yellow-300'
        : 'grad text-gray-800'
    "
    class="relative overflow-hidden flex flex-col justify-between p-8 space-y-3 duration-300 ease-in-out hover:scale-95 lg:p-10 rounded-5xl"
  >
    <div
      v-if="color === 'dark'"
      class="absolute z-0 -inset-x-8 hidden scale-y-150 opacity-60 dark:block sm:scale-y-100 lg:-top-56"
    >
      <svg
        class="w-full blur-3xl contrast-150 hidden lg:block"
        viewBox="0 0 1440 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_103_49)">
          <path
            data-color="lime"
            class="fill-gray-950 transition duration-500"
            d="M795.5 572C1247.1 572 1365 190.667 1367.5 0H1552V1021H50V806C110.333 728 343.9 572 795.5 572Z"
            fill="currentColor"
          ></path>
          <path
            data-color="lime"
            class="fill-gray-950 transition duration-500"
            d="M-73.1784 0L-563 316L-73.1784 632L418 316L-73.1784 0Z"
            fill="currentColor"
          ></path>
          <path
            data-color="lime"
            class="opacity-60 transition duration-500"
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
      <DarkBg class="lg:hidden" />
    </div>
    <div class="relative z-10">
      <h1
        :class="
          sm
            ? 'text-2xl sm:text-3xl lg:text-5xl'
            : 'text-3xl sm:text-5xl lg:text-7xl'
        "
        class="font-medium uppercase"
      >
        {{ title }}
      </h1>
      <div
        v-if="image"
        :style="`background-image: url(${image})`"
        class="hidden h-64 bg-cover md:block"
      ></div>
      <p>
        {{ description }}
      </p>
    </div>
    <div class="flex items-start justify-start space-x-3">
      <button
        :class="
          color === 'dark'
            ? 'before:bg-pulse-yellow-200 text-gray-800'
            : 'before:bg-gray-800 text-pulse-yellow-200'
        "
        class="relative flex items-center p-5 px-4 group w-max before:absolute before:inset-0 before:rounded-3xl before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:scale-100 disabled:before:bg-gray-300"
      >
        <span class="relative leading-[0] flex w-max items-center font-medium">
          <Icon
            icon="ei:external-link"
            class="w-0 h-6 transition-all duration-300 ease-in-out group-hover:mr-2 group-hover:w-6"
          />
          See Live
        </span>
      </button>
      <button
        :class="
          color === 'dark'
            ? 'before:bg-pulse-yellow-200 text-gray-800'
            : 'before:bg-gray-800 text-pulse-yellow-200'
        "
        class="relative flex items-center p-5 px-4 group w-max before:absolute before:inset-0 before:rounded-3xl before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:scale-100 disabled:before:bg-gray-300"
      >
        <span class="relative leading-[0] flex w-max items-center font-medium">
          <Icon
            icon="arcticons:studyplus"
            class="w-0 h-6 transition-all duration-300 ease-in-out group-hover:mr-2 group-hover:w-6"
          />
          Case Study
        </span>
      </button>
    </div>
  </div>
</template>
<style scoped></style>
