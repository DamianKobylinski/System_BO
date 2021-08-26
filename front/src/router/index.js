import { createRouter, createWebHashHistory } from 'vue-router';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'Newsletter',
    component: () => import(/* webpackChunkName: "newsletter" */ '../views/Newsletter.vue'),
  },
  {
    path: '/form',
    name: 'MainForm',
    component: () => import(/* webpackChunkName: "mainform" */ '../views/MainForm.vue'),
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
    component: () => import(/* webpackChunkName: "adminpanellogin" */ '../views/AdminPanelLogin.vue'),
  },
  {
    path: '/admin-panel',
    name: 'AdminPanel',
    component: () => import(/* webpackChunkName: "adminpanel" */ '../views/AdminPanel.vue'),
    beforeEnter: (to, from, next) => {
      if (store.state.isAdminSuccessLogin) {
        next();
      } else {
        next('/admin-login');
      }
    },
  },
  {
    path: '/thankyou',
    name: 'ThankYou',
    component: () => import(/* webpackChunkName: "thankyou" */ '../views/ThankYou.vue'),
    beforeEnter: (to, from, next) => {
      if (store.state.isFormSent) {
        next();
      } else {
        next('/');
      }
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: () => import(/* webpackChunkName: "pagenotfound" */ '../views/PageNotFound.vue'),
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
