<template>
  <div class="markdown-wrapper group">
    <Markdown :source="source"></Markdown>
    <div
      class="absolute inset-0 hidden justify-center items-center group-hover:flex"
    >
      <div>
        <button class="button">Read Full Changelog</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Markdown from "vue3-markdown-it";
import { getLatestChangelog } from "../../services/Controller";
const source = ref("");
onMounted(async () => {
  source.value = await getLatestChangelog();
});
</script>

<style scoped lang="scss">
.markdown-wrapper {
  @apply overflow-hidden h-full relative p-4 rounded;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.9)
    );
    background-color: rgba(0, 0, 0, 0.8);
  }
  transition: all 0.3s ease-in-out;
}
</style>
