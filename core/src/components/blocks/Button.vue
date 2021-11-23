<template>
  <div class="wanderer-button" :data-align="align">
    <div class="wanderer-button-wrapper" @click="action">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import { Align, ButtonBlock } from "../../@types/blocks";

interface Props {
  properties: ButtonBlock;
}

const props = defineProps<Props>();
const DEFAULT_ALIGN: Align = "LEFT";
const { text, action = () => {}, align = DEFAULT_ALIGN } = props.properties;
</script>
