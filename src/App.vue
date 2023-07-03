<template>
  <div class="wrapper">
    <Navbar></Navbar>
    <div class="flex w-full h-full">
      <Sidebar></Sidebar>
      <div class="w-full">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/general/Sidebar.vue";
</script>

<style scoped>
.wrapper {
  height: 100lvh;
  max-width: 100vw;
  @apply flex flex-col overflow-hidden;
  background-color: var(--background);
}
</style>
