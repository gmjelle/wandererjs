<template>
  <div class="flex-1 py-5 md:px-5 md:py-0">
    <div class="flex items-center justify-between">
      <div class="text-2xl">{{ reason.heading }}</div>
      <div
        class="w-10 h-10 rounded-full flex items-center justify-center"
        :class="[reason.iconColor, reason.iconBgColor]"
      >
        <font-awesome-icon :icon="['fas', reason.icon]" />
      </div>
    </div>
    <div class="mt-2">
      {{ reason.body }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reason: {
      type: Object,
      required: true,
    },
  },
}
</script>
