import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import Breath from './components/Breath.vue';
import AppTo35 from './components/AppTo35.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AppTo35 },
    { path: '/breath', component: Breath },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

export default router;
