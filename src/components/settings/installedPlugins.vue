<template>
  <Tile class="flex flex-col justify-between gap-4">
    <div>
      <h3 class="pb-4">Installed Plugins</h3>
      <div class="flex flex-col gap-4">
        <div
          v-for="plugin in plugins"
          class="group flex items-center justify-between rounded-lg py-1"
        >
          <div>{{ plugin }}</div>
          <div v-if="!isPreInstalled(plugin)">
            <PhTrash size="20"></PhTrash>
          </div>
          <div v-else class="preinstalled-wrapper">PreInstalled</div>
        </div>
      </div>
    </div>
    <div class="pb-4">
      <h3>Recommended Plugins</h3>
      <div class="flex flex-col gap-4">
        <div
          v-for="plugin in filteredRecommendedPlugins"
          class="group flex items-center justify-between rounded-lg py-1"
        >
          <div>{{ plugin }}</div>
          <button class="button !py-1">install</button>
        </div>
      </div>
    </div>
  </Tile>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import Tile from "../Tile.vue";
import { PhTrash } from "@phosphor-icons/vue";
import { Settings } from "../../services/RpcHandler";
const plugins = ref([]);
const preInstalledPlugins = ["steam-comment-bot-rest"];
const recommendedPlugins = ["steam-comment-example", "steam-comment-bot-rest"];
const filteredRecommendedPlugins = computed(() => {
  return recommendedPlugins.filter((p) => !plugins.value.includes(p));
});
function isPreInstalled(plugin) {
  return preInstalledPlugins.includes(plugin);
}

onMounted(async () => {
  plugins.value = await Settings.getPlugins();
});
</script>

<style scoped>
.preinstalled-wrapper {
  @apply rounded-xl px-2 py-1;
  background-color: var(--background);
}
.install-wrapper {
  @apply rounded-xl px-2 py-1;
  background-color: var(--highlight);
}
</style>
