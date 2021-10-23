<template>
  <div class="time">
    <div class="minutes-div">
      <Icon
        class="icon icon-min-up"
        icon="ci:chevron-duo-up"
        @click="addTime('min')"
        v-if="!pauseFlag"
      />
      <span class="minutes">{{ minutes }}</span>
      <Icon
        class="icon icon-min-down"
        icon="ci:chevron-duo-down"
        @click="removeTime('min')"
        v-if="!pauseFlag"
      />
    </div>
    <span>:</span>
    <div class="seconds-div">
      <Icon
        class="icon icon-sec-up"
        icon="ci:chevron-duo-up"
        @click="addTime('sec')"
        v-if="!pauseFlag"
      />
      <span class="seconds">{{ seconds }}</span>
      <Icon
        class="icon icon-sec-down"
        icon="ci:chevron-duo-down"
        @click="removeTime('sec')"
        v-if="!pauseFlag"
      />
    </div>
  </div>
  <div class="buttons">
    <button class="btn btn-play-pause" @click="playPause">
      {{ runFlag ? 'Pause' : pauseFlag ? 'Continue' : 'Start' }}
    </button>
    <button class="btn btn-stop" @click="stop">Stop</button>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  data() {
    return {
      defaultMinutes: 20,
      minutesToGo: 20,
      secondsToGo: 0,
      timeToGo: 0,
      runFlag: false,
      pauseFlag: false,
      interval: null,
      oneMinute: 60,
    };
  },
  methods: {
    playPause() {
      if (!this.runFlag) {
        this.timeToGo = this.minutesToGo * this.oneMinute + this.secondsToGo;
        this.runFlag = true;
        this.pauseFlag = true;
        this.startInterval();
        return;
      }

      clearInterval(this.interval);
      this.runFlag = false;
    },

    stop() {
      clearInterval(this.interval);
      this.runFlag = false;
      this.pauseFlag = false;
      this.minutesToGo = this.defaultMinutes;
      this.secondsToGo = 0;
    },

    addTime(x) {
      if (x === 'min') {
        if (this.minutesToGo < 60) this.minutesToGo++;
        if (this.minutesToGo === 60) this.secondsToGo = 0;
      }

      if (x === 'sec') {
        if (this.secondsToGo < 60 && this.minutesToGo < 60) this.secondsToGo++;
        if (this.secondsToGo === 60 && this.minutesToGo < 60) {
          this.secondsToGo = 0;
          this.minutesToGo++;
        }
      }
    },

    removeTime(x) {
      if (x === 'min') {
        if (this.minutesToGo === 1) this.secondsToGo = 0;
        if (this.minutesToGo > 1) this.minutesToGo--;
      }

      if (x === 'sec') {
        if (this.secondsToGo === 0 && this.minutesToGo > 1) {
          this.secondsToGo = 59;
          this.minutesToGo--;
          return;
        }
        if (this.secondsToGo > 0) this.secondsToGo--;
      }
    },

    reduceTimeToGo() {
      if (this.timeToGo > 0) {
        this.timeToGo--;
        this.minutesToGo = Math.floor(this.timeToGo / this.oneMinute);
        this.secondsToGo = this.timeToGo % this.oneMinute;
        // console.log(this.timeToGo);
        // console.log('min:', this.minutesToGo, 'sec:', this.secondsToGo);
        return;
      }

      this.stop();
    },

    startInterval() {
      this.interval = setInterval(this.reduceTimeToGo, 1000);
    },
  },
  computed: {
    minutes() {
      if (this.minutesToGo < 10) return `0${this.minutesToGo}`;
      return this.minutesToGo;
    },

    seconds() {
      if (this.secondsToGo < 10) return `0${this.secondsToGo}`;
      return this.secondsToGo;
    },
  },
  components: {
    Icon,
  },
};
</script>

<style scoped>
.time {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
}

.time span {
  font-size: 3rem;
  user-select: none;
  pointer-events: none;
}

.time .icon {
  position: absolute;
  font-size: 3rem;
  cursor: pointer;
  margin: 0 !important;
}

.time .icon:first-child {
  margin-right: 0.6rem;
}

.time .icon:last-child {
  margin-left: 0.6rem;
}

.time .minutes-div,
.time .seconds-div {
  position: relative;
}

.time .icon-min-up {
  top: -36px;
  left: 50%;
  transform: translateX(-50%);
}

.time .icon-min-down {
  bottom: -36px;
  left: 50%;
  transform: translateX(-50%);
}

.time .icon-sec-up {
  top: -36px;
  right: 50%;
  transform: translateX(50%);
}

.time .icon-sec-down {
  bottom: -36px;
  right: 50%;
  transform: translateX(50%);
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.btn {
  cursor: pointer;
  width: 6.6rem;
  height: 2.4rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
  font-family: Inter, sans-serif;
}
</style>
