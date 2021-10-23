import { createRouter, createWebHistory } from 'vue-router';
import Breath from './components/Breath.vue';
import AppTo35 from './components/AppTo35.vue';
import Focus from './components/Focus.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AppTo35 },
    { path: '/breath', component: Breath },
    { path: '/focus', component: Focus },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

export default router;
