<script setup>
import { inView, animate } from "motion";
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  const services = document.getElementById("services");
  //   animate on scroll by gsap
  gsap.from(services, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: services,
      start: "top 80%",
      end: "bottom 80%",
    },
  });
  //
});
const servicesList = [
  {
    title: "Web development",
    description:
      "I can build you a fast, responsive and secure website that will help you grow your business.",
    icon: "https://lottie.host/9bc43c14-864c-4ad1-a142-9dfc92392a04/5KriA8uV4F.json",
  },
  {
    title: "App development",
    description:
      "I can build you a fast, responsive and secure website that will help you grow your business.",
    icon: "https://lottie.host/39e5eecb-7cd5-4561-aee9-c7d26afc0b40/4qbTyT3szp.json",
  },
  {
    title: "UI/UX design",
    description:
      "I can build you a fast, responsive and secure website that will help you grow your business.",
    icon: "https://lottie.host/15b98862-d3d3-4129-9977-bb6abd15184f/c5j8L3AVQ2.json",
  },
];
</script>
<template>
  <main id="re" class="container mx-auto py-32">
    <div id="services" class="p-10 bg-gray-100 rounded-3xl">
      <h1 class="text-4xl font-bold text-gray-900">Services</h1>
      <p>
        Here are some of the services I offer. If you have any questions, feel
        free to reach out to me.
      </p>

      <div class="relative py-16">
        <div class="container relative m-auto px-6 text-gray-500 md:px-12">
          <div class="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
            <div
              v-for="(item, index) in servicesList"
              :key="index"
              class="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none"
            >
              <Vue3Lottie
                :animationLink="item.icon"
                :width="200"
                :height="100"
                backgroundColor="transparent"
                class="w-20 h-20 mx-auto mb-4 group-hover:scale-[3] ease-in-out duration-300"
              />
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                {{ item.title }}
              </h3>
              <p>
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped></style>
