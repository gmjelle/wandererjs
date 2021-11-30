<template>
  <div class="wanderer-modal-backdrop"></div>
  <div ref="container" class="wanderer-modal">
    <Custom :blocks="blocks" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { ModalStep, Theme } from "../@types";
import { Block } from "../@types/blocks";
import { NEXT_STEP, STOP_TRIP } from "../events";
import Custom from "./Custom.vue";

const props = defineProps<{ step: ModalStep; theme: Theme }>();
const emit = defineEmits([STOP_TRIP, NEXT_STEP]);
const container = ref();

const align = computed(() => props.step.align || "CENTER");
const blocks = computed<Block[]>(() => {
  const temp: Block[] = [
    {
      type: "ICON",
      icon: "times",
      align: "RIGHT",
      action: () => {
        emit(STOP_TRIP);
      },
    },
    {
      type: "HEADING",
      size: "H4",
      text: props.step.headerText,
      align: align.value,
    },
    { type: "IMAGE", src: props.step.imageSource, align: align.value },
    {
      type: "TEXT",
      size: "18px",
      text: props.step.bodyText,
      align: align.value,
    },
    {
      type: "BUTTON",
      text: "Next",
      align: "RIGHT",
      action: () => {
        emit(NEXT_STEP);
      },
    },
  ];

  return temp;
});
</script>
