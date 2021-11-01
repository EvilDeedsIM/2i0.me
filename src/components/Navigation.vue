<template>
  <div class="nav">
    <router-link to="/">Main</router-link>
    <router-link to="/breath">Breath</router-link>
    <router-link to="/focus">Focus</router-link>
    <router-link to="/timer">Timer</router-link>
    <router-link to="/reactiongame">Reaction Game</router-link>
  </div>
</template>

<style>
.nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0;
  margin-bottom: 1rem;
  z-index: 2;
}

.nav a {
  position: relative;
  color: var(--white);
  text-transform: none;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
  transition: 0.2s ease-in-out;
  text-transform: uppercase;
}

.nav a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--white);
}

.nav a.active {
  border: 1px solid var(--white);
  border-radius: 5px;
  padding: 0 5px;
  text-decoration: none;
  transition: 0.2s ease-in-out;
}

.nav a.active::before {
  width: 0;
}

.nav a:hover::before {
  left: 50%;
  width: 0;
  transition: 0.2s ease-in-out;
}
</style>
