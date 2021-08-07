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
    path: '/admin-panel',
    name: 'AdminPanel',
    component: AdminPanel,
    beforeEnter: (to, from, next) => {
      if (store.state.isAdminSuccessLogin) {
        next();
      } else {
        next('/admin-login');
      }
    },
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
  scrollBehavior(to, from, SavedPosition) {  // eslint-disable-line
    if (to.hash) {
      const el = window.location.href.split('#')[1];
      if (el.length) {
        document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
      }
    } else if (SavedPosition) {
      return SavedPosition;
    } else {
      document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
  },
});

export default router;
