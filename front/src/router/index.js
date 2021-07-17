import { createRouter, createWebHistory } from 'vue-router';
import Newsletter from '../views/Newsletter.vue';

const routes = [
  {
    path: '/',
    name: 'Newsletter',
    component: Newsletter,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
