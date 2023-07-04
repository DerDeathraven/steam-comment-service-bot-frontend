<template>
  <div class="h-full overflow-auto mr-3">
    <ul class="ul-wrapper">
      <li
        v-for="command in commands"
        :class="{ active: command.name === activeCommand?.name }"
        @click="activeCommand = command"
      >
        {{ command.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { CommandDescription } from "../../model/commands";

type Props = {
  commands: CommandDescription[];
};
defineProps<Props>();
const activeCommand = defineModel<CommandDescription | undefined>();
</script>

<style scoped lang="scss">
.ul-wrapper {
  li {
    @apply px-1 py-0.5 rounded cursor-pointer overflow-auto;
    &.active {
      background-color: var(--background);
    }
    &:hover {
      background-color: var(--background);
    }
  }
}
</style>
