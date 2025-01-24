import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import SportsView from "@/views/SportsView.vue";
import SlotsView from "@/views/SlotsView.vue";
import FishingView from "@/views/FishingView.vue";
import LiveCasinoView from "@/views/LiveCasinoView.vue";
import DepositView from "@/views/DepositView.vue";
import PromotionView from "@/views/PromotionView.vue";
import BlogsView from "@/views/BlogsView.vue";
import BlogPostsView from "@/views/BlogPostsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/sports",
      name: "Sports",
      component: SportsView,
    },
    {
      path: "/slots",
      name: "Slots",
      component: SlotsView,
    },
    {
      path: "/fishing",
      name: "Fishing",
      component: FishingView,
    },
    {
      path: "/live-casino",
      name: "Live Casino",
      component: LiveCasinoView,
    },
    {
      path: "/deposit",
      name: "Deposit",
      component: DepositView,
    },
    {
      path: "/promotion",
      name: "Promotion",
      component: PromotionView,
    },
    {
      path: "/blogs",
      name: "Blogs",
      component: BlogsView,
    },
    {
      path: "/blogs/:slug",
      name: "BlogPosts",
      component: BlogPostsView,
      props: true,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Restore saved scroll position if available (e.g., back/forward buttons)
    } else {
      return { top: 0 }; // Always scroll to top on navigation
    }
  },
});
// Navigation guard to check if the route is a blog post
router.beforeEach((to, from, next) => {
  if (to.path.startsWith("/blogs/")) {
    // Adjust links or perform any necessary actions for blog posts
    console.log("Navigating to a blog post:", to.path);
  }
  next(); // Proceed to the next middleware or route
});

export default router;
