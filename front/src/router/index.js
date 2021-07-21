import { createRouter, createWebHashHistory } from 'vue-router';
import Newsletter from '../views/Newsletter.vue';
import MainForm from '../views/MainForm.vue';
import AdminPanel from '../views/AdminPanel.vue';

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
  {
    path: '/admin',
    name: 'AdminPanel',
    component: AdminPanel,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
