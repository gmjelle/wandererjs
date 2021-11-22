<template>
  <div>
    <teleport to="body">
      <div class="wanderer-soft-highlight">
        <div ref="gradientElement" class="wanderer-soft-highlight-shadow"></div>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { onUpdated, onMounted, onBeforeUnmount, ref } from "vue";
import arrive from "../utils/arrive";
import { matchBounds } from "../utils/utils";

const props = defineProps<{ target: Element | string }>();
const gradientElement = ref();

async function showForElement() {
  const element = await arrive(props.target);
  queueMicrotask(() => {
    matchBounds(element, gradientElement.value, 25);
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
