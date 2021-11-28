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
import Button from "./blocks/Button.vue";
import Icon from "./blocks/Icon.vue";
import { onUpdated } from "@vue/runtime-core";

const props = defineProps<{ blocks: Block[] }>();

const map = {
  HEADING: Heading,
  TEXT: Text,
  IMAGE: Image,
  BUTTON: Button,
  ICON: Icon,
};
</script>
