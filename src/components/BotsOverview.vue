<template>
  <Tile v-if="botStore.bots.length">
    <div>
      <h2>Main</h2>
      <div class="flex justify-center">
        <BotBubble :bot="botStore.mainBot"></BotBubble>
      </div>
    </div>
    <div>
      <h2>Network</h2>
      <div class="flex">
        <BotBubble v-for="bot in botStore.slaves" :bot="bot"></BotBubble>
        <AddBotBubble></AddBotBubble>
      </div>
    </div>
  </Tile>
</template>

<script setup lang="ts">
import { useBotStore } from "../Stores/BotsStorage";
import BotBubble from "./bots/BotBubble.vue";
import Tile from "./Tile.vue";
import AddBotBubble from "./bots/AddBotBubble.vue";
const botStore = useBotStore();
</script>

<style scoped></style>
