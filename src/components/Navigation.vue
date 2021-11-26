<template>
  <div class="nav">
    <div class="menu" @click="menuToggle">
      <div class="burger" :class="toggleActive">
        <span class="burger-line"></span>
        <span class="burger-letter letter-m">m</span>
        <span class="burger-letter letter-n">n</span>
        <span class="burger-letter letter-u">u</span>
      </div>

      <div class="menu-list">
        <transition-group name="left-right">
          <router-link
            to="/"
            v-if="menuFlag"
            class="menu-item home"
            data-name="home"
          >
            <Icon class="icon icon-home" icon="ant-design:home-outlined" />
          </router-link>
          <router-link
            to="/templates"
            v-if="menuFlag"
            class="menu-item templates"
            data-name="templates"
          >
            <Icon class="icon icon-template" icon="carbon:template" />
          </router-link>
        </transition-group>

        <transition name="bottom-top">
          <router-link
            to="/contacts"
            v-if="menuFlag"
            class="menu-item contacts"
            data-name="contacts"
          >
            <Icon class="icon icon-contacts" icon="carbon:mail-all" />
          </router-link>
        </transition>

        <transition-group name="right-left">
          <router-link
            to="/games"
            v-if="menuFlag"
            class="menu-item games"
            data-name="games"
          >
            <Icon class="icon icon-games" icon="ion:game-controller-outline" />
          </router-link>
          <router-link
            to="/about"
            v-if="menuFlag"
            class="menu-item about"
            data-name="about"
          >
            <Icon class="icon icon-about" icon="eva:info-outline" />
          </router-link>
        </transition-group>

        <template v-if="loggedInFlag">
          <transition name="top-bottom">
            <router-link
              to="/login"
              @click.prevent="loginLogout"
              class="menu-item logout"
              v-if="menuFlag"
              data-name="logout"
            >
              <Icon class="icon icon-logout" icon="grommet-icons:logout" />
            </router-link>
          </transition>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';

const props = defineProps({
  loggedInFlag: Boolean,
});

const emit = defineEmits(['logged-out']);

const menuFlag = ref(false);

function loginLogout() {
  localStorage.removeItem('user');
  emit('logged-out', true);
  setTimeout(() => {
    $router.push('/');
  }, 500);
}

function menuToggle() {
  menuFlag.value = !menuFlag.value;
}

function test() {
  if (1) {
    return 'active';
  }
}

let toggleActive = computed(() => {
  if (menuFlag.value) {
    return 'active';
  }
});
</script>

<style scoped>
.nav {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  transform: translateX(-50%);
}

.menu {
  position: relative;
  width: 3.5rem;
  height: 3rem;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.menu-list {
  position: absolute;
  width: 95vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  top: 120%;
  gap: 0.5rem;
}

.menu-list a {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.5rem;
  width: 4.5rem;
  transform: translate(-50%, -50%);
  z-index: 200;
  color: var(--white);
  /* border: 1px solid #fff; */
}

.active.menu-item {
  border: 1px solid var(--white);
  border-radius: 0.5rem;
}

.menu-item::before {
  content: attr(data-name);
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  opacity: 0;
  transition: 0.3s;
  transform: translate(-50%, -50%);
}
.menu-item:hover::before {
  opacity: 1;
}

.menu-item.contacts {
  top: 60px;
  left: 50%;
}
.menu-item.contacts:hover::before {
  top: 120%;
}

.menu-item.home {
  top: -60px;
  left: calc(50% - 80px);
}
.menu-item.home:hover::before {
  top: -20%;
}

.menu-item.templates {
  top: 10px;
  left: calc(50% - 80px);
}
.menu-item.templates:hover::before {
  top: 120%;
}

.menu-item.games {
  top: 10px;
  left: calc(50% + 80px);
}
.menu-item.games:hover::before {
  top: 120%;
}

.menu-item.about {
  top: -60px;
  left: calc(50% + 80px);
}
.menu-item.about:hover::before {
  top: -20%;
}

.menu-item.logout {
  bottom: 60px;
  left: 50%;
}
.menu-item.logout:hover::before {
  top: -20%;
}

/* TRANSITIONS */

.left-right-enter-from {
  opacity: 0;
}
.left-right-enter-to {
  animation: left-right 1s linear forwards;
}
.left-right-leave-to {
  animation: left-right reverse 1s linear forwards;
}

.right-left-enter-from {
  opacity: 0;
}
.right-left-enter-to {
  animation: right-left 1s linear forwards;
}
.right-left-leave-to {
  animation: right-left reverse 1s linear forwards;
}

.bottom-top-enter-from {
  opacity: 0;
}
.bottom-top-enter-to {
  animation: bottom-top 1s linear forwards;
}
.bottom-top-leave-to {
  animation: bottom-top reverse 1s linear forwards;
}

.top-bottom-enter-from {
  opacity: 0;
}
.top-bottom-enter-to {
  animation: top-bottom 1s linear forwards;
}
.top-bottom-leave-to {
  animation: top-bottom reverse 1s linear forwards;
}

/* BURGER */

.burger {
  position: relative;
  width: 35px;
  height: 30px;
  opacity: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: var(--dark-gray1);
  border-bottom: 2px solid var(--dark-gray1);
  border-top: 2px solid var(--dark-gray1);
  box-sizing: content-box;
}

.burger-line {
  width: 100%;
  height: 3px;
  background-color: var(--white);
}

.burger-letter {
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  text-transform: uppercase;
  font-size: 4.1rem;
  display: flex;
  align-items: center;
  opacity: 1;
  background-color: var(--dark-gray1);
  border-top: 1px solid var(--dark-gray1);
  border-bottom: 1px solid var(--dark-gray1);
  box-sizing: content-box;
  z-index: -1;
}

.letter-m {
  animation: move-letter-m-out 1s linear forwards;
}
.letter-n {
  animation: move-letter-n-out 1s linear forwards;
  /* animation-delay: 1s; */
  left: 100%;
}
.letter-u {
  animation: move-letter-u-out 1s linear forwards;
  z-index: -2;
}

.burger::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--white);
}
.burger::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--white);
}

