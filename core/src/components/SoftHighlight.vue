<template>
  <div>
    <component :is="Teleport" to="body">
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
    </component>
  </div>
</template>

<script setup lang="ts">
import { onUpdated, onMounted, onBeforeUnmount } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
import { matchBounds } from "../utils/utils";

import { Teleport as teleport_, TeleportProps, VNodeProps } from "vue";

const Teleport = teleport_ as {
  new (): {
    $props: VNodeProps & TeleportProps;
  };
};

const props = defineProps<{ target: HTMLElement }>();
const gradientElement = ref();

function showForElement() {
  queueMicrotask(() => {
    matchBounds(props.target, gradientElement.value, 25);
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
