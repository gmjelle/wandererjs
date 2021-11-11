<template>
  <component
    :is="type"
    :step="currentStep"
    :theme="theme"
    @NEXT_STEP="next"
    v-if="!isDone"
  ></component>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Tooltip from "./components/Tooltip.vue";
import { Step, Theme } from "./types";

const props = defineProps<{ steps: Step[]; theme: Theme }>();
const currentIndex = ref(0);
const isDone = ref(false);

const currentStep = computed(() => {
  return props.steps[currentIndex.value];
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

function skipTo(index: number) {
  if (index > props.steps.length - 1 || index < 0) {
    throw new Error(`Index: ${index} is out of bounds`);
  }

  currentIndex.value = index;
}

function addStep(step: Step) {
  props.steps.push(step);
}

function stop() {
  return onDone();
}

defineExpose({ next, back, skipTo, addStep, stop });
</script>
