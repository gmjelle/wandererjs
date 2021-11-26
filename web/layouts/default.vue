<template>
  <div class="w-screen h-screen absolute top-0 left-0">
    <Topbar />
    <Nuxt />
  </div>
</template>

<script>
import Topbar from '../components/Topbar.vue'

export default {
  components: { Topbar },
}
</script>
