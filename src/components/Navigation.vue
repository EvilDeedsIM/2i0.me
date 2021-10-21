<template>
  <div class="nav">
    <router-link to="/">Main</router-link>
    <router-link to="/breath">Breath</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 0;
  margin-bottom: 1rem;
}

.nav a {
  color: #fff;
  text-transform: none;
  text-decoration: underline;
  font-size: 0.9rem;
  font-weight: 700;
}
</style>
