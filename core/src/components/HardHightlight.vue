<template>
  <div>
    <teleport to="body">
      <div class="wanderer-hard-highlight">
        <div ref="gradientElement" class="wanderer-hard-highlight-shadow"></div>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { onUpdated, onMounted, onBeforeUnmount, ref } from "vue";
import { matchBounds } from "../utils/utils";
import arrive from "../utils/arrive";

const props = defineProps<{ target: string | Element }>();
const gradientElement = ref();

async function showForElement() {
  const element = await arrive(props.target);
  queueMicrotask(() => {
    matchBounds(element, gradientElement.value, 0);
  });
}

window.addEventListener("scroll", showForElement, { capture: true });

onMounted(() => {
  showForElement();
});

onUpdated(() => {
  showForElement();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", showForElement, { capture: true });
});
</script>
