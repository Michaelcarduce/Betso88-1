<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
  },
  subTitle: {
    type: String,
  },
  paragraphs: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <section>
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div class="text-left">
        <h2
          class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text font-bold">
          {{ title }}
        </h2>
        <h3
          class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 bg-gradient-to-r from-yellow-100 to-orange-200 text-transparent bg-clip-text font-bold">
          {{ subTitle }}
        </h3>

        <div>
          <p
            v-for="(paragraph, index) in paragraphs"
            :key="index"
            class="text-ml sm:text-m md:text-l lg:text-xl mb-2 text-white">
            <!-- Check if the paragraph contains a link -->
            <span v-if="!paragraph.link">{{ paragraph.text }}</span>
            <span v-else>
              {{ paragraph.text }}
              <a
                :href="paragraph.link"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-400 underline hover:text-blue-600">
                {{ paragraph.linkText }}
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
