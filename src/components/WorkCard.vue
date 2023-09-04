<script setup>
import { Icon } from "@iconify/vue";
import Card from "./Card.vue";
import Crew1 from "../assets/crew-dog/m1.png";
import { onMounted } from "vue";
import { animate, inView } from "motion";
import { workData } from "../db";
</script>
<template>
  <main class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
    <Card
      :image="Crew1"
      :title="workData.work[0].title"
      :description="workData.work[0].description"
      :link="workData.work[0].link"
    />
    <div class="grid gap-4">
      <Card
        v-for="(item, index) in workData.work[1]"
        :key="index"
        :color="item.color"
        :sm="item.sm"
        :title="item.title"
        :description="item.description"
        :link="item.link"
      />
    </div>
  </main>
  <main class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
    <Card
      v-for="(item, index) in workData.work[2]"
      :key="index"
      :color="item.color"
      :sm="item.sm"
      :title="item.title"
      :description="item.description"
      :link="item.link"
    />
    <!-- <Card
      sm
      title="live loop"
      description="It is a simple and easy-to-use platform that allows artists to sell their audio NFTs. Liveloop also has a beautiful music player with spectrum, making it easy for buyers to preview the NFTs before they buy them."
    /> -->
  </main>

  <main class="grid mt-5">
    <div class="grid gap-5">
      <Card
        :color="workData.work[3].color"
        :sm="workData.work[3].sm"
        :title="workData.work[3].title"
        :description="workData.work[3].description"
        :link="workData.work[3].link"
      />
    </div>
  </main>
  <main class="grid mt-5">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <Card
        v-for="(item, index) in workData.work[4]"
        :key="index"
        :color="item.color"
        :sm="item.sm"
        :title="item.title"
        :description="item.description"
      />

      <!-- <Card color="dark" sm title="vuefire notes" /> -->
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
      <Card
        v-for="(item, index) in workData.work[5]"
        :key="index"
        :color="item.color"
        :sm="item.sm"
        :title="item.title"
        :description="item.description"
        :link="item.link"
        :class="index === 0 ? '' : 'lg:col-span-2'"
      />
    </div>
  </main>
</template>
<style scoped></style>
