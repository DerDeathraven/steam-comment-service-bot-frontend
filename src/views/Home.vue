<template>
  <div class="tile-wrapper">
    <BotsOverview></BotsOverview>
    <CommentField></CommentField>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted } from "vue";
import { getBots, getState } from "../services/Controller";
import { useRoute, useRouter } from "vue-router";
import BotsOverview from "../components/BotsOverview.vue";
import { useBotStore } from "../Stores/BotsStorage";
import CommentField from "../components/general/CommentField.vue";
import BotsStartup from "../components/BotsStartup.vue";
const router = useRouter();

onMounted(async () => {
  const state = await getState();
  if (state === 1) {
    router.push("/loading");
  }
  console.log(await getBots());
  useBotStore().updateBots();
});
</script>

<style scoped>
.tile-wrapper {
  @apply grid grid-cols-2 grid-rows-2 m-4 gap-4;
}
</style>
