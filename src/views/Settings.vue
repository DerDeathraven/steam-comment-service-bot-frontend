<template>
  <div class="grid grid-cols-2 gap-4 m-4">
    <editTextFile></editTextFile>
    <InstalledPlugins></InstalledPlugins>
  </div>
</template>

<script setup lang="ts">
import editTextFile from "../components/settings/editTextFile.vue";
import InstalledPlugins from "../components/settings/installedPlugins.vue";
</script>

<style scoped></style>
