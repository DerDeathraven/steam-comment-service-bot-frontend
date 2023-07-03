<template>
  <Tile class="flex flex-col gap-4 h-[34vh]">
    <h3>Proxies</h3>
    <template v-if="proxies.length">
      <div>
        <button class="button">Add Proxy</button>
      </div>
      <div>
        <ul>
          <li v-for="proxy in proxies">{{ proxy.host }}:{{ proxy.port }}</li>
        </ul>
      </div></template
    >
    <template v-else>
      <div
        class="w-full h-full border flex justify-center items-center flex-col gap-4 proxy-wrapper"
      >
        <p>
          It seems you dont have any proxies defined. Proxies help reduce the
          chance of a ratelimit from steam.
        </p>

        <button class="button">Add Proxy</button>
      </div>
    </template>
  </Tile>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from "vue";
import { Proxy } from "../../services/types/returnTypes";
import { Settings } from "../../services/RpcHandler";
import Tile from "../Tile.vue";

const proxies: Ref<Proxy[]> = ref([]);

onMounted(async () => {
  proxies.value = await Settings.getProxies();
});
</script>

<style scoped lang="scss">
.proxy-wrapper {
  border-color: var(--highlight);
  @apply rounded;
  p {
    color: var(--highlight);
    @apply text-lg;
  }
}
</style>
