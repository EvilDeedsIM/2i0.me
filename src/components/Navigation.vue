<template>
  <div class="nav">
    <div class="menu" @click="menuToggle">
      <span>{{ menuText }}</span>
      <ul class="menu-list" v-if="menuFlag">
        <li>
          <router-link to="/">Main</router-link>
        </li>
        <li>
          <router-link to="/breath">Breath</router-link>
        </li>

        <li><router-link to="/focus">Focus</router-link></li>
        <li><router-link to="/timer">Timer</router-link></li>
        <li>
          <router-link to="/reactiongame">Reaction&nbsp;Game</router-link>
        </li>
        <li>
          <router-link
            v-if="loggedInFlag"
            to="/login"
            @click.prevent="loginLogout"
            class=""
          >
            logout
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ['loggedInFlag'],
  emits: ['logged-out'],
  data() {
    return {
      active: 0,
      menuFlag: false,
      menuText: '+',
    };
  },
  methods: {
    loginLogout(e) {
      localStorage.removeItem('user');
      this.$emit('logged-out', true);
      setTimeout(() => {
        this.$router.push('/');
      }, 500);
    },
    menuToggle() {
      this.menuFlag = !this.menuFlag;
      if (this.menuText === '+') {
        this.menuText = '-';
        return;
      }
      this.menuText = '+';
    },
  },
};
</script>

<style scoped>
.menu {
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--light-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.menu-list {
  position: absolute;
  bottom: -100%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;
}

.nav a {
  position: relative;
  padding: 0.2rem 0.6rem;
  color: var(--white);
  text-transform: none;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 6px;
  transition: 0.3s ease-in-out;
}
</style>
