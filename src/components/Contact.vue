<script setup>
import { Icon } from "@iconify/vue";
import DarkBg from "./DarkBg.vue";
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
    link: "mailto:connectsatif@gmail.com?subject=Wanna hire you for a project&body=Hi Atif,",
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
  <div class="container p-2 py-16 mx-auto">
    <!-- <button @click="morph">Morph!</button> -->
    <div data-aos="fade-up" data-aos-duration="1000">
      <h1
        class="mt-4 font-mono text-3xl font-bold tracking-widest text-gray-700 capitalize sm:text-5xl lg:text-7xl dark:text-gray-300"
      >
        Contact
      </h1>
    </div>
    <div class="grid grid-cols-1 gap-5 mt-10 lg:grid-cols-3">
      <div class="grid grid-cols-2 gap-5">
        <a
          v-for="(item, index) in btnList"
          :key="index"
          :href="item.link"
          target="_blank"
          data-aos="fade-up"
          data-aos-duration="1000"
          :class="
            item.color === 'dark'
              ? 'bg-gray-800 dark:bg-gray-900 text-pulse-yellow-200 dark:text-pulse-yellow-300'
              : 'grad text-gray-800'
          "
          class="relative z-0 flex flex-col justify-center p-8 overflow-hidden duration-300 ease-in-out transform hover:scale-95 lg:p-10 rounded-5xl"
        >
          <div
            v-if="item.color === 'dark'"
            class="absolute z-0 hidden scale-y-150 -inset-x-8 opacity-60 dark:block sm:scale-y-100 lg:-top-56"
          >
            <DarkBg />
          </div>
          <div class="relative z-10 flex flex-col items-center justify-center">
            <Icon
              :icon="item.icon"
              class="w-10 h-10 transition-all duration-300 ease-in-out"
            />
            <h1 class="font-medium uppercase">
              {{ item.title }}
            </h1>
          </div>
        </a>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        class="relative p-8 lg:col-span-2 lg:p-10 grad rounded-5xl"
      >
        <div class="grid grid-cols-1 gap-5 space-y-2 lg:grid-cols-2">
          <div class="grid gap-5">
            <div class="relative overflow-hidden rounded-3xl dark:bg-gray-900">
              <input
                placeholder="Name"
                type="text"
                class="w-full relative z-10 dark:text-pulse-yellow-300 p-5 text-lg text-gray-800 border outline-none bg-pulse-yellow-100 dark:bg-transparent border-zinc-800 rounded-3xl placeholder:text-gray-800 dark:placeholder:text-pulse-yellow-300"
              />
              <div
                class="absolute z-0 hidden scale-y-150 -inset-x-8 opacity-60 dark:block sm:scale-y-100 lg:-top-56"
              >
                <DarkBg />
              </div>
            </div>
            <div class="relative overflow-hidden rounded-3xl dark:bg-gray-900">
              <input
                placeholder="Email"
                type="email"
                class="w-full relative z-10 dark:text-pulse-yellow-300 p-5 text-lg text-gray-800 border outline-none bg-pulse-yellow-100 dark:bg-transparent border-zinc-800 rounded-3xl placeholder:text-gray-800 dark:placeholder:text-pulse-yellow-300"
              />
              <div
                class="absolute z-0 hidden scale-y-150 -inset-x-8 opacity-60 dark:block sm:scale-y-100 lg:-top-56"
              >
                <DarkBg />
              </div>
            </div>
          </div>
          <div>
            <div class="relative overflow-hidden rounded-3xl dark:bg-gray-900">
              <textarea
                placeholder="Your Message"
                class="w-full h-full relative z-10 dark:text-pulse-yellow-300 p-5 text-lg text-gray-800 border outline-none bg-pulse-yellow-100 dark:bg-transparent border-zinc-800 dark:border-none rounded-3xl placeholder:text-gray-800 dark:placeholder:text-pulse-yellow-300"
              ></textarea>
              <div
                class="absolute z-0 hidden scale-y-150 -inset-x-8 opacity-60 dark:block sm:scale-y-100 lg:-top-56"
              >
                <DarkBg />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <button
            class="relative overflow-hidden flex items-center justify-center w-full p-5 px-4 group rounded-3xl bg-gray-900 transition-all duration-300 ease-in-out text-pulse-yellow-200"
          >
            <div
              class="absolute z-0 hidden scale-y-150 -inset-x-8 opacity-60 dark:block sm:scale-y-100 lg:-top-56"
            >
              <div class="rounded-3xl overflow-hidden">
                <DarkBg />
              </div>
            </div>
            <span
              class="relative z-10 leading-[0] flex w-max items-center font-medium"
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
