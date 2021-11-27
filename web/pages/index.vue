<template>
  <div
    class="
      w-screen
      h-screen
      absolute
      top-16
      left-0
      page-container
      overflow-hidden
    "
  >
    <div
      class="
        background
        absolute
        top-0
        left-0
        h-full
        bg-cover bg-no-repeat
        opacity-60
        md:opacity-100
      "
    ></div>
    <Homepage />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Homepage from '~/components/Homepage.vue'

export default Vue.extend({ components: { Homepage } })
</script>
<style>
.page-container {
  height: calc(100% - theme('height.16'));
}

.background {
  width: 120%;
  background-image: url('~/assets/bg.png');
}
</style>
