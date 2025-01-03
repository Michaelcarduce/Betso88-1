<!-- Meta.vue -->
<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <head>
    <title>{{ title }}</title>
    <meta name="description" :content="description" />
  </head>
</template>
