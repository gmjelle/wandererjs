<template>
  <div>
    <teleport to="body">
      <div
        class="
          gdx-absolute
          gdx-top-0
          gdx-left-0
          gdx-w-full
          gdx-h-full
          gdx-pointer-events-none
          soft-highlight
          gdx-z-20
        "
      >
        <div
          ref="gradientElement"
          class="gdx-absolute soft-highlight-shadow"
        ></div>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { onUpdated, onMounted, onBeforeUnmount } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
import { matchBounds } from "../utils/utils";

const props = defineProps<{ target: Element }>();
const gradientElement = ref<HTMLElement | null>(null);

function showForElement() {
  queueMicrotask(() => {
    matchBounds(
      props.target as HTMLElement,
      gradientElement.value as HTMLElement,
      25
    );
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
