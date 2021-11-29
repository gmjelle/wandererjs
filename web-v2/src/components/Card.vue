<template>
  <div class="flex-1 py-5 md:px-5 md:py-0">
    <div class="flex items-center justify-between">
      <div class="text-2xl">{{ card.heading }}</div>
      <div
        class="w-10 h-10 rounded-full flex items-center justify-center"
        :class="[card.iconColor, card.iconBgColor]"
      >
        <font-awesome-icon :icon="[card.iconPrefix || 'fas', card.icon]" />
      </div>
    </div>
    <div class="mt-2">
      {{ card.body }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  card: {
    heading: string;
    iconColor: string;
    iconBgColor: string;
    iconPrefix?: string;
    icon: string;
    body: string;
  };
}
const props = defineProps<Props>();
</script>
