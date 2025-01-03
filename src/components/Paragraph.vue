<!-- Paragraph.vue -->
<script setup>
import { defineProps } from "vue";

defineProps({
  text: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <p :class="`text-base ${className}`">
    {{ text }}
  </p>
</template>
