<script setup>
import { Icon } from "@iconify/vue";

// import aos

import { onMounted } from "vue";
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
        ? 'bg-gray-800 text-pulse-yellow-200'
        : 'grad text-gray-800'
    "
    class="hover:scale-95 flex flex-col justify-between duration-300 ease-in-out p-8 lg:p-10 space-y-3 rounded-5xl"
  >
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
      class="h-64 bg-cover hidden md:block"
    ></div>
    <p>
      {{ description }}
    </p>
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
