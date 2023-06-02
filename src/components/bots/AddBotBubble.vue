<template>
  <div class="flex flex-col bot-bubble-wrapper">
    <div class="img-wrapper">
      <span> + </span>
      <span> Add Bot</span>
    </div>
    <div class="text-sm inline"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.bot-bubble-wrapper {
  width: 150px;
}
.img-wrapper {
  @apply rounded-full h-full flex flex-col justify-center items-center text-center;
  border: var(--highlight) 2px solid;
}
</style>
