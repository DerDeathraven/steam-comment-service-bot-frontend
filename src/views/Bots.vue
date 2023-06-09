<template>
  <AddBotDiaglog :show="true"></AddBotDiaglog>
  <div class="tile-wrapper">
    <div>
      <div>add bot</div>
    </div>
    <div class="flex flex-col gap-4">
      <BotRow v-for="bot in bots" :key="bot.id" :bot="bot"></BotRow>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from "vue";
import { getBots } from "../services/Controller";
import BotRow from "../components/bots/BotRow.vue";
import AddBotDiaglog from "../components/botSettings/addBotDiaglog.vue";

const bots: Ref<any[]> = ref([]);
onMounted(async () => {
  bots.value = await getBots();
  console.log(bots.value);
});
</script>

<style scoped>
.tile-wrapper {
  @apply grid grid-cols-1 grid-rows-1 m-4 gap-4;
}
</style>
