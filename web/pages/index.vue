<template>
  <div class="w-full">
    <TopBar />
    <div class="flex w-full justify-center">
      <div class="flex flex-col w-1/2 mt-10">
        <h1 class="text-4xl font-bold text-center">
          Reduce user frustration with interactive product tours.
        </h1>
        <h3 class="mt-4 text-xl text-center">
          Let's face it, product tours are an annoying necessity for solo
          founders. Get it done in an hour with Wanderer.js
        </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TopBar from '~/components/TopBar.vue'

export default Vue.extend({ components: { TopBar } })
</script>
