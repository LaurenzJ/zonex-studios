import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/news",
    name: "news",
    component: () => import("../views/NewsView.vue"),
  },
  {
    path: "/careers",
    name: "careers",
    component: () => import("../views/CareersView.vue"),
  },
  {
    path: "/company",
    name: "company",
    component: () => import("../views/CompanyView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/community",
    name: "community",
    component: () => import("../views/CommunityView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin/AHomeView.vue"),
  },
  {
    path: "/admin/news",
    name: "admin-news",
    component: () => import("../views/admin/ANewsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
