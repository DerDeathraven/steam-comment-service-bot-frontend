<template>
  <AddBotDiaglog v-model="showAddBotDiaglog"></AddBotDiaglog>
  <div class="tile-wrapper">
    <div class="flex justify-end">
      <button @click="addBot" class="button">Add Bot</button>
    </div>
    <div class="flex flex-col gap-4 botRows-wrapper">
      <BotRow
        v-for="bot in botStore.bots"
        :key="bot.id"
        :bot="bot"
        class="botsRow"
      ></BotRow>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import BotRow from "../components/bots/BotRow.vue";
import AddBotDiaglog from "../components/botSettings/addBotDiaglog.vue";
import { useBotStore } from "../Stores/BotsStorage";

const botStore = useBotStore();
const showAddBotDiaglog = ref(false);
onMounted(async () => {
  await botStore.updateBots();
});
async function addBot() {
  showAddBotDiaglog.value = true;
  await waitForClosing();
  await botStore.updateBots();
}
function waitForClosing() {
  return new Promise((resolve) => {
    watch(showAddBotDiaglog, resolve);
  });
}
</script>

<style scoped>
.tile-wrapper {
  @apply grid grid-cols-1 grid-rows-1 m-4 gap-4;
}
</style>
