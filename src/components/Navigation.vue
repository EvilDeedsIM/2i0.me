<template>
  <div class="nav">
    <div class="menu" @click="menuToggle">
      <span>{{ menuText }}</span>
      <div class="menu-list" v-if="menuFlag">
        <div class="section main" v-if="$route.path !== '/'">
          <router-link to="/">Main</router-link>
        </div>

        <div class="section works">
          <router-link to="/works">Works</router-link>
        </div>
        <div class="section games">
          <router-link to="/games">Games</router-link>
        </div>
        <div class="section apps">
          <router-link to="/apps">Apps</router-link>
        </div>
        
        <!-- <router-link to="/reactiongame">Reaction&nbsp;Game</router-link> -->
        <router-link
          v-if="loggedInFlag"
          to="/login"
          @click.prevent="loginLogout"
          class=""
        >
          logout
        </router-link>
      </div>
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
.nav {
  position: absolute;
  top: 0.5rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.menu {
  position: relative;
  width: 3rem;
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
  gap: .5rem;
}

.section {
  position: relative;
  border: 1px solid var(--dark-gray2);
  box-shadow: 0 0 10px (--dark-gray2);
  border-radius: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 9rem;
}

.nav a {
  color: var(--white);
  text-transform: none;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
