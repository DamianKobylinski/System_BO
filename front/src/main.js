import { createApp } from 'vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCookies from 'vue3-cookies';
import VueParticles from 'vue-particles';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(fas);

createApp(App)
  .use(VueAxios, axios)
  .use(VueParticles)
  .use(store)
  .use(router)
  .use(VueCookies)
  .component('fa', FontAwesomeIcon)
  .mount('#app');
