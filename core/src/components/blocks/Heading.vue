<template>
  <div :class="headingClass">{{ text }}</div>
</template>

<script setup lang="ts">

import { computed } from "vue";
import { Align, HeadingSize } from "../../@types/blocks";

interface Props {
  size: HeadingSize;
  align: Align;
  text: string;
}
const props = withDefaults(defineProps<Props>(), {});

const sizeMap = {
  H1: "text-6xl",
  H2: "text-5xl",
  H3: "text-4xl",
  H4: "text-3xl",
  H5: "text-2xl",
  H6: "text-xl",
};

const headingClass = computed(() => {
  return sizeMap[props.size];
});
</script>
