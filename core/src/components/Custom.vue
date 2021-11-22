<template>
  <component
    v-for="block in blocks"
    :is="map[block.type]"
    :properties="block"
  ></component>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { CustomStep, Theme } from "../@types";
import Heading from "./blocks/Heading.vue";
import Text from "./blocks/Text.vue";
import { NEXT_STEP, STOP_TRIP } from "../events";

const props = defineProps<{ step: CustomStep; theme: Theme }>();
const emit = defineEmits([NEXT_STEP, STOP_TRIP]);

const map = {
  HEADING: Heading,
  TEXT: Text,
};

const blocks = computed(() => {
  return props.step.blocks;
});

async function performSetup() {}

onMounted(() => {
  performSetup();
});
</script>
