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
      <!-- <div class="pattern"></div> -->
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
        <div class="text-3xl font-bold text-center">
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
          <FeatureCard
            v-for="feature in features"
            :key="feature.heading"
            :card="feature"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Trip } from 'wanderer.js'
import features from '../data/features.json'
import reasons from '../data/reasons.json'
import Card from './Card.vue'
import FeatureCard from './FeatureCard.vue'

export default {
  components: { Card, FeatureCard },
  data() {
    return {
      trip: null,
      features,
      reasons,
    }
  },
  computed: {
    docsUrl() {
      return process.env.DOCS_URL
    },
  },
  mounted() {
    this.$data.trip = new Trip(
      [
        {
          headerText: 'Welcome!',
          bodyText: 'Welcome to WandererJS',
          element: '#tagline',
          highlightType: 'SOFT',
        },
      ],
      'WANDERER_DARK'
    )
  },
  methods: {
    showDemo() {
      this.$data.trip.start()
    },
  },
}
</script>
<style>
.pattern {
  position: absolute;
  top: 0px;
  right: 0px;
  height: 400px;
  width: 400px;
  z-index: -1;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23bfdbfe' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
