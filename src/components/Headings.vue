<script setup>
import { defineProps, computed } from "vue";

const headingStyles = {
  1: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-yellow-200 via-orange-400 to-violet-500 text-transparent bg-clip-text font-bold",
  2: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white", // Example styles for h2
  3: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-200", // Example styles for h3
  4: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300", // Example styles for h4
  5: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-gray-400", // Example styles for h5
  6: "text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-500", // Example styles for h6
};

defineProps({
  level: {
    type: Number,
    default: 1,
    validator: (value) => value >= 1 && value <= 6,
  },
  content: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: null, // Allows for custom colors
  },
});

const headingTag = computed(() => `h${props.level}`);

const headingClasses = computed(() => {
  let classes = headingStyles[props.level] || "";
  if (props.color) {
    classes += ` text-${props.color}`; // Add custom color if provided
  }
  return classes;
});
</script>

<template>
  <component :is="headingTag" :class="headingClasses">
    {{ content }}
  </component>
</template>
