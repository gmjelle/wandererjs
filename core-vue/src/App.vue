<template>
  <component :is="type" :step="currentStep"></component>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import tooltip from "./components/Tooltip.vue";
import { Step } from "./types";

const props = defineProps<{ steps: Step[] }>();
let currentIndex = 0;
let currentStep = computed(() => {
  return props.steps[currentIndex];
});

let type = computed(() => {
  return currentStep.value?.type.toLowerCase() === "tooltip"
    ? tooltip
    : tooltip;
});

// console.log(type.value);
</script>
