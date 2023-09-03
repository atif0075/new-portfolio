<script setup>
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
</script>
<template>
  <div id="about" class="container py-16 mx-auto p-2">
    <!-- <button @click="morph">Morph!</button> -->
    <div data-aos="fade-up" data-aos-duration="1000">
      <h1
        class="mt-4 font-mono text-3xl font-bold tracking-widest text-gray-700 capitalize sm:text-5xl lg:text-7xl dark:text-gray-300"
      >
        About Me
      </h1>
    </div>
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      class="p-8 lg:p-10 mt-10 bg-gray-800 text-pulse-yellow-100 rounded-4xl relative"
    >
      <h1 data-aos="fade-up" data-aos-duration="1100" class="text-3xl">
        Atîf Mēhmööd
      </h1>
      <p data-aos="fade-up" data-aos-duration="1300">Frontend Developer</p>
      <div class="h-[1px] bg-pulse-yellow-100/50 mt-5"></div>
      <div class="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div class="space-y-3">
          <div data-aos="fade-up" data-aos-duration="1300">
            <h1>
              <i> Backgroud__ </i>
            </h1>
            <p>
              A passionate web developer from Pakistan, with a Bachelor's degree
              in Software Engineering. For the past year, I've been working as a
              Frontend Web Developer at H2people, a groundbreaking job platform
              that transforms recruitment with AI, chatbots, and live streaming.
            </p>
          </div>
          <p data-aos="fade-up" data-aos-duration="1400">
            In addition to my full-time role, I'm also a Top-Rated Freelance Web
            Engineer on Upwork, where I've delivered quality solutions to
            clients around the globe, using Vue 3, React, Svelte, Nuxt 3,
            Typescript, and Tailwind CSS. As a dedicated problem solver and
            continuous learner, I'm committed to refining my craft and staying
            at the forefront of web development innovation.
          </p>
        </div>
        <div class="space-y-3">
          <div data-aos="fade-up" data-aos-duration="1300">
            <h1>
              <i> Enthusiasms__ </i>
            </h1>
            <p>
              Beyond coding, I'm also an advocate for knowledge-sharing and
              community-building. I enjoy contributing to open-source projects,
              writing insightful articles, and engaging in meaningful
              discussions that empower aspiring developers.
            </p>
          </div>
          <h1
            data-aos="fade-up"
            data-aos-duration="1300"
            class="text-3xl font-bold text-pulse-yellow-100 mt-5"
          >
            <q> In a world of reversals, I code forward. </q>
          </h1>
          <div data-aos="fade-up" data-aos-duration="1300">
            <h1>
              <i> Skills __ </i>
            </h1>
            <div class="w-full flex justify-start items-start flex-wrap">
              <span
                v-for="(item, index) in skills"
                :key="index"
                class="text-gray-700 bg-pulse-yellow-200 text-xs font-medium m-1 whitespace-nowrap px-3 py-1 rounded-full border border-pulse-yellow-200"
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
