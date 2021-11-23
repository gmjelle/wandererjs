<template>
  <HardHightlight :target="step.element" v-if="step.highlightType === 'HARD'" />
  <SoftHighlight :target="step.element" v-if="step.highlightType === 'SOFT'" />
  <div ref="container" :class="[theme]" class="wanderer-tooltip" v-if="ready">
    <div
      ref="arrow"
      id="arrow"
      class="wanderer-tooltip-arrow"
      v-if="step.showArrow"
    ></div>
    <Custom :blocks="blocks" />
  </div>
</template>

<script setup lang="ts">
import {
  onMounted,
  ref,
  nextTick,
  watch,
  computed,
  onBeforeUnmount,
} from "vue";
import { createPopper, Instance } from "@popperjs/core";
import { Theme, TooltipStep } from "../@types";
import { Block } from "../@types/blocks";
import arrive from "../utils/arrive";
import scrollToElementIfNecessary from "../utils/scroller";
import Custom from "./Custom.vue";
import { NEXT_STEP, STOP_TRIP } from "../events";
import HardHightlight from "./HardHightlight.vue";
import SoftHighlight from "./SoftHighlight.vue";

const props = defineProps<{ step: TooltipStep; theme: Theme }>();
const emit = defineEmits([NEXT_STEP, STOP_TRIP]);

const ready = ref<boolean>(false);
const container = ref();
const arrow = ref();

let popper: Instance | null = null;

const blocks = computed<Block[]>(() => {
  const temp: Block[] = [
    { type: "HEADING", size: "H3", text: props.step.headerText },
    { type: "TEXT", size: "20px", text: props.step.bodyText },
  ];

  if (props.step.progressOn === "BUTTON") {
    temp.push({
      type: "BUTTON",
      text: "Next",
      align: "RIGHT",
      action: () => {
        emit(NEXT_STEP);
      },
    });
  }

  return temp;
});

function setupPopper(element) {
  if (popper) popper.destroy();

  popper = createPopper(element, container.value, {
    modifiers: [
      { name: "offset", options: { offset: [10, 20] } },
      { name: "arrow", options: { element: arrow.value } },
    ],
  });
}

function goToNextStep() {
  emit(NEXT_STEP);
}

function setupProgress(element) {
  if (props.step.progressOn !== "ELEMENT") return;
  element.addEventListener("click", goToNextStep, { once: true });
}

async function setup() {
  ready.value = false;
  const element = await arrive(props.step.element);
  ready.value = true;

  nextTick(() => {
    scrollToElementIfNecessary(element);
    setupPopper(element);
    setupProgress(element);
  });
}

watch(
  computed(() => props.step),
  () => {
    setup();
  }
);

onMounted(() => {
  setup();
});

onBeforeUnmount(() => {
  popper?.destroy();
});
</script>
