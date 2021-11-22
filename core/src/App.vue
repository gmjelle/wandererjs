<template>
  <component
    :is="type"
    :step="currentStep"
    :theme="theme"
    @NEXT_STEP="next"
    @STOP_TRIP="stop"
    v-if="!shouldHide"
  ></component>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import Tooltip from "./components/Tooltip.vue";
import Custom from "./components/Custom.vue";
import { Step, Theme } from "./@types/index";
import { removeTrip, updateIndex } from "./utils/storage";
import BasicTooltip from "./components/BasicTooltip.vue";
import { getStepWithDefaults } from "./utils/steps";

const props = defineProps<{ steps: Step[]; theme: Theme }>();
const currentIndex = ref(0);
const shouldHide = ref(true);

const currentStep = computed(() => {
  return getStepWithDefaults(props.steps[currentIndex.value]);
});

watch(currentIndex, () => {
  updateIndex(currentIndex.value);
});

let type = computed(() => {
  console.log(currentStep.value);

  switch (currentStep.value?.type?.toLowerCase()) {
    case "tooltip":
      return BasicTooltip;

    case "custom":
      return Custom;

    default:
      return Tooltip;
  }
});

function onDone() {
  shouldHide.value = true;
  removeTrip();
}

function start(startAt: number = 0) {
  currentIndex.value = startAt;
  shouldHide.value = false;
}

async function next() {
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

defineExpose({ next, back, skipTo, addStep, stop, start });
</script>
