<template>
  <div class="container">
    <div class="logo-div">
      <div class="logo"><strong>2i0</strong>me</div>
      <div class="logo-desc">Improve Yourself</div>
    </div>
    <div class="info">
      <div class="about about2">Web dev</div>
      <div class="about about3">Templates</div>
      <div class="about about4">Games</div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.info {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 13rem;
  /* height: 6rem; */
}

.logo-div {
  margin-bottom: 2rem;
}

.logo {
  opacity: 1;
  font-size: 2rem;
  line-height: 1.5rem;
}

.logo strong {
  font-size: 6rem;
  font-weight: 900;
  line-height: 4rem;
}

.logo-desc {
  font-size: 1.6rem;
  font-weight: 600;
}

.about {
  position: absolute;
  font-size: 1.6rem;
  width: 100vw;
}

.about2 {
  top: 0;
  left: 0;
  border-bottom: 2px solid var(--blue);
}
.about3 {
  top: 2rem;
  left: 4rem;
  border-bottom: 2px solid var(--dark-orange);
}

.about4 {
  top: 4rem;
  left: 8rem;
  border-bottom: 2px solid var(--dark-pink);
}
</style>
