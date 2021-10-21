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
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  height: 100vh;
  font-size: 10px;
  color: #fff;
  background-color: #00131a;
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
}


</style>
