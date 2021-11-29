<template>
  <Topbar />
  <div class="w-screen h-screen absolute top-16 left-0 page-container">
    <div
      class="
        background
        absolute
        top-0
        left-0
        h-full
        w-full
        bg-cover bg-no-repeat
        opacity-60
        md:opacity-100
      "
    ></div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Topbar from "./components/Topbar.vue";
</script>

<style>
.page-container {
  height: calc(100% - theme("height.16"));
}

.background {
  background-image: url("./assets/bg.png");
}
</style>
