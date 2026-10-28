import { createRouter, createWebHashHistory  } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory (import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/upload' },
    { path: '/upload', component: () => import('../views/UploadView.vue') },
    { path: '/sleep', component: () => import('../views/SleepView.vue') },
    { path: '/array', component: () => import('../views/ArrayView.vue') },
  ],
})

export default router
