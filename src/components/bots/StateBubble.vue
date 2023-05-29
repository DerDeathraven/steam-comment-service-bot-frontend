<template>
  <div class="flex items-center justify-center state-wrapper">
    <hr v-if="!isFirst" class="w-1/2" />
    <div class="state-text-wrapper">
      <div>
        {{ name }}
      </div>
      <div>
        {{ amount }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  name: string;
  amount: number;
  isFirst: boolean;
};
defineProps<Props>();
</script>

<style scoped>
.state-wrapper {
  width: 10rem;
  @apply text-white text-center;
}
.state-text-wrapper {
  width: 5rem;
  @apply text-white text-center;
}
</style>
