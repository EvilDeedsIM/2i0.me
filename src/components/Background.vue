<template>
  <div class="container">
    <transition name="move" appear>
      <div class="figure square"></div>
    </transition>
    <div class="figure x"></div>
    <div class="figure circle"></div>
    <div class="figure triangle"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

function moveObject() {
  let square = document.querySelector('.square');
}
</script>

<style scoped>
.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -100;
}

.figure {
  position: absolute;
  width: 30px;
  height: 30px;
  background-size: contain;
  opacity: 0;
}

.x {
  background-image: url('../assets/svg/x.svg');
}
.square {
  background-image: url('../assets/svg/square.svg');
  left: 90%;
}
.circle {
  background-image: url('../assets/svg/circle.svg');
}
.triangle {
  background-image: url('../assets/svg/triangle.svg');
}

.move-enter-active {
  animation-name: moving;
  animation-duration: 5s;
  animation-timing-function: linear;
}

@keyframes moving {
  0% {
    top: 15%;
    left: 10%;
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    top: 55%;
    left: 90%;
    opacity: 0;
  }
}
</style>
