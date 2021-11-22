<template>
  <div class="wanderer-image wanderer-flex" :class="alignClass">
    <img :src="src" />
  </div>
</template>

<script setup lang="ts">
import { Align, ImageBlock } from "../../@types/blocks";
import { computed } from "vue";

interface Props {
  properties: ImageBlock;
}

const props = defineProps<Props>();
const DEFAULT_ALIGN: Align = "LEFT";
const { src, align = DEFAULT_ALIGN } = props.properties;

const alignMap = {
  LEFT: "wanderer-justify-left",
  RIGHT: "wanderer-justify-right",
  CENTER: "wanderer-justify-center",
};

const alignClass = computed(() => {
  return alignMap[align];
});
</script>
