<template>
  <Tile>
    <h3>Overview</h3>
    <div class="flex flex-col justify-between h-full py-4">
      <div class="flex items-center justify-evenly h-12">
        <div class="text-center">
          <h4>Comments Since Startup</h4>
          <div>{{ commentCounts }}</div>
        </div>
        <div class="text-center">
          <h4>Bots</h4>
          <div>{{ botStore.bots.length }}</div>
        </div>
      </div>
      <div class="h-40 overflow-hidden">
        <h4>Latest Changelog</h4>
        <RenderChangelog></RenderChangelog>
      </div>
    </div>
  </Tile>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Tile from "../Tile.vue";
import RenderChangelog from "./RenderChangelog.vue";
import { useBotStore } from "../../Stores/BotsStorage";
import { Comments } from "../../services/RpcHandler";
const currentVersion = "1.0.0";
const commentCounts = ref(0);
const botStore = useBotStore();
onMounted(async () => {
  commentCounts.value = await Comments.commentCount();
});
</script>

<style scoped></style>
