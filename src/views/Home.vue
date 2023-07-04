<template>
  <div class="tile-wrapper">
    <ProgramData></ProgramData>
    <CommandArea></CommandArea>
    <ConsoleRow></ConsoleRow>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted } from "vue";
import { getState } from "../services/Controller";
import { useRoute, useRouter } from "vue-router";
import ProgramData from "../components/overview/ProgramData.vue";
import { useBotStore } from "../Stores/BotsStorage";
import CommentField from "../components/general/CommentField.vue";
import { Bots } from "../services/RpcHandler";
import ConsoleRow from "../components/overview/ConsoleRow.vue";
import CommandArea from "../components/general/CommandArea.vue";
const router = useRouter();

onMounted(async () => {
  const state = await getState();
  if (state === 1) {
    router.push("/loading");
  }
  console.log(await Bots.getBots());
  useBotStore().updateBots();
});
</script>

<style scoped>
.tile-wrapper {
  @apply grid grid-cols-2 grid-rows-2 m-4 gap-4 h-[87vh] overflow-hidden;
}
</style>
