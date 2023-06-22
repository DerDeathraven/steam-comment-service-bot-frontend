<template>
  <div class="sidebar">
    <RouterLink v-for="link in links" :to="link.to" class="link">
      <component :is="link.icon" size="24"></component>
      <span>{{ link.name }}</span>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { PhGlobeSimple, PhRobot, PhGear } from "@phosphor-icons/vue";

const links = [
  {
    name: "Overview",
    to: "/",
    icon: PhGlobeSimple,
  },
  {
    name: "Bots",
    to: "/bots",
    icon: PhRobot,
  },
  {
    name: "Settings",
    to: "/settings",
    icon: PhGear,
  },
];
</script>

<style scoped>
.sidebar {
  width: 10vw;
  height: 100%;
  background-color: var(--tile);
  @apply flex flex-col px-2 py-4 gap-4;
}
.link {
  @apply flex gap-2 items-center;
}
</style>
