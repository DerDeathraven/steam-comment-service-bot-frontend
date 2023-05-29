<template>
  <div class="flex flex-col bot-bubble-wrapper">
    <div class="img-wrapper">
      <img :src="bot.user.profileDump.avatarFull" alt="" />
    </div>
    <div class="text-sm">
      {{ bot.user.accountInformation.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  bot: any;
};
const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.bot-bubble-wrapper {
  width: 150px;
}
.img-wrapper {
  @apply h-full;

  img {
    @apply rounded-full;
    aspect-ratio: 1/1;
    height: 100%;
  }
}
</style>
