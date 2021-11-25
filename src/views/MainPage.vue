<template>
  <div class="container">
    <div class="logo-div">
      <div class="logo">2i0</div>
      <div class="logo-desc">Improve&nbsp;Yourself</div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.logo-div {
  position: relative;
}

.logo {
  opacity: 1;
  font-size: 2rem;
  font-size: 10rem;
  font-weight: 900;
  line-height: 10rem;
}

.logo-desc {
  position: absolute;
  bottom: -0.3rem;
  word-spacing: 4px;
  letter-spacing: 3px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.3rem;
  font-weight: 900;
  color: var(--white);
}
</style>
