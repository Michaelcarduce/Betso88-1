<script setup>
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";
import BlogCard from "@/miscellaneous/blogs/BlogCard.vue";
import blogs from "@/miscellaneous/blogs/BlogDataSource.js";

// Computed property to sort blogs by ID (newest to oldest)
// const sortedBlogs = computed(() =>
//   [...blogs.value].sort((a, b) => b.id - a.id)
// );
</script>

<template>
  <div>
    <div class="mt-40"></div>
    <Hero
      class="mb-10"
      title="Panalobet - Blogs"
      subTitle="Panalobet Casino is known as one of the most trusted online casinos in the Philippines." />

    <section class="p-2 md:p-2 lg:p-4">
      <div class="flex flex-wrap justify-center gap-2 md:gap-2 lg:gap-4">
        <BlogCard
          v-for="blog in blogs"
          :key="blog.id"
          :image="blog.image"
          :title="
            blog.title.length > 55
              ? blog.title.substring(0, 55) + ' ...'
              : blog.title
          "
          :Author="blog.Author"
          :Date="blog.Date"
          :description="
            blog.description.length > 120
              ? blog.description.substring(0, 120) + ' ...'
              : blog.description
          "
          :link="blog.link"
          :buttonText="blog.buttonText" />
      </div>
    </section>
    <div class="mt-10"></div>

    <Footer></Footer>
  </div>
</template>
