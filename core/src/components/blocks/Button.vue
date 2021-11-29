<template>
  <div class="wanderer-button" :data-align="properties.align || DEFAULT_ALIGN">
    <div class="wanderer-button-wrapper" @click="action">
      {{ properties.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { Align, ButtonBlock } from "../../@types/blocks";
import { toRefs, ref, computed } from "vue";

interface Props {
  properties: ButtonBlock;
}

const props = defineProps<Props>();

const DEFAULT_ALIGN: Align = "LEFT";
const properties = computed(() => props.properties);
const action = computed(() => {
  return properties.value.action ? properties.value.action : () => {};
});
</script>
