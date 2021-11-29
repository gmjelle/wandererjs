<template>
  <div>
    <component :is="Teleport" to="body">
      <div class="wanderer-soft-highlight">
        <div ref="gradientElement" class="wanderer-soft-highlight-shadow"></div>
      </div>
    </component>
  </div>
</template>

<script setup lang="ts">
import { onUpdated, onMounted, onBeforeUnmount, ref } from "vue";
import { matchBounds } from "../utils/utils";

import { Teleport as teleport_, TeleportProps, VNodeProps } from "vue";
import arrive from "../utils/arrive";

const Teleport = teleport_ as {
  new (): {
    $props: VNodeProps & TeleportProps;
  };
};

const props = defineProps<{ target: string | Element }>();
const gradientElement = ref();

async function showForElement() {
  const element = await arrive(props.target);
  queueMicrotask(() => {
    matchBounds(element, gradientElement.value, 25);
  });
}

window.addEventListener("scroll", showForElement, { capture: true });
window.addEventListener("resize", showForElement, { capture: true });

onMounted(() => {
  showForElement();
});

onUpdated(() => {
  showForElement();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", showForElement, { capture: true });
  window.removeEventListener("resize", showForElement, { capture: true });
});
</script>
