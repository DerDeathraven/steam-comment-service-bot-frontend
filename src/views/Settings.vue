<template>
  <div class="grid grid-cols-2 gap-4 m-4 h-[85vh]">
    <editTextFile></editTextFile>
    <InstalledPlugins></InstalledPlugins>
    <ProxyList></ProxyList>
  </div>
</template>

<script setup lang="ts">
import ProxyList from "../components/settings/ProxyList.vue";
import editTextFile from "../components/settings/editTextFile.vue";
import InstalledPlugins from "../components/settings/installedPlugins.vue";
</script>

<style scoped></style>
