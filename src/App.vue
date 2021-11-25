<template>
  <navigation @logged-out="logout" :loggedInFlag="loggedInFlag"></navigation>
  <router-view
    @auth-user="authUser"
    :user="user"
    :loggedInFlag="loggedInFlag"
  ></router-view>
  <social></social>
  <Background />
</template>

<script>
import Navigation from './components/Navigation.vue';
import Autentification from './views/Autentification.vue';
import Social from './components/Social.vue';
import Background from './components/Background.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  inheritAttrs: false,

  emits: ['user', 'loggedInFlag'],
  data() {
    return {
      loginText: '',
      loggedInFlag: false,
      user: {},
    };
  },

  created() {
    const localUser = localStorage.getItem('user') || {};
    if (Object.keys(localUser).length > 0) {
      this.user = JSON.parse(localUser);
      this.loggedInFlag = true;
    }
  },

  methods: {
    authUser(data) {
      this.user = data;
      localStorage.setItem('user', JSON.stringify(this.user));
      this.loggedInFlag = true;
      console.log(this.user);
    },

    logout(data) {
      this.loggedInFlag = !data;
    },

    ...mapActions(['getAllUsers']),
  },

  computed: {
    ...mapGetters(['users']),
  },

  components: {
    Navigation,
    Autentification,
    Social,
    Background,
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);

:root {
  --black: #0d0d0d;
  --dark-blue: #00131a;
  --blue: #1e90ff;
  --light-blue: #28a9ff;
  --aqua: #14dece;
  --light-orange: #ffb638;
  --dark-orange: #ff7135;
  --yellow: #cbcb41;
  --dark-pink: #a4328d;
  --light-pink: #da70d0;
  --green: #42dd76;
  --white: #eeeee0;
  --dark-gray1: #141417;
  --dark-gray2: #101012;
  --light-gray1: #b2b2b3;
  --light-gray2: #aaaaaa;
  --mid-gray1: #676769;
  --mid-gray2: #555553;
  --red: #d62c2c;
}

html {
  box-sizing: border-box;
  font-size: 10px;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
}

body {
  font-family: Inter, sans-serif;
  display: flex;
  justify-content: center;
  height: 100vh;
  font-size: 10px;
  color: var(--white);
  background-color: var(--dark-gray1);
  overflow: hidden;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.5rem;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
