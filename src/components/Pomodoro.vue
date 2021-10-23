<template>
  <div class="time">
    <Icon class="icon" icon="ci:chevron-duo-up" @click="addTime" />
    <span class="minutes">{{ minutes }}</span>
    <span>:</span>
    <span class="seconds">00</span>
    <Icon class="icon" icon="ci:chevron-duo-down" @click="removeTime" />
  </div>
  <div class="buttons">
    <button class="btn btn-play-pause" @click="playPause">Start</button>
    <button class="btn btn-stop" @click="stop">Stop</button>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  data() {
    return {
      minutesToGo: 1,
      secondsToGo: 0,
      timeToGo: 0,
      flag: false;
      interval: null,
    };
  },
  methods: {
    playPause() {
      if (!this.flag) {
        this.timeToGo = this.minutesToGo * 60 + this.secondsToGo;
        this.flag = true;
      }
      if(this.flag) {

        this.flag = false;
      }
    },
    stop() {},
    addTime() {
      if (this.timeToGo < 60) this.timeToGo++;
    },
    removeTime() {
      if (this.timeToGo > 1) this.timeToGo--;
    },
    timeLeft() {
      const seconds = this.timeToGo * 60;

      getMinutes() {
        return minutes;
      };
      getSeconds() {
        return minutes
      };
    }
  },
  computed: {
    minutes() {
      if (this.minutesToGo < 10) return `0${this.minutesToGo}`;
      return this.minutesToGo;
    },
  },
  components: {
    Icon,
  },
};
</script>

<style scoped>
.time {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}

.time span {
  font-size: 3rem;
  user-select: none;
  pointer-events: none;
}

.time .icon {
  font-size: 3rem;
  cursor: pointer;
}

.time .icon:first-child {
  margin-right: 0.6rem;
}

.time .icon:last-child {
  margin-left: 0.6rem;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.btn {
  cursor: pointer;

  width: 6rem;
  height: 2.4rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  font-family: Inter, sans-serif;
}
</style>
