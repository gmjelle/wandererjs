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
    @NEXT_STEP="next"
    v-if="!isDone"
  ></component>
</template>

<script setup lang="ts">
import { computed, ref } from "@vue/reactivity";
import tooltip from "./components/Tooltip.vue";
import { Step } from "./types";
import HardHighlight from "./components/HardHightlight.vue";
import SoftHighlight from "./components/SoftHighlight.vue";

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
