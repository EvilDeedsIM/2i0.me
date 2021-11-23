<template>
  <div class="nav">
    <div class="menu" @click="menuToggle">
      <span>{{ menuText }}</span>
      <div class="menu-list" v-if="menuFlag">
        <div class="section main" v-if="$route.path !== '/'">
          <router-link to="/">Main</router-link>
        </div>
        <div class="section main">
          <router-link to="/">Main</router-link>
        </div>
        <div class="section templates">
          <router-link to="/templates">Templates</router-link>
        </div>
        <div class="section contacts">
          <router-link to="/contacts">Contact&nbsp;ME</router-link>
        </div>
        <div class="section games">
          <router-link to="/games">Games</router-link>
        </div>
        <div class="section about">
          <router-link to="/about">about me</router-link>
        </div>

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
  gap: 0.5rem;
}

.section {
  position: absolute;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 12rem;
}

.section a.active {
  width: 100%;
  text-align: center;
  border-left: 1px solid var(--light-gray1);
  border-right: 1px solid var(--light-gray1);
}

.nav .contacts {
  width: 15rem;
  height: 3.5rem;
  top: 40px;
}
.nav .contacts a {
  font-size: 2rem;
}

.nav .main {
  top: -30px;
  left: 0;
}
.nav .templates {
  top: 5px;
  left: 40px;
}
.nav .games {
  top: 5px;
  right: 40px;
}
.nav .about {
  top: -30px;
  right: 0;
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
