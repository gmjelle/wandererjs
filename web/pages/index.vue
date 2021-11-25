<template>
  <div class="w-screen h-screen absolute top-0 left-0">
    <Topbar />
    <Homepage />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Topbar from '~/components/Topbar.vue'
import Homepage from '~/components/Homepage.vue'

export default Vue.extend({ components: { Topbar, Homepage } })
</script>
