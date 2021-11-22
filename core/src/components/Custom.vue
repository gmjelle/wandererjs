<template>
  <component
    v-for="block in blocks"
    :is="map[block.type]"
    :properties="block"
  ></component>
</template>

<script setup lang="ts">
import Heading from "./blocks/Heading.vue";
import Image from "./blocks/Image.vue";
import Text from "./blocks/Text.vue";
import { Block } from "../@types/blocks";

defineProps<{ blocks: Block[] }>();

const map = {
  HEADING: Heading,
  TEXT: Text,
  IMAGE: Image,
};
</script>
