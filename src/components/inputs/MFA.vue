<template>
  <div class="mfa-container">
    <input
      v-for="(inp, i) in inputArr"
      :id="'inp' + i"
      type="number"
      :value="inp"
      class="mfa-input"
      @input="skipToNext(i, $event)"
      @paste="onPaste"
      @focus="$event.target!.value = ''"
    />
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";

// type mfaProps = {
//   invalid: boolean;
// };
// defineProps<mfaProps>();

const emit = defineEmits(["fullCode", "input"]);
const inputArr: Ref<string[]> = ref([]);
function resetInputArr() {
  inputArr.value = [];
  for (let i = 0; i < 6; i++) {
    inputArr.value.push("");
  }
}
function skipToNext(i: number, event: any) {
  emit("input");
  inputArr.value[i] = event.target.value;
  i = i + 1;
  if (inputArr.value.length == i) {
    console.log(i);
    document.getElementById("inp" + (i - 1))?.blur();

    if (inputArr.value.join("").length == 6)
      emit("fullCode", inputArr.value.join(""));
  } else {
    inputArr.value[i] = "";
    document.getElementById("inp" + i)?.focus();

    console.log(inputArr.value);
  }
}
/**
 * Checks if the paste event contains a valid number and fills the input
 *
 */
function onPaste(event: ClipboardEvent) {
  event.preventDefault();
  const data = event.clipboardData?.getData("text");
  if (!data) return; //clipboard is empty
  const numberData = Number(data);
  if (isNaN(numberData)) return; // clipboard is not a number
  inputArr.value = inputArr.value.map((val, i) => {
    return numberData.toString().split("")[i];
  });
  console.log(inputArr.value);
}
resetInputArr();
</script>

<style scoped lang="scss">
.mfa-container {
  @apply flex w-full justify-center gap-7 p-5;
}
.mfa-input {
  @apply w-10 h-10 text-center text-xl rounded;
  background-color: var(--background);
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
  transition: outline-offset 0.3s;
  &:focus {
    outline: var(--highlight) 1px solid;
    outline-offset: -2px;
  }
}
</style>
