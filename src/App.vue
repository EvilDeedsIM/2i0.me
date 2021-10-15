<template>
  <h1>2i0.me</h1>

  <app-to-35></app-to-35>
</template>

<script>
import AppTo35 from './components/AppTo35.vue';

export default {
  components: {
    AppTo35,
  },
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
  font-size: 10px;
  color: #fff;
  background-color: #161618;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.5rem;
}
</style>
