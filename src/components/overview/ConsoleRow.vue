<template>
  <Tile class="h-full col-span-2">
    <h2>Console</h2>
    <ul class="overflow-auto h-full">
      <li v-for="line in fileContent">{{ line }}</li>
    </ul>
  </Tile>
</template>

<script setup lang="ts">
import { Ref, onUnmounted, ref } from "vue";
import Tile from "../Tile.vue";
import { Settings } from "../../services/RpcHandler";
const fileContent: Ref<string[]> = ref([]);
const eventStream = Settings.tailConsoleFile();
eventStream.addEventListener("message", (e) => {
  const line = e.data;
  fileContent.value.push(line);
});
onUnmounted(() => {
  eventStream.close();
});
</script>

<style scoped lang="scss"></style>
