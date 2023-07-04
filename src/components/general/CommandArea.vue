<template>
  <Tile class="grid grid-cols-4">
    <commandList v-model="activeCommand" :commands="commands"></commandList>

    <component
      :is="activeComponent"
      :command="activeCommand"
      class="col-span-3"
    ></component>
  </Tile>
</template>

<script setup lang="ts">
import { Ref, computed, onMounted, ref } from "vue";
import { CommandDescription } from "../../model/commands";
import { Commands } from "../../services/RpcHandler";
import { useCommandComponent } from "../../composables/useCommandComponent";
import commandList from "../inputs/CommandList.vue";
import Tile from "../Tile.vue";

const commands: Ref<CommandDescription[]> = ref([]);
const activeCommand: Ref<CommandDescription | undefined> = ref();
const activeComponent = computed(() =>
  useCommandComponent(activeCommand.value?.name || "")
);
onMounted(async () => {
  commands.value = await Commands.getCommandList();
});
</script>

<style scoped lang="scss"></style>
