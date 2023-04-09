import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/home",
    name: 'home',
    component: () => import("~/views/home.vue")
  },
  {
    path: "/login",
    name: 'login',
    component: () => import("~/views/Login.vue")
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import("~/views/404.vue")
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
