<template>
  <div class="wanderer-image" :data-align="align">
    <img :src="src" />
  </div>
</template>

<script setup lang="ts">
import { Align, ImageBlock } from "../../@types/blocks";

interface Props {
  properties: ImageBlock;
}

const props = defineProps<Props>();
const DEFAULT_ALIGN: Align = "LEFT";
const { src, align = DEFAULT_ALIGN } = props.properties;
</script>
