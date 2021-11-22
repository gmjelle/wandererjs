<template></template>
<script setup lang="ts">
import { onMounted } from "vue";
import { CustomStep, Theme } from "../@types";

const props = defineProps<{ step: CustomStep; theme: Theme }>();

async function performSetup() {}

onMounted(() => {
  performSetup();
});
</script>
