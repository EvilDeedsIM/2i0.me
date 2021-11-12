<script setup>
import axios from 'axios';
import { ref, computed, defineProps, defineEmits, toRefs, watch } from 'vue';

const props = defineProps({
  user: Object,
});
const { user } = toRefs(props);

const emit = defineEmits(['run-flag']);

const timerUrl = `https://i0me-ae237-default-rtdb.europe-west1.firebasedatabase.app/users/${props.user.id}/up-timers.json`;

let time = ref(0);
let interval = null;
let startBtnText = ref('Start');
let intervalValue = ref(25);
let runFlag = false;

function start() {
  if (startBtnText.value === 'Pause') {
    changeFavicon('blue');
    startBtnText.value = 'Continue';
    clearInterval(interval);
    return;
  }

  changeFavicon('orange');
  runFlag = true;
  startBtnText.value = 'Pause';
  interval = setInterval(() => {
    time.value++;
  }, 1000);
}

function stop() {
  if (runFlag) {
    const res = confirm('Really Want to STOP?');
    if (res) {
      saveTimer();
      runFlag = false;
      emit('run-flag', runFlag);
      changeFavicon('blue');
      clearInterval(interval);
      time.value = 0;
      startBtnText.value = 'Start';
    }
  }
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

let timers = computed(() => {
  const allTimersArr = Object.values(user.value.data['up-timers'] || {});
  const count = allTimersArr.length;
  const time = allTimersArr.reduce((acc, time) => {
    return acc + time.time;
  }, 0);

  return {
    count,
    time,
  };
});

function changeFavicon(color) {
  const link = document.querySelector("link[rel*='icon']");
  link.href = `/favicon-${color}.ico?v=2`;
}

async function saveTimer() {
  const headers = {
    'Content-Type': 'text/plain',
  };

  const response = await axios.post(
    timerUrl,
    {
      title: 'timer-' + Date.now(),
      time: time.value,
    },
    { headers }
  );
}
</script>

<template>
  <div class="container">
    <label class="interval-text" for="interval">{{ intervalValue }}</label>
    <input
      id="inteval"
      class="interval"
      type="range"
      min="5"
      max="60"
      step="5"
      v-model="intervalValue"
    />
    <div class="time">{{ timeComputed || '00:00' }}</div>
    <div class="buttons">
      <button class="btn btn-start" @click="start">{{ startBtnText }}</button>
      <button class="btn btn-stop" @click="stop">Stop</button>
    </div>

    <div class="user">
      <div class="user-name">Hello {{ user.data.userName }}</div>
      <div v-if="Object.keys(timers).length">
        <p>Total timers: {{ timers.count }}</p>
        <p>Total time spent: {{ timers.time }}</p>
      </div>
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

.interval {
  width: 100%;
  margin-bottom: 4rem;
}

.interval-text {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.time {
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 4rem;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.btn {
  width: 90px;
  height: 30px;
}
</style>
