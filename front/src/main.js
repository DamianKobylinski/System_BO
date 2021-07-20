import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCookies from 'vue3-cookies';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(VueAxios, axios)
  .use(store)
  .use(router)
  .use(VueCookies)
  .mount('#app');
