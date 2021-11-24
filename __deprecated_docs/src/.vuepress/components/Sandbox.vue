<template>
  <div ref="content">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const content = ref();

onMounted(() => {
  console.log(content.value.innerText);
});
</script>
