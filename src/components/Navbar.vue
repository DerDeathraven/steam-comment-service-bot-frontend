<template>
  <div class="nav-wrapper">
    <div class="img-wrapper">
      <img :src="logosrc" alt="Logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import logosrc from "../assets/Logo.png";
</script>

<style scoped lang="scss">
.nav-wrapper {
  height: 10lvh;
  background-color: var(--tile);
}

.img-wrapper {
  width: 20%;
  height: 100%;
  @apply p-3;
  background-color: var(--tile);
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
