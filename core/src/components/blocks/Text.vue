<template>
  <div class="wanderer-text" :class="[alignClass]" :style="styleString">
    {{ properties.text }}
  </div>
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

const properties = computed(() => props.properties);
const align = computed(() => {
  return properties.value.align ? properties.value.align : DEFAULT_ALIGN;
});
const size = computed(() => {
  return properties.value.size ? properties.value.size : DEFAULT_SIZE;
});

const alignMap = {
  LEFT: "wanderer-text-left",
  RIGHT: "wanderer-text-right",
  CENTER: "wanderer-text-center",
};

const alignClass = computed(() => {
  return alignMap[align.value];
});

const styleString = computed(() => {
  return `font-size: ${size.value}`;
});
</script>
