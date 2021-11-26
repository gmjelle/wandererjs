<template>
  <div class="w-screen h-screen absolute top-16 left-0 page-container">
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
</style>
