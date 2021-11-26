<template>
  <div class="h-full w-full">
    <div
      class="
        w-full
        h-auto
        px-3
        max-w-screen-xl
        xs:px-10
        sm:px-10
        lg:px-20
        mx-auto
      "
    >
      <div class="pattern"></div>
      <div
        class="
          flex flex-col
          justify-evenly
          lg:flex-row lg:space-x-6 lg:mt-20
          xl:space-x-12
        "
      >
        <div class="flex flex-col lg:w-1/2">
          <div id="tagline" class="text-5xl font-bold mt-10">
            Reduce user frustration with
            <span class="text-blue-700">interactive product tours</span>
          </div>
          <div class="text-xl mt-4">
            Good UX can be a hard thing to nail. With WandererJS, you can guide
            your users down the path of success with beautiful product tours.
            It's that easy!
          </div>
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
                border border-blue-700
                rounded
                text-lg text-blue-700
                cursor-pointer
                transition
                duration-400
                ease-in-out
                transform
                hover:-translate-y-0.5
              "
            >
              <a :href="docsUrl"> Read the docs </a>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center mt-4 lg:w-1/2">
          <img src="~/assets/code.png" class="shadow-xl w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Trip } from 'wanderer.js'
export default {
  data() {
    return {
      trip: null,
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
