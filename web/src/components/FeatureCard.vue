<template>
  <div
    class="
      w-full
      py-5
      px-5
      mt-6
      md:w-5/12 md:px-5
      border border-gray-300
      rounded
      transition-all
      duration-400
      transform
      hover:shadow-md hover:-translate-y-1.5
    "
  >
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
