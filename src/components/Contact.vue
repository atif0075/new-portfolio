<script setup>
import { Icon } from "@iconify/vue";
const btnList = [
  {
    title: "Github",
    icon: "mdi:github",
    link: "https://www.github.com/atif0075",
    color: "dark",
  },
  {
    title: "Linkedin",
    icon: "prime:linkedin",
    link: "https://www.linkedin.com/in/atif0075/",
  },
  {
    title: "Email",
    icon: "basil:envelope-solid",
    link: "mailto:connectsatif@gmail.com",
  },
  {
    title: "Whatsapp",
    icon: "ic:twotone-whatsapp",
    link: "https://wa.me/923029798428",
    color: "dark",
  },
];
</script>
<template>
  <div class="container py-16 mx-auto p-2">
    <!-- <button @click="morph">Morph!</button> -->
    <div data-aos="fade-up" data-aos-duration="1000">
      <h1
        class="mt-4 font-mono text-3xl font-bold tracking-widest text-gray-700 capitalize sm:text-5xl lg:text-7xl dark:text-gray-300"
      >
        Contact
      </h1>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
      <div class="grid grid-cols-2 gap-5">
        <a
          v-for="(item, index) in btnList"
          :key="index"
          :href="item.link"
          target="_blank"
          data-aos="fade-up"
          data-aos-duration="500"
          :class="
            item.color === 'dark'
              ? 'before:bg-gray-800 '
              : 'before:bg-pulse-yellow-200'
          "
          class="relative flex flex-col items-center justify-center w-full p-8 px-4 group before:absolute before:inset-0 before:rounded-4xl before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:scale-100 disabled:before:bg-gray-300"
        >
          <button
            :class="
              item.color === 'dark' ? 'text-pulse-yellow-200' : 'text-gray-800'
            "
          >
            <span
              class="relative flex flex-col items-center justify-center text-2xl font-medium"
            >
              <Icon
                :icon="item.icon"
                class="w-8 h-8 mr-2 transition-all duration-300 ease-in-out group-hover:w-7"
              />
              {{ item.title }}
            </span>
          </button>
        </a>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        class="lg:col-span-2 p-8 lg:p-10 grad rounded-4xl"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 space-y-2">
          <div class="grid gap-5">
            <input
              placeholder="Name"
              type="text"
              class="w-full p-5 text-lg border outline-none bg-pulse-yellow-100 border-zinc-800 rounded-3xl placeholder:text-gray-800 text-gray-800"
            />
            <input
              placeholder="Email"
              type="text"
              class="w-full p-5 text-lg bg-pulse-yellow-100 border border-zinc-800 outline-none rounded-3xl placeholder:text-zinc-800 text-gray-800"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              class="w-full h-full p-5 text-lg border border-zinc-800 bg-pulse-yellow-100 outline-none placeholder:text-zinc-800 rounded-4xl text-gray-800"
            ></textarea>
          </div>
        </div>
        <div class="mt-5">
          <button
            class="relative flex items-center justify-center w-full p-5 px-4 before:bg-gray-800 text-pulse-yellow-200 group before:absolute before:inset-0 before:rounded-3xl before:transition before:duration-300 active:duration-75 active:before:scale-95 disabled:before:scale-100 disabled:before:bg-gray-300"
          >
            <span
              class="relative leading-[0] flex w-max items-center font-medium"
            >
              <Icon
                icon="carbon:send-alt"
                class="w-0 h-6 transition-all duration-300 ease-in-out group-hover:mr-2 group-hover:w-6"
              />
              Send
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
