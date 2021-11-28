<template>
  <div
    class="
      w-full
      h-16
      border-b border-gray-300
      flex
      items-center
      justify-between
      px-4
      bg-white
      fixed
      top-0
      z-50
    "
  >
    <div class="flex items-center h-full">
      <NuxtLink to="/" class="h-3/4 flex items-center">
        <img src="~/assets/logo.svg" class="h-full" />
        <div class="text-xl font-bold ml-2">WandererJS</div>
      </NuxtLink>

      <a :href="docsUrl" class="text-blue-700 text-lg ml-5 font-bold">
        Documentation
      </a>
    </div>
    <div class="flex items-center justify-between h-full text-xl">
      <a href="https://github.com/yaakov123/wandererjs">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    docsUrl() {
      return process.env.DOCS_URL
    },
  },
}
</script>
