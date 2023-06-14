<template>
  <div class="flex bot-row relative" :class="!bot.index ? 'main' : ''">
    <div class="absolute flex w-full justify-end pr-8" v-if="!bot.index">
      <ph-crown-simple :size="28" class="crown" />
    </div>
    <div class="flex flex-col w-full">
      <div class="upper-info-container">
        <div class="img-wrapper">
          <img class="" :src="bot.user.profileDump.avatarFull" />
        </div>

        <div class="flex justify-center items-center w-full account-name">
          {{ bot.user.accountInformation.name }}
        </div>
      </div>

      <div class="flex flex-col p-3 info-cluster">
        <div class="infoItem">
          <ph-identification-card :size="32" /><span class="status-span">{{
            bot.user.profileDump.stateMessage
          }}</span>
        </div>

        <div class="infoItem">
          <ph-users-three :size="32" />
          {{ Object.keys(bot.user.friends).length }}
        </div>
      </div>
      <div class="settings-cluster">
        <button class="buttonClusterItem" v-if="bot.index">
          <ph-star :size="20" />
        </button>
        <button class="buttonClusterItem">
          <ph-trash-simple :size="20" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  PhUsersThree,
  PhIdentificationCard,
  PhTrashSimple,
  PhStar,
  PhCrownSimple,
} from "@phosphor-icons/vue";
type Props = {
  bot: Bot;
};
defineProps<Props>();
</script>

<style scoped lang="scss">
.bot-row {
  @apply flex rounded-lg p-4 justify-between;
  background-color: var(--tile);
  container-type: inline-size;
}
.settings-cluster {
  @apply flex justify-end gap-3;
}
.infoItem {
  @apply flex items-center gap-3;
}
.upper-info-container {
  @apply flex flex-row;
}
.img-wrapper {
  width: 5rem;
  img {
    max-width: 100%;
    @apply rounded-lg;
    object-fit: contain;
  }
}
.main {
  outline: solid 1px var(--highlight);
  .crown {
    fill: var(--highlight);
  }
}
@container (max-inline-size: 150px) {
  .upper-info-container {
    @apply flex-col gap-4;
    .img-wrapper {
      width: 100%;
      @apply flex justify-center;
      img {
        width: 100%;
      }
    }
    .account-name {
      @apply text-center;
    }
  }
  .info-cluster {
    @apply flex-row gap-4 w-full justify-center;
    .infoItem {
      @apply gap-0 flex-col;
      .status-span {
        max-width: 10ch;
        height: 2ch;
        overflow: hidden;
      }
    }
  }
  .settings-cluster {
    @apply justify-center;
  }
}
</style>
