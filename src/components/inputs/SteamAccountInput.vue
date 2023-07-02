<template>
  <div class="steam-account-input-wrapper">
    <div v-if="steamAccount" class="steam-account-wrapper">
      <div class="h-full">
        <img :src="steamAccount.avatarFull" alt="" />
      </div>
      <div>
        <div class="steam-account-name">{{ steamAccount.steamID }}</div>
        <div class="steam-ccount-memberTime">
          {{ steamAccount.memberSince }}
        </div>
      </div>
    </div>
    <div v-else class="flex items-center h-full gap-5">
      <input
        type="text"
        name="steam-account"
        placeholder="Recieving Steam Account"
        v-model="input"
      />
      <button class="search-button" @click="findAccount">Search</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { searchSteamUser } from "../../services/SteamUser";
import { Frontend } from "../../services/RpcHandler";
const input = ref("76561198066931868");
const steamAccount: Ref<undefined | any> = ref(undefined);
const accountString = defineModel<string>();
//76561198066931868

async function findAccount() {
  const account = await Frontend.getSteamProfile(input.value);
  if (account) {
    steamAccount.value = account;
    console.log(account);
  }
  accountString.value = input.value;
}

if (accountString.value) {
  input.value = accountString.value;
  findAccount();
}
</script>

<style scoped lang="scss">
.steam-account-input-wrapper {
  @apply rounded-lg p-6;
  height: 10rem;
  background-color: var(--background);
  input {
    background-color: var(--tile);
    @apply rounded-lg p-2 w-1/3;
    transition: outline-offset 0.3s;
    &:focus {
      outline: var(--highlight) 1px solid;
      outline-offset: -2px;
    }
  }
  .search-button {
    @apply rounded-lg p-2;
    color: rgb(249, 249, 249);
    background-color: var(--highlight);
  }
  .steam-account-wrapper {
    @apply flex gap-4 items-center h-full;
    img {
      height: 100%;
      @apply rounded-full;
      aspect-ratio: 1/1;
    }
    .steam-account-name {
      @apply font-bold;
    }
  }
}
</style>
