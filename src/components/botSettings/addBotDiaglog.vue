<template>
  <div class="dialog" v-if="show">
    <div class="inner-dialog">
      <h2>Add a Bot</h2>
      <div>
        Adding a new bot is as easy as enterering your username and password.
        you will then be prompted to enter your steamguard code.
      </div>
      <div class="flex justify-evenly flex-col gap-5">
        <div class="form-group" v-if="beforeSteamguard">
          <input
            type="text"
            class="input"
            v-model="formState.name"
            placeholder="Name"
          />
        </div>
        <div class="form-group" v-if="beforeSteamguard">
          <input
            type="text"
            class="input"
            v-model="formState.password"
            placeholder="Password"
          />
        </div>
        <MFA
          v-if="!beforeSteamguard"
          @full-code="enteringSteamGuardCode($event)"
        ></MFA>
      </div>
      <div class="form-group">
        <button class="w-full button" @click="startAdding">Add</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { addBot } from "../../services/Controller";
import MFA from "../inputs/MFA.vue";

let botAdder: ReturnType<typeof addBot> | undefined = undefined;
const show = defineModel();
const beforeSteamguard = ref(true);
const formState = ref({
  name: "",
  password: "",
});
async function startAdding() {
  const { name, password } = formState.value;
  // console.log(name, password);
  botAdder = addBot(name, password);
  const { value: steamAccount } = await botAdder.next();

  if (!steamAccount) return;
  beforeSteamguard.value = false;
}
async function enteringSteamGuardCode(code: string) {
  const { value: steamAccount } = await botAdder!.next(code);

  if (!steamAccount) return;
  beforeSteamguard.value = false;
  show.value = false;
}
</script>

<style scoped lang="scss">
.dialog {
  @apply absolute w-full h-full flex justify-center items-center;
  background-color: #181818d5;

  .inner-dialog {
    @apply w-1/3 h-1/4 p-5 rounded-lg flex flex-col gap-5;
    background-color: var(--tile);
    .input {
      @apply w-full;
    }
  }
}
</style>
