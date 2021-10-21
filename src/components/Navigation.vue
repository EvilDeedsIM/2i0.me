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
  align-items: center;
  gap: 2rem;
  padding: 1rem 0;
  margin-bottom: 1rem;
}

.nav a {
  position: relative;
  color: #fff;
  text-transform: none;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
  transition: 0.2s ease-in-out;
}

.nav a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #fff;
}

.nav a.active {
  border: 1px solid #fff;
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
