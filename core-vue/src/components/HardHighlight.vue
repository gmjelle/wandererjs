<template>
  <div
    class="
      gdx-absolute
      gdx-top-0
      gdx-left-0
      gdx-w-full
      gdx-h-full
      gdx-pointer-events-none
      hard-highlight
      gdx-z-20
    "
  >
    <div ref="gradientElement" class="gdx-absolute hard-highlight-shadow"></div>
  </div>
</template>

<script setup lang="ts">
import { onUpdated, onMounted } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
import { matchBounds } from "../utils/utils.ts";

const props = defineProps<{ target: Element }>();
const gradientElement = ref<HTMLElement | null>(null);

function showForElement() {
  queueMicrotask(() => {
    matchBounds(
      props.target as HTMLElement,
      gradientElement.value as HTMLElement,
      0
    );
  });
}

onMounted(() => {
  showForElement();
});

onUpdated(() => {
  showForElement();
});
</script>
