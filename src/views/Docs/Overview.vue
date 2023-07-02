<template>
  <div class="grid grid-cols-6 m-4 gap-4 h-[87vh]">
    <div class="flex gap-4 col-span-2 lg:col-span-1 flex-col overflow-auto">
      <FileContainer
        folder-name="System"
        :files="systemFiles"
        v-model="currentFile"
      ></FileContainer>
      <FileContainer
        v-for="(folder, key) in folderContent"
        :files="folder"
        :folder-name="key"
        :key="key"
        v-model="currentFile"
      ></FileContainer>
      <FileContainer
        v-for="(folder, key) in pluginsContent"
        :files="folder"
        :folder-name="key"
        :key="key"
        v-model="currentFile"
      ></FileContainer>
    </div>
    <Tile
      class="col-span-4 lg:col-span-5 overflow-auto h-full flex flex-col gap-4 markdown-container"
    >
      <h2 class="text-xl">{{ currentFile }}</h2>
      <Markdown :source="currentFileContent"></Markdown>
    </Tile>
  </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from "vue";
import { Docs } from "../../services/RpcHandler";
import FileContainer from "../../components/Docs/overview/FileContainer.vue";
import Markdown from "vue3-markdown-it";
import Tile from "../../components/Tile.vue";
import { computedAsync } from "@vueuse/core";

const folderContent: Ref<Record<string, string[]>> = ref({});
const systemFiles = ref([]);
const currentFile = ref("");
const currentFileContent = computedAsync(async () => {
  if (!currentFile.value) return;
  const folderName = findName(currentFile.value);
  let file = "";
  if (folderName === "system") {
    file = await Docs.getDocFile(currentFile.value);
  } else {
    file = await Docs.getDocFile(folderName + "/" + currentFile.value);
  }
  return file.replace(/\[⬅️ .*\]\(.*\)/, "");
});
const pluginsContent: Ref<Record<string, string[]>> = ref({});
function findName(name: string) {
  const isSystem = systemFiles.value.find((f) => f == name);
  if (isSystem) {
    return "system";
  }
  const folderObject = { ...folderContent.value, ...pluginsContent.value };
  for (const [key, value] of Object.entries(folderObject)) {
    if (value.includes(name)) {
      return key;
    }
  }
}
onMounted(async () => {
  const resp = await Docs.getDocFolders();
  systemFiles.value = resp.files;
  pluginsContent.value = resp.plugins;
  folderContent.value = resp.folders;
  console.log(resp.folders);
});
</script>

<style lang="scss">
.markdown-container {
  p {
    @apply py-2;
  }
  a {
    color: var(--highlight);
  }
  strong {
    @apply font-bold;
  }
}
</style>
