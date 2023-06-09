<template>
  <div class="flex bot-row">
    <div class="flex">
      <div>
        {{ bot.index }}
      </div>
      <img class="rounded-full" :src="bot.user.profileDump.avatarFull" />
      <div class="flex flex-col">
        <div>{{ bot.user.accountInformation.name }}</div>
        <div>{{ bot.user.profileDump.stateMessage }}</div>

        <div>Friends: {{ Object.keys(bot.user.friends).length }}</div>
      </div>
    </div>

    <div class="settings-cluster">
      <div>Delete</div>
      <div>Make Main</div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  bot: Bot;
};
defineProps<Props>();
</script>

<style scoped lang="scss">
.bot-row {
  @apply flex rounded p-4 justify-between;
  background-color: var(--tile);
}
</style>
