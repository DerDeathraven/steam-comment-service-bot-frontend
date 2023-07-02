<template>
  <Tile class="gap-4 flex flex-col">
    <h2>Quotes</h2>

    <textarea v-model="textField" rows="15" class="textArea"></textarea>
    <div>
      <button class="button" @click="saveQuotes()">Save</button>
    </div>
  </Tile>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import Tile from "../Tile.vue";
import { Settings } from "../../services/RpcHandler";

const textField = ref("");
onBeforeMount(async () => {
  textField.value = await Settings.getQuoteFile();
});
function saveQuotes() {
  Settings.setQuoteFile(textField.value);
}
</script>

<style scoped lang="scss">
.textArea {
  background-color: var(--background);
  @apply p-4 rounded-lg w-full;
}
</style>
