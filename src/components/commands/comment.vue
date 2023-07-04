<template>
  <div>
    <h2 class="mb-4">Comment</h2>
    <div class="comment-form">
      <SteamAccountInput v-model="steamAccount"></SteamAccountInput>
      <div class="amount-wrapper">
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          v-model="amount"
        />
      </div>
      <div class="button-wrapper">
        <button @click="sendComments()">Send</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Tile from "../Tile.vue";
import SteamAccountInput from "../inputs/SteamAccountInput.vue";
import { Comments } from "../../services/RpcHandler";
const steamAccount = ref("");
const amount = ref(0);
function sendComments() {
  if (!steamAccount.value) {
    return;
  }
  if (amount.value <= 0) {
    return;
  }
  Comments.comment(amount.value.toString(), steamAccount.value);
}
</script>

<style scoped lang="scss">
.amount-wrapper {
  input {
    background-color: var(--background);
    @apply rounded-lg p-2 w-1/3;
    transition: outline-offset 0.3s;
    &:focus {
      outline: var(--highlight) 1px solid;
      outline-offset: -2px;
    }
  }
}
.button-wrapper {
  button {
    @apply rounded-lg p-2 px-7;
    color: rgb(249, 249, 249);
    background-color: var(--highlight);
  }
}
.custom-comment-wrapper {
  input {
  }
}

.comment-form {
  @apply flex flex-col gap-4;
}
</style>
