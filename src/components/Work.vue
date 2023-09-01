<script setup>
import gsap from "gsap";
import SplitType from "split-type";
import { onMounted, ref } from "vue";
import { ScrollTrigger } from "gsap/all";
import { animate, inView, timeline } from "motion";
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  //   animate headingOne on scrollTrigger
  inView("#work", () => {
    animate(
      "#headingOne",
      {
        y: [24, 0],
        opacity: [0, 1],
      },
      {
        duration: 0.5,
        stagger: 0.05,
        delay: 0.5,
      }
    );
  });
});
</script>
<template>
  <section id="work">
    <div class="container mx-auto py-16">
      <div>
        <h1
          id="headingOne"
          class="mt-4 tracking-widest font-mono text-3xl font-bold text-gray-700 capitalize sm:text-5xl lg:text-7xl dark:text-gray-300"
        >
          Work
        </h1>
      </div>
      <div class="grid grid-cols-12 gap-4 mt-10">
        <div
          class="grid grid-cols-12 gap-5 col-span-8 p-5 space-y-2 rounded-3xl grad text-black"
        >
          <div class="col-span-8">
            <h1 class="text-2xl font-bold font-mono tracking-[0.6rem]">
              H2PEOPLE
            </h1>
            <p class="font-normal text-base leading-6 text-justify">
              H2People is a platform that connects people with the right skills
              to the right jobs. It is a platform that helps people to find jobs
              and companies to find the right candidates.
            </p>
            <div>
              <a
                href="https://h2people.com/"
                target="_blank"
                class="inline-block px-5 py-2 mt-5 bg-black rounded-full text-gray-100"
                >Visit Website</a
              >
            </div>
          </div>

          <div class="col-span-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1681566925324-ee1e65d9d53e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt=""
              class="w-full h-full rounded-3xl"
            />
          </div>
        </div>
        <div
          class="grid grid-cols-12 gap-5 col-span-4 p-5 space-y-2 rounded-3xl bg-gray-800 text-white"
        >
          <div class="col-span-12">
            <h1 class="text-2xl font-bold font-mono tracking-wider">
              Crew Dog
            </h1>
            <p class="font-normal text-base leading-6 text-justify">
              Crew Dog is a platform that connects people with the right skills
              to the right jobs. It is a platform that helps people to find jobs
              and companies to find the right candidates.
            </p>
            <div>
              <a
                href="https://h2people.com/"
                target="_blank"
                class="inline-block px-5 py-2 mt-5 grad text-gray-800 rounded-full"
                >Visit Website</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
