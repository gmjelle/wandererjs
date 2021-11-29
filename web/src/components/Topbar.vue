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
    <div class="h-full flex items-center">
      <router-link to="/" class="h-3/4 flex items-center whitespace-nowrap">
        <img :src="logo" class="h-full" />
        <div class="text-xl font-bold ml-2">WandererJS</div>
      </router-link>

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

<script setup lang="ts">
import { computed } from "vue";
import logo from "../assets/logo.png";
const docsUrl = computed(() => import.meta.env.VITE_DOCS_URL);
</script>
