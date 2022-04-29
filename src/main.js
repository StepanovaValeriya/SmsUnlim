import { createApp } from 'vue';
import { createRouter, createWebHashHistory, useRoute } from 'vue-router';
import api from './api/axios';
import VueAxios from 'vue-axios';
import store from './store';
import MessagePlagin from './utils/message.plagin';
import App from './App.vue';
import Home from './views/Home.vue';
import History from './views/History.vue';
import Activation from './views/Activation.vue';
import 'materialize-css/dist/js/materialize.min.js';

const routes = [
  { path: '/', component: Home },
  { path: '/history', component: History, meta: { auth: true } },
  { path: '/activation', component: Activation, meta: { auth: true } },
  { path: '/:catchAll(.*)', component: Home },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth)) {
    const token = JSON.parse(localStorage.getItem('jwtToken'));
    if (token) {
      next();
      return;
    }
    next('/');
  } else {
    next();
  }
});

createApp(App)
  .use(router)
  .use(VueAxios, api)
  .use(store)
  .use(MessagePlagin)
  .mount('#app');
