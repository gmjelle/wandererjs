<template>
  <HardHighlight
    v-if="!isDone && highlightType === 'HARD'"
    :target="currentTarget"
  />

  <SoftHighlight
    v-if="!isDone && highlightType === 'SOFT'"
    :target="currentTarget"
  />

  <component
    :is="type"
    :step="currentStep"
    :theme="theme"
    @NEXT_STEP="next"
    v-if="!isDone"
  ></component>
</template>

<script setup lang="ts">
import { computed, ref } from "@vue/reactivity";
import Tooltip from "./components/Tooltip.vue";
import { Step, Theme } from "./types";
import HardHighlight from "./components/HardHightlight.vue";
import SoftHighlight from "./components/SoftHighlight.vue";

const props = defineProps<{ steps: Step[]; theme: Theme }>();
const currentIndex = ref(0);
const isDone = ref(false);

const currentStep = computed(() => {
  const step = props.steps[currentIndex.value];
  step.element =
    typeof step.element === "string"
      ? document.body.querySelector(step.element)
      : step.element;
  return step;
});

const currentTarget = computed(() => {
  return currentStep.value.element as Element;
});

const highlightType = computed(() => {
  return currentStep.value.highlightType;
});

let type = computed(() => {
  switch (currentStep.value?.type?.toLowerCase()) {
    case "tooltip":
      return Tooltip;

    default:
      return Tooltip;
  }
});

function onDone() {
  isDone.value = true;
}

function next() {
  if (currentIndex.value + 1 >= props.steps.length) return onDone();
  currentIndex.value++;
}

function back() {
  if (currentIndex.value === 0) return;
  currentIndex.value--;
}

defineExpose({ next, back });
</script>
