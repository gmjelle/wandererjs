<template>
  <div class="text-lg">{{ step.headerText }}</div>
</template>

<script setup lang="ts">
import { Step } from "../types";

const props = defineProps<{ step: Step }>();

const showButton = props.step.progressOn;
console.log(props.step);
</script>

<style scoped></style>
