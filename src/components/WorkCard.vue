<script setup>
import { Icon } from "@iconify/vue";
import Card from "./Card.vue";
import Crew1 from "../assets/crew-dog/m1.png";
import { onMounted } from "vue";
import { animate, inView } from "motion";
import { workData } from "../db";
</script>
<template>
  <main class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 p-2">
    <Card
      :image="Crew1"
      :title="workData.work[0].title"
      :description="workData.work[0].description"
    />
    <div class="grid gap-4">
      <Card
        v-for="(item, index) in workData.work[1]"
        :key="index"
        :color="item.color"
        :sm="item.sm"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </main>
  <main class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 p-2">
    <Card
      v-for="(item, index) in workData.work[2]"
      :key="index"
      :color="item.color"
      :sm="item.sm"
      :title="item.title"
      :description="item.description"
    />
    <!-- <Card
      sm
      title="live loop"
      description="It is a simple and easy-to-use platform that allows artists to sell their audio NFTs. Liveloop also has a beautiful music player with spectrum, making it easy for buyers to preview the NFTs before they buy them."
    /> -->
  </main>

  <main class="grid mt-5 p-2">
    <div class="grid gap-5">
      <Card
        :color="workData.work[3].color"
        :sm="workData.work[3].sm"
        :title="workData.work[3].title"
        :description="workData.work[3].description"
      />
    </div>
  </main>
  <main class="grid mt-5 p-2">
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
        :class="index === 0 ? '' : 'col-span-2'"
      />
      <!-- <Card color="dark" sm title="WYSIWYG" />
      <Card sm title="Vuefire notes" class="col-span-2" /> -->
      <!-- <Card sm title="prestiio" /> -->
    </div>
  </main>
</template>
<style scoped></style>
