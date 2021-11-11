<script setup>
import { ref, computed } from 'vue';

let time = ref(0);
let interval = null;
let startBtnText = ref('Start');

function start() {
  if (startBtnText.value === 'Pause') {
    changeFavicon('blue');
    startBtnText.value = 'Continue';
    clearInterval(interval);
    return;
  }

  changeFavicon('orange');
  startBtnText.value = 'Pause';
  interval = setInterval(() => {
    time.value++;
  }, 1000);
}

function stop() {
  changeFavicon('blue');
  clearInterval(interval);
  time.value = 0;
  startBtnText.value = 'Start';
}

const timeComputed = computed(() => {
  const hours = Math.floor(time.value / 60 / 60);
  const minutes = Math.floor(time.value / 60) % 60;
  const seconds = time.value % 60;
  if (hours) {
    return `${hours}:${minutes >= 10 ? minutes : `0${minutes}`}:${
      seconds >= 10 ? seconds : `0${seconds}`
    }`;
  }

  return `${minutes >= 10 ? minutes : `0${minutes}`}:${
    seconds >= 10 ? seconds : `0${seconds}`
  }`;
});

function changeFavicon(color) {
  const link = document.querySelector("link[rel*='icon']");
  link.href = `/favicon-${color}.ico?v=2`;
}
</script>

<template>
  <div class="container">
    <div class="time">{{ timeComputed || '00:00' }}</div>
    <div class="buttons">
      <button class="btn btn-start" @click="start">{{ startBtnText }}</button>
      <button class="btn btn-stop" @click="stop">Stop</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.time {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;
}
</style>
