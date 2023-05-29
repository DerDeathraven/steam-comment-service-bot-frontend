<template>
  <Tile v-if="botStore.bots.length">
    <div>
      <h2>Main</h2>
      <div>
        <BotBubble :bot="botStore.mainBot"></BotBubble>
      </div>
    </div>
    <div>
      <h2>Slaves</h2>
      <div class="flex">
        <BotBubble v-for="bot in botStore.slaves" :bot="bot"></BotBubble>
      </div>
    </div>
  </Tile>
</template>

<script setup lang="ts">
import { toRef } from "vue";
import { useBotStore } from "../Stores/BotsStorage";
import BotBubble from "./bots/BotBubble.vue";
import Tile from "./Tile.vue";
const botStore = useBotStore();
</script>

<style scoped></style>
