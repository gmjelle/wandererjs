<template>
  <div class="wanderer-image" :data-align="properties.align || DEFAULT_ALIGN">
    <img :src="properties.src" />
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
const properties = computed(() => props.properties);
</script>
