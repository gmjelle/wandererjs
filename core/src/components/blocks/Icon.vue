<template>
  <div class="wanderer-icon" :data-align="properties.align || DEFAULT_ALIGN">
    <font-awesome-icon :icon="properties.icon" @click="action" />
  </div>
</template>

<script setup lang="ts">
import { Align, IconBlock } from "../../@types/blocks";
import { computed } from "vue";
interface Props {
  properties: IconBlock;
}

const props = defineProps<Props>();
const DEFAULT_ALIGN: Align = "LEFT";

const properties = computed(() => props.properties);

const action = computed(() => {
  return properties.value.action ? properties.value.action : () => {};
});
</script>
