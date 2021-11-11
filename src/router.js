import { createRouter, createWebHistory } from 'vue-router';
import Breath from './components/Breath.vue';
import AppTo35 from './components/AppTo35.vue';
import Countdown from './components/Countdown.vue';
import Focus from './components/Focus.vue';
import Timer from './components/Timer.vue';
import Autentification from './components/Autentification.vue';
import ReactionGame from './components/ReactionGame.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AppTo35 },
    { path: '/breath', component: Breath },
    { path: '/countdown', component: Countdown },
    { path: '/focus', component: Focus },
    { path: '/timer', component: Timer },
    { path: '/login', component: Autentification },
    { path: '/reactiongame', component: ReactionGame },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

export default router;
