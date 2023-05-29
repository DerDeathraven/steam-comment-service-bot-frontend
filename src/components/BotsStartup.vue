<template>
  <Tile class="bots-overview">
    <h2 class="text-3xl text-white p-4">Bots</h2>
    <div class="flex">
      <StateBubble
        v-for="(state, index) in states"
        :name="state.name"
        :amount="state.amount"
        :is-first="!!!index"
      ></StateBubble>
    </div>
  </Tile>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Tile from "./Tile.vue";
import StateBubble from "./bots/StateBubble.vue";

const currentState = ref(0);

const states = [
  {
    name: "Startup",
    amount: 1,
  },
  {
    name: "Steam Guard",
    amount: 2,
  },
  {
    name: "Ready",
    amount: 0,
  },
];
</script>

<style scoped>
.bots-overview {
  width: 50%;
  @apply flex flex-col;
}
</style>
