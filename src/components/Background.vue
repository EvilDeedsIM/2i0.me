<template>
  <div class="container">
    <div class="figure square"></div>
    <div class="figure x"></div>
    <div class="figure circle"></div>
    <div class="figure triangle"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 3px solid red;
  z-index: -100;
}

.figure {
  width: 30px;
  height: 30px;
  background-size: contain;
}

.x {
  background-image: url('../assets/svg/x.svg');
}
.square {
  background-image: url('../assets/svg/square.svg');
}
.circle {
  background-image: url('../assets/svg/circle.svg');
}
.triangle {
  background-image: url('../assets/svg/triangle.svg');
}
</style>
