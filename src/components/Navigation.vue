<template>
  <div class="nav">
    <router-link to="/">Main</router-link>
    <router-link to="/breath">Breath</router-link>
    <router-link to="/focus">Focus</router-link>
    <router-link to="/timer">Timer</router-link>
    <router-link to="/reactiongame">Reaction Game</router-link>
    <router-link
      v-if="loggedInFlag"
      to="/login"
      @click.prevent="loginLogout"
      class=""
    >
      logout
    </router-link>
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
  },
};
</script>

<style>
.nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
  margin-bottom: 1rem;
  z-index: 2;
}

.nav a {
  padding: 0.2rem 0.6rem;
  color: var(--white);
  text-transform: none;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  background-color: var(--blue);
  border-radius: 6px;
  transition: 0.3s ease-in-out;
}

.nav a.active {
  margin-bottom: 0.5rem;
  border-bottom: 1px solid var(--light-blue);
  box-shadow: 0 2px 10px var(--blue);
  transition: 0.3s ease-in-out;
  user-select: none;
  pointer-events: none;
}

.nav a:hover {
  margin-bottom: 0.5rem;
  border-bottom: 1px solid var(--light-blue);
  box-shadow: 0 2px 10px var(--blue);
  transition: 0.1s ease-in-out;
}

.nav a:active {
  margin-bottom: 0.3rem;
  margin-top: 0.2rem;
  border-bottom: 1px solid var(--light-blue);
  box-shadow: 0 2px 2px var(--blue);
  transition: 0.1s ease-in-out;
}
</style>
