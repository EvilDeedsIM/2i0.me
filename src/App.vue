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
  color: #fff;
  background-color: #00131a;
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
