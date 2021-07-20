import { createRouter, createWebHistory } from 'vue-router';
import Newsletter from '../views/Newsletter.vue';
import MainForm from '../views/MainForm.vue';

const routes = [
  {
    path: '/',
    name: 'Newsletter',
    component: Newsletter,
  },
  {
    path: '/form',
    name: 'MainForm',
    component: MainForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
