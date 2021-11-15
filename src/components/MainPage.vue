<template>
  <div class="info">
    <div>Logo 2i0</div>
    <div>Improve Yourself</div>
    <div>Site about ...</div>
  </div>
</template>

<script setup></script>

<style>
.info {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 5rem;
  border: 2px solid var(--white);
  box-shadow: 0 0 10px var(--blue), inset 0 0 10px var(--blue),
    0 0 20px var(--blue);
  background-color: var(--dark-gray1);
}

.info::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 15%;
  left: 5%;
  border: 2px solid var(--white);
  box-shadow: 0 0 10px var(--dark-orange), inset 0 0 10px var(--dark-orange),
    0 0 20px var(--dark-orange);
  z-index: -1;
}
.info::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 15%;
  right: 5%;
  border: 2px solid var(--white);
  box-shadow: 0 0 10px var(--dark-pink), inset 0 0 10px var(--dark-pink),
    0 0 20px var(--dark-pink);
  z-index: -2;
}
</style>
