<script setup>
import { Icon } from "@iconify/vue";
import DarkBg from "./DarkBg.vue";
import { ref } from "vue";
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
const name = ref("");
const email = ref("");
const message = ref("");
const submited = ref(false);
const loading = ref(false);
const isError = ref(false);
const submittedMsg = () => {
  submited.value = true;
  loading.value = true;
  // https://formcarry.com/s/3WfCbs_RKN
  fetch("https://formcarry.com/s/3WfCbs_RKN", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      message: message.value,
    }),
  })
    .then((response) => {
      loading.value = false;
    })
    .catch((error) => {
      loading.value = false;
      isError.value = true;
      console.error("Error:", error);
    });
};
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
          class="relative z-0 flex flex-col justify-center items-center p-8 overflow-hidden duration-300 ease-in-out hover:!scale-95 lg:p-10 rounded-5xl"
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
        v-if="!submited"
        class="relative p-8 lg:col-span-2 lg:p-10 grad rounded-5xl"
      >
        <div class="grid grid-cols-1 gap-5 space-y-2 lg:grid-cols-2">
          <div class="grid gap-5">
            <div class="relative overflow-hidden rounded-3xl dark:bg-gray-900">
              <input
                placeholder="Name"
                type="text"
                name="name"
                v-model="name"
                required
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
                name="email"
                v-model="email"
                required
                class="w-full relative z-10 dark:text-pulse-yellow-300 p-5 text-lg text-gray-800 border dark:border-none outline-none bg-pulse-yellow-100 dark:bg-transparent border-zinc-800 rounded-3xl placeholder:text-gray-800 dark:placeholder:text-pulse-yellow-300"
              />
              <div
                class="absolute z-0 hidden scale-y-150 -inset-x-8 opacity-60 dark:block sm:scale-y-100 lg:-top-56"
              >
                <DarkBg />
              </div>
            </div>
          </div>
          <div>
            <div
              class="relative h-full overflow-hidden rounded-3xl dark:bg-gray-900"
            >
              <textarea
                placeholder="Your Message"
                name="message"
                required
                v-model="message"
                class="w-full h-full resize-none relative z-10 dark:text-pulse-yellow-300 p-5 text-lg text-gray-800 border outline-none bg-pulse-yellow-100 dark:bg-transparent border-zinc-800 dark:border-none rounded-3xl placeholder:text-gray-800 dark:placeholder:text-pulse-yellow-300"
              ></textarea>
              <div
                resize-none
                class="absolute z-0 hidden scale-y-150 -inset-x-8 opacity-60 dark:block sm:scale-y-100 lg:-top-56"
              >
                <DarkBg />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <button
            @click="submittedMsg"
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
      <div
        v-else
        class="relative flex justify-center items-center overflow-hidden p-8 lg:col-span-2 lg:p-10 bg-pulse-yellow-200 dark:bg-gray-900 rounded-5xl"
      >
        <div v-if="loading">
          <Icon
            icon="line-md:loading-loop"
            class="w-10 h-10 text-pulse-yellow-200 animate-spin"
          />
        </div>
        <h1
          v-if="!loading && !isError"
          class="text-xl text-center font-medium text-gray-800 dark:text-pulse-yellow-200 relative z-10"
        >
          Your message has been sent successfully. I will get back to you as
          soon as possible.
        </h1>
        <h1
          class="text-3xl text-center font-medium text-gray-800 dark:text-pulse-yellow-400"
          v-if="isError"
        >
          Something went wrong. Please try again later.
        </h1>
        <div
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
      </div>
    </div>
  </div>
</template>
<style></style>
