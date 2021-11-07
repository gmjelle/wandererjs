<template>
  <div
    ref="container"
    id="tooltip"
    class="
      gdx-absolute
      gdx-border
      gdx-shadow-lg
      gdx-rounded
      gdx-bg-white
      gdx-z-50
      gdx-px-5
      gdx-py-2
    "
  >
    <div ref="arrow" id="arrow"></div>
    <div class="gdx-flex gdx-flex-col">
      <div class="gdx-text-2xl">{{ step.headerText }}</div>
      <div class="">{{ step.bodyText }}</div>
    </div>
    <div v-if="shouldShowButton" class="gdx-flex gdx-justify-between gdx-mt-2">
      <div></div>
      <div
        class="
          gdx-px-3
          gdx-py-1
          gdx-bg-blue-500
          gdx-text-white
          gdx-text-xs
          gdx-rounded
          gdx-cursor-pointer
        "
        @click="goToNextStep"
      >
        Next
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch } from "@vue/runtime-core";
import { Step } from "../types";
import { computed, ref } from "@vue/reactivity";
import { createPopper, Instance } from "@popperjs/core";
import { NEXT_STEP } from "../events";
import { isElementInViewport } from "../utils/utils";

const props = defineProps<{ step: Step }>();

const emit = defineEmits([NEXT_STEP]);
let popper: Instance | null = null;

const targetElement = computed((): Element => {
  return props.step.element as Element;
});
const container = ref<HTMLElement | null>(null);
const arrow = ref<HTMLElement | null>(null);

function performSetup() {
  scrollToElementIfNecessary();
  setupPopper();
  setupProgress();
}

function scrollToElementIfNecessary() {
  const isVisible = isElementInViewport(targetElement.value);
  if (isVisible) return;
  targetElement.value.scrollIntoView(true);
}

watch(targetElement, () => {
  performSetup();
});

const shouldShowButton = props.step.progressOn === "BUTTON";

function setupProgress() {
  targetElement.value?.addEventListener(
    "click",
    () => {
      goToNextStep();
    },
    { once: true }
  );
}

function setupPopper() {
  if (popper) popper.destroy();

  popper = createPopper(
    targetElement.value as Element,
    container.value as HTMLElement,
    {
      modifiers: [
        { name: "offset", options: { offset: [10, 20] } },
        { name: "arrow", options: { element: arrow.value } },
      ],
    }
  );
}

function goToNextStep() {
  emit(NEXT_STEP);
}

onMounted(() => {
  performSetup();
});

onBeforeUnmount(() => {
  popper?.destroy();
});
</script>

<style scoped></style>
