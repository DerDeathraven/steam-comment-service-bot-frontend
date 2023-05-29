<template>
  <div class="wrapper">
    <Navbar></Navbar>
    <RouterView></RouterView>
  </div>
</template>
<script setup lang="ts">
import BotsOverview from "./components/BotsOverview.vue";
import Navbar from "./components/Navbar.vue";
</script>

<style scoped>
.wrapper {
  height: 100lvh;
  max-width: 100vw;
  @apply flex flex-col;
  background-color: var(--background);
}
</style>
