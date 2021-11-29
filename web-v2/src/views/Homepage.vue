<template>
  <div class="h-full w-full">
    <div
      class="
        w-full
        h-full
        px-3
        max-w-screen-xl
        xs:px-10
        sm:px-10
        lg:px-20
        mx-auto
        flex
        items-center
      "
    >
      <div class="relative z-10">
        <div class="md:w-3/4 lg:w-1/2 md:bg-white md:px-10 md:py-10 md:rounded">
          <h1 id="tagline" class="text-5xl font-bold mt-10">
            Turn users into fans with
            <span class="text-blue-700">interactive product tours</span>
          </h1>
          <h3 class="text-xl mt-4">
            Good UX can be a hard thing to nail. With WandererJS, you can guide
            your users down the path of success with beautiful product tours.
            It's that easy!
          </h3>
          <div
            class="
              flex flex-col
              space-y-2
              mt-8
              xs:flex-row xs:space-x-2 xs:space-y-0
            "
          >
            <div
              class="
                w-full
                py-3
                text-center
                bg-blue-700
                text-white
                rounded
                text-lg
                cursor-pointer
                transition
                duration-400
                ease-in-out
                transform
                hover:-translate-y-0.5
              "
              @click="showDemo"
            >
              Live Demo
            </div>
            <div
              class="
                w-full
                py-3
                text-center
                rounded
                text-lg text-blue-700
                bg-white
                cursor-pointer
                transition
                duration-400
                ease-in-out
                transform
                hover:-translate-y-0.5
                md:border md:border-blue-700
              "
            >
              <a :href="docsUrl"> Read the docs </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="
        w-full
        px-3
        max-w-screen-xl
        xs:px-10
        sm:px-10
        lg:px-20
        mx-auto
        py-20
      "
    >
      <div class="mt-20">
        <div id="why-product-tours" class="text-3xl font-bold text-center">
          Why do I need product tours?
        </div>
        <div
          class="mt-20 md:flex divide-x-0 divide-y md:divide-y-0 md:divide-x"
        >
          <Card
            v-for="reason in reasons"
            :key="reason.heading"
            :card="reason"
          />
        </div>
      </div>

      <div class="mt-40">
        <div class="w-full flex justify-center relative">
          <div
            class="
              w-full
              absolute
              top-1/2
              border-b
              hidden
              md:block
              border-blue-200
            "
          ></div>
          <div
            id="why-wanderer-js"
            class="
              text-3xl
              font-bold
              text-center
              bg-white
              relative
              z-10
              md:p-4 md:px-10 md:rounded md:border
              border-blue-200
            "
          >
            Okay, but why should I use WandererJS?
          </div>
        </div>
        <div class="mt-20 py-10 md:flex md:flex-wrap md:justify-evenly">
          <FeatureCard v-for="feature in features" :card="feature" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import reasons from "../data/reasons.json";
import features from "../data/features.json";

import Card from "../components/Card.vue";
import FeatureCard from "../components/FeatureCard.vue";
const docsUrl = computed(() => import.meta.env.VITE_DOCS_URL);

function showDemo() {}
</script>
