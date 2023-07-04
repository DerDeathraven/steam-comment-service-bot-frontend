<template>
  <div v-if="command" class="w-full flex flex-col">
    <h3>{{ command.name }}</h3>
    <p>{{ command.description }}</p>
    <div>
      <template v-for="arg in command.args">
        <SteamAccountInput
          v-if="arg.type === 'steamID64'"
          v-model="argInputs[arg.name]"
        />
        <div v-else>
          <input
            type="text"
            v-model="argInputs[arg.name]"
            :placeholder="arg.name"
            class="input"
          />
        </div>
      </template>
      <button class="button" @click="send()">Send</button>
    </div>
    <textarea
      v-model="result"
      disabled
      class="input h-full !w-full resize-none"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CommandDescription } from "../../model/commands";
import SteamAccountInput from "../inputs/SteamAccountInput.vue";
import { Commands } from "../../services/RpcHandler";

type Props = {
  command: CommandDescription;
};
const props = defineProps<Props>();
const argInputs = ref({});
const result = ref("");
async function send() {
  const args = props.command.args.map((arg) => argInputs.value[arg.name]);
  result.value = await Commands.executeCommand(props.command.name, args);
}
</script>

<style scoped lang="scss"></style>
