<template>
  <div>
    <section v-if="blog" class="blog-post-section">
      <header>
        <h1 class="heading1 colorPri pb10 textAlignmentLeft">
          {{ blog.title }}
        </h1>
        <p class="metadescriptions mb30 colorSec textAlignmentLeft">
          {{ blog.Author }} <strong>&bull;</strong> {{ blog.Date }}
        </p>
        <img :src="blog.image" :alt="blog.title" class="img_fit mb20" />
      </header>
      <main>
        <div class="blogContent" v-html="sanitizedContent"></div>
      </main>
    </section>
    <div v-else>Loading...</div>
    <div v-if="sortedBlogs.length > 1">
      <aside class="related-posts">
        <h4 class="heading4 pb20 textAlignmentLeft colorSec">More</h4>
        <div class="flexboxGrid">
          <BlogCard
            v-for="relatedBlog in relatedBlogs"
            :key="relatedBlog.id"
            :image="relatedBlog.image"
            :title="
              relatedBlog.title.length > 60
                ? relatedBlog.title.substring(0, 40) + '...'
                : relatedBlog.title
            "
            :link="relatedBlog.link" />
        </div>
      </aside>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import BlogCard from "@/miscellaneous/blogs/BlogCard.vue";
import blogs from "@/miscellaneous/blogs/BlogDataSource.js";
import { useRoute } from "vue-router";
import { ref, computed, onMounted } from "vue";
// import DOMPurify from "dompurify";

export default {
  components: { Footer, BlogCard },
  setup() {
    const route = useRoute();
    const slug = ref(route.params.slug);
    const blog = ref(null);
    const sanitizedContent = ref(null);

    onMounted(() => {
      fetchBlog();
    });

    const fetchBlog = () => {
      const foundBlog = blogs.find((post) => post.slug === slug.value);

      if (foundBlog) {
        blog.value = foundBlog;
        sanitizedContent.value = DOMPurify.sanitize(foundBlog.content, {
          USE_PROFILES: { html: true },
        });
      } else {
        // Handle 404 - Redirect or display a message
        console.error("Blog post not found!");
        // Example redirect:
        // router.push('/404');
      }
    };

    const sortedBlogs = computed(() => [...blogs].sort((a, b) => b.id - a.id));

    const relatedBlogs = computed(() => {
      return sortedBlogs.value.filter((b) => b.id !== blog.value?.id);
    });

    return { blog, sanitizedContent, sortedBlogs, relatedBlogs };
  },
};
</script>

<style scoped>
.blog-post-section {
  padding: 20px; /* Add some padding */
}
.related-posts {
  margin-top: 40px;
}
</style>
