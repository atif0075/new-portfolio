<script setup>
import { Icon } from "@iconify/vue";
import Card from "./Card.vue";
import Crew1 from "../assets/crew-dog/m1.png";
defineProps({
  workArray: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <main class="grid grid-cols-2 gap-5 mt-10">
    <Card
      :image="Crew1"
      title="Crew Dog"
      description="Crew Dog is a platform that connects people with the right skills to the right jobs. It is a platform that helps people to find jobs and companies to find the right candidates."
    />
    <div class="grid gap-4">
      <Card
        color="dark"
        :sm="true"
        title="prestiio"
        description="Prestiio is designed to bring together females into the same space to create meaningful conversations and discussions, with the primary objective of uplifting, motivating and enabling a prosperous future for all."
      />
      <div class="grid gap-5">
        <Card
          color="dark"
          :sm="true"
          title="Sendit"
          description="The ultimate web app for effortless business registration and direct access to the Sent-It organization, simplifying your path to business success. Join us and experience a streamlined, efficient journey to entrepreneurial excellence."
        />
      </div>
    </div>
  </main>
  <main class="grid grid-cols-2 gap-5 mt-5">
    <Card
      color="dark"
      sm
      title="Libertas"
      description="The app is used by a large financial institution to manage its clients and investments. The super admin has the most privileges, and can add and remove admins and salespersons. Admins can add salespersons."
    />
    <Card
      sm
      title="live loop"
      description="It is a simple and easy-to-use platform that allows artists to sell their audio NFTs. Liveloop also has a beautiful music player with spectrum, making it easy for buyers to preview the NFTs before they buy them."
    />
  </main>

  <main class="grid mt-5">
    <div class="grid gap-5">
      <Card
        color="dark"
        sm
        title="h2people"
        description="H2People is a platform that connects people with the right skills to the
      right jobs. It is a platform that helps people to find jobs and companies
      to find the right candidates."
      />
    </div>
  </main>
  <main class="grid mt-5">
    <div class="grid grid-cols-2 gap-5">
      <Card
        sm
        title="e-tech eng"
        description="Introducing a versatile portal that caters to Professionals, Recruiters, and Students, each with distinct roles and tasks. User activities are meticulously recorded and elegantly visualized through Echarts, providing insightful data representation."
      />
      <Card
        color="dark"
        sm
        title="e-tech hiring"
        description="Your versatile hiring hub for tech enthusiasts! Whether you're a professional, recruiter, or student, we've got roles and tasks designed just for you. Our system records your actions, providing valuable insights without the complexity."
      />
      <!-- <Card color="dark" sm title="vuefire notes" /> -->
    </div>
    <div class="grid grid-cols-3 gap-5 mt-5">
      <Card color="dark" sm title="WYSIWYG" />
      <Card sm title="Vuefire notes" class="col-span-2" />
      <!-- <Card sm title="prestiio" /> -->
    </div>
  </main>
</template>
<style scoped></style>
