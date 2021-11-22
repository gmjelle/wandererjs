<template>
  <div :class="[alignClass]" :style="styleString">{{ text }}</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Align, TextBlock } from "../../@types/blocks";

interface Props {
  properties: TextBlock;
}

const props = defineProps<Props>();
const DEFAULT_ALIGN: Align = "LEFT";
const DEFAULT_SIZE: string = "16px";

const {
  align = DEFAULT_ALIGN,
  size = DEFAULT_SIZE,
  text = "",
} = props.properties;

const alignMap = {
  LEFT: "wanderer-text-left",
  RIGHT: "wanderer-text-right",
  CENTER: "wanderer-text-center",
};

const alignClass = computed(() => {
  return alignMap[align];
});

const styleString = computed(() => {
  return `font-size: ${size}`;
});
</script>
