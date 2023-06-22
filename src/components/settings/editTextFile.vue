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
import { getCommentFile, saveCommentFile } from "../../services/Controller";
import Tile from "../Tile.vue";

const textField = ref("");
onBeforeMount(async () => {
  textField.value = await getCommentFile();
});
function saveQuotes() {
  saveCommentFile(textField.value);
}
</script>

<style scoped lang="scss">
.textArea {
  background-color: var(--background);
  @apply p-4 rounded-lg w-full;
}
</style>
