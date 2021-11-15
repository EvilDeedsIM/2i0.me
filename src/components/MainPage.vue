<template>
  <div class="container">
    <div class="info">
      <div>
        <div class="logo">Logo 2i0</div>
        <div>Improve Yourself</div>
      </div>
      <div>Site about ...</div>
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
  border: 2px solid var(--white);
  box-shadow: 0 0 10px var(--blue), inset 0 0 10px var(--blue),
    0 0 20px var(--blue);
}

.container::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 30px;
  left: 30px;
  border: 2px solid var(--white);
  box-shadow: 0 0 10px var(--dark-orange), inset 0 0 10px var(--dark-orange),
    0 0 20px var(--dark-orange);
  z-index: -1;
}
.container::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 30px;
  right: 30px;
  border: 2px solid var(--white);
  box-shadow: 0 0 10px var(--dark-pink), inset 0 0 10px var(--dark-pink),
    0 0 20px var(--dark-pink);
  z-index: -2;
}

.info {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 50vw;
  opacity: 0.98;
  background-color: var(--dark-gray1);
}

.logo {
  opacity: 1;
}
</style>
