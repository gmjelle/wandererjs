<template>
  <div class="wanderer-heading" :class="[sizeClass, alignClass]">
    {{ properties.text }}
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import { Align, HeadingBlock, HeadingSize } from "../../@types/blocks";

interface Props {
  properties: HeadingBlock;
}
const props = defineProps<Props>();
const DEFAULT_ALIGN: Align = "LEFT";
const DEFAULT_SIZE: HeadingSize = "H3";

const properties = reactive(props.properties);

const sizeMap = {
  H1: "wanderer-h1",
  H2: "wanderer-h2",
  H3: "wanderer-h3",
  H4: "wanderer-h4",
  H5: "wanderer-h5",
  H6: "wanderer-h6",
};

const alignMap = {
  LEFT: "wanderer-text-left",
  RIGHT: "wanderer-text-right",
  CENTER: "wanderer-text-center",
};

const sizeClass = computed(() => {
  return sizeMap[properties.size || DEFAULT_SIZE];
});

const alignClass = computed(() => {
  return alignMap[properties.align || DEFAULT_ALIGN];
});
</script>
