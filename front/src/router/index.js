import { createRouter, createWebHashHistory } from 'vue-router';
import Newsletter from '../views/Newsletter.vue';
import MainForm from '../views/MainForm.vue';
import AdminPanelLogin from '../views/AdminPanelLogin.vue';
import PageNotFound from '../views/PageNotFound.vue';
import store from '../store';

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
    beforeEnter: (to, from, next) => {
      console.log(store.state.isInDatabase);
      if (store.state.isInDatabase) {
        next();
      } else {
        next('/');
      }
    },
  },
  {
    path: '/admin-login',
    name: 'AdminPanelLogin',
    component: AdminPanelLogin,
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
