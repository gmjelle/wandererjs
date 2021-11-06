<template>
  <teleport to="body">
    <HardHighlight v-if="highlightType === 'HARD'" :target="currentTarget" />
  </teleport>
  <component :is="type" :step="currentStep"></component>
</template>

<script setup lang="ts">
import { computed, ref } from "@vue/reactivity";
import tooltip from "./components/Tooltip.vue";
import { Step } from "./types";
import HardHighlight from "./components/HardHighlight.vue";

const props = defineProps<{ steps: Step[] }>();
const currentIndex = ref(0);

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

console.log(highlightType.value);

let type = computed(() => {
  return currentStep.value?.type.toLowerCase() === "tooltip"
    ? tooltip
    : tooltip;
});
</script>
