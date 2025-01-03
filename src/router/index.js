import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import SportsView from "@/views/SportsView.vue";
import SlotsView from "@/views/SlotsView.vue";
import FishingView from "@/views/FishingView.vue";
import LiveCasinoView from "@/views/LiveCasinoView.vue";
import DepositView from "@/views/DepositView.vue";
import Promotionview from "@/views/Promotionview.vue";
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
      component: Promotionview,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
