<template>
  <div class="tile">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.tile {
  background-color: var(--tile);
  @apply rounded-lg p-4;
}
</style>