/* BURGER ACTIVE STATE */
.burger.active .burger-line {
  display: none;
}
.burger.active::before {
  animation: top-line-in 1s linear forwards;
  top: 13px;
}
.burger.active::after {
  animation: bottom-line-in 1s linear forwards;
  bottom: 14px;
}

/* BURGER HOVER STATE */
.burger:not(.active):hover .letter-m {
  animation: move-letter-m-in 1s linear forwards;
}
.burger:not(.active):hover .letter-n {
  animation: move-letter-n-in 1s linear forwards;
}
.burger:not(.active):hover .letter-u {
  animation: move-letter-u-in 1s linear forwards;
}

@keyframes top-line-in {
  0% {
    top: 0;
  }
  50% {
    top: 13px;
    left: 0;
    transform: rotate(0);
    width: 100%;
  }
  100% {
    left: -2px;
    transform: rotate(45deg);
    width: 115%;
  }
}

@keyframes bottom-line-in {
  0% {
    bottom: 0;
  }
  50% {
    bottom: 14px;
    left: 0;
    transform: rotate(0);
    width: 100%;
  }
  100% {
    left: -2px;
    transform: rotate(-45deg);
    width: 115%;
  }
}

@keyframes move-letter-m-in {
  0% {
    left: 0;
  }
  100% {
    left: -104%;
    opacity: 1;
  }
}
@keyframes move-letter-m-out {
  0% {
    left: -104%;
    opacity: 1;
  }
  100% {
    left: 0;
  }
}
@keyframes move-letter-n-in {
  0% {
    left: 0;
  }
  100% {
    left: 100%;
    opacity: 1;
  }
}
@keyframes move-letter-n-out {
  0% {
    left: 100%;
    opacity: 1;
  }
  100% {
    left: 0;
  }
}
@keyframes move-letter-u-in {
  0% {
    left: 0;
  }
  100% {
    left: 178%;
    opacity: 1;
  }
}
@keyframes move-letter-u-out {
  0% {
    left: 178%;
    opacity: 1;
  }
  100% {
    left: 0;
  }
}

@keyframes letter-leaves {
  100% {
    opacity: 0;
  }
}

@keyframes top-bottom {
  0% {
    opacity: 0;
    bottom: 180px;
  }
  100% {
    opacity: 1;
    bottom: 60px;
  }
}
@keyframes bottom-top {
  0% {
    opacity: 0;
    top: 180px;
  }
  100% {
    opacity: 1;
    top: 60px;
  }
}
@keyframes left-right {
  0% {
    opacity: 0;
    left: calc(50% - 200px);
  }
  100% {
    opacity: 1;
    left: calc(50% - 80px);
  }
}
@keyframes right-left {
  0% {
    opacity: 0;
    left: calc(50% + 200px);
  }
  100% {
    opacity: 1;
    left: calc(50% + 80px);
  }
}
</style>
