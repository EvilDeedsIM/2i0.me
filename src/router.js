import { createRouter, createWebHistory } from 'vue-router';
import Breath from './views/Breath.vue';
import AppTo35 from './views/AppTo35.vue';
import Focus from './views/Focus.vue';
import Timer from './views/Timer.vue';
import Autentification from './views/Autentification.vue';
import ReactionGame from './views/ReactionGame.vue';
import MainPage from './views/MainPage.vue';
import Templates from './views/Templates.vue';
import Contacts from './views/Contacts.vue';
import Games from './views/Games.vue';
import About from './views/About.vue';
import Apps from './views/Apps.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MainPage },
    { path: '/to35', component: AppTo35 },
    { path: '/templates', component: Templates },
    { path: '/breath', component: Breath },
    { path: '/focus', component: Focus },
    { path: '/timer', component: Timer },
    { path: '/login', component: Autentification },
    { path: '/reactiongame', component: ReactionGame },
    { path: '/contacts', component: Contacts },
    { path: '/games', component: Games },
    { path: '/about', component: About },
    { path: '/apps', component: Apps },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

export default router;
