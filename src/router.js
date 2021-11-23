import { createRouter, createWebHistory } from 'vue-router';
import Breath from './components/Breath.vue';
import AppTo35 from './components/AppTo35.vue';
import Focus from './components/Focus.vue';
import Timer from './components/Timer.vue';
import Autentification from './components/Autentification.vue';
import ReactionGame from './components/ReactionGame.vue';
import MainPage from './components/MainPage.vue';
import Templates from './components/Templates.vue';
import Contacts from './components/Contacts.vue';
import Games from './components/Games.vue';
import About from './components/About.vue';

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
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

export default router;
