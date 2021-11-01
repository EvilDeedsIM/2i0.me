import { createRouter, createWebHistory } from 'vue-router';
import Breath from './components/Breath.vue';
import AppTo35 from './components/AppTo35.vue';
import Timer from './components/Timer.vue';
import Focus from './components/Focus.vue';
import ReactionGame from './components/ReactionGame.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AppTo35 },
    { path: '/breath', component: Breath },
    { path: '/timer', component: Timer },
    { path: '/focus', component: Focus },
    { path: '/reactiongame', component: ReactionGame },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

export default router;
