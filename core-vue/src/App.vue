<template>
  <HardHighlight
    v-if="!isDone && highlightType === 'HARD'"
    :target="currentTarget"
  />

  <component
    :is="type"
    :step="currentStep"
    @NEXT_STEP="goToNextStep"
    v-if="!isDone"
  ></component>
</template>

<script setup lang="ts">
import { computed, ref } from "@vue/reactivity";
import tooltip from "./components/Tooltip.vue";
import { Step } from "./types";
import HardHighlight from "./components/HardHightlight.vue";

const props = defineProps<{ steps: Step[] }>();
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
  return currentStep.value?.type.toLowerCase() === "tooltip"
    ? tooltip
    : tooltip;
});

function onDone() {
  isDone.value = true;
}

function goToNextStep() {
  if (currentIndex.value + 1 >= props.steps.length) return onDone();
  currentIndex.value++;
}
</script>
