<template>
  <navigation></navigation>

  <router-view></router-view>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  components: { Navigation },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);

:root {
  --black: #0d0d0d;
  --dark-blue: #00131a;
  --blue: dodgerblue;
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
  width: 100%;
}
</style>
