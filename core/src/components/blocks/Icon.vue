<template>
  <div class="wanderer-icon" :data-align="align">
    <font-awesome-icon :icon="icon" @click="action" />
  </div>
</template>

<script setup lang="ts">
import { Align, IconBlock } from "../../@types/blocks";

interface Props {
  properties: IconBlock;
}

const props = defineProps<Props>();
const DEFAULT_ALIGN: Align = "LEFT";
const { icon, action = () => {}, align = DEFAULT_ALIGN } = props.properties;
</script>
