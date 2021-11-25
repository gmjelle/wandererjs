<template>
  <div class="w-screen h-screen absolute top-0 left-0">
    <Homepage />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Homepage from '~/components/Homepage.vue'

export default Vue.extend({ components: { Homepage } })
</script>
