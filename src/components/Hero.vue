<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
  },
  subTitle: {
    type: String,
  },
});
</script>

<template>
  <section class="bg-black-700 mt-20">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div class="text-center">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-200 via-orange-400 to-violet-500 text-transparent bg-clip-text">
          {{ title }}
        </h1>
        <p class="my-4 text-xl text-white">
          {{ subTitle }}
        </p>
      </div>
    </div>
  </section>
</template>
