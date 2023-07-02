<template>
  <Tile class="flex flex-col gap-4">
    <div>
      <h3 class="text-lg">{{ folderName }}</h3>
    </div>
    <ul class="ul-wrapper">
      <li
        v-for="file in files"
        :key="file"
        :class="{ active: file === currentFile }"
        @click="currentFile = file"
      >
        {{ file }}
      </li>
    </ul>
  </Tile>
</template>

<script setup lang="ts">
import Tile from "../../Tile.vue";
type Props = {
  folderName: string;
  files: Array<string>;
};
const currentFile = defineModel();
defineProps<Props>();
</script>

<style scoped lang="scss">
.ul-wrapper {
  li {
    @apply px-1 py-0.5 rounded cursor-pointer;
    &.active {
      background-color: var(--background);
    }
    &:hover {
      background-color: var(--background);
    }
  }
}
</style>
