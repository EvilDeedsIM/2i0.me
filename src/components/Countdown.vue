<template>
  <div class="total">
    <p class="text-right">Timers: {{ timers }}&nbsp;|&nbsp;</p>
    <p>Total time: {{ totalTime }}</p>
  </div>
  <div class="time">
    <div class="minutes-div">
      <Icon
        class="icon icon-min-up"
        icon="ci:chevron-duo-up"
        @click="addTime('min')"
        v-if="!hidden"
      />
      <span class="minutes">{{ time.min }}</span>
      <Icon
        class="icon icon-min-down"
        icon="ci:chevron-duo-down"
        @click="removeTime('min')"
        v-if="!hidden"
      />
    </div>
    <span v-if="runFlag || pauseFlag">:</span>
    <div class="seconds-div" v-if="runFlag || pauseFlag">
      <span class="seconds">{{ time.sec }}</span>
    </div>
  </div>
  <div class="buttons">
    <button class="btn btn-play-pause" @click="playPause">
      {{ playPauseButtonText }}
    </button>
    <button class="btn btn-stop" @click="stopBtn">Stop</button>
  </div>
  <div class="audio">
    <h3 class="audio-title">Sound</h3>
    <div class="audio-choose">
      <div>
        <label for="audio-on">on</label>
        <input
          type="radio"
          id="audio-on"
          name="audio"
          value="on"
          :checked="audioFlag"
          @change="turnAudio"
        />
      </div>
      <div>
        <input
          type="radio"
          id="audio-off"
          name="audio"
          value="off"
          :checked="!audioFlag"
          @change="turnAudio"
        />
        <label for="audio-off">off</label>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import axios from 'axios';

export default {
  props: ['user'],
  data() {
    return {
      title: '2i0.me',

      defaultMinutes: 25,
      minutesToGo: 1,
      oneMinute: 2,
      timeToGo: null,

      runFlag: false,
      pauseFlag: false,
      hidden: false,
      audioFlag: false,

      interval: null,
      titleFaviconInterval: null,

      audioAlarm: null,

      timers: 0,
      totalTime: 0,
      timersUrl: `https://i0me-ae237-default-rtdb.europe-west1.firebasedatabase.app/users/${this.user.id}/timers.json`,
    };
  },
  created() {
    this.loadTimersCount();
  },
  methods: {
    async saveTimer() {
      const date = Date.now();

      const response = await axios.post(this.timersUrl, {
        title: 'timer-' + Date.now(),
        time: this.minutesToGo,
      });
      this.loadTimersCount();
    },

    async loadTimersCount() {
      const { data } = await axios.get(this.timersUrl);
      if (data) {
        const allTimers = Object.values(data);

        this.totalTime = allTimers.reduce((acc, obj) => acc + obj.time, 0);

        this.timers = allTimers.length;
      }
    },

    playPause() {
      // Restart
      if (this.timeToGo === 0) {
        this.timeToGo = this.minutesToGo * this.oneMinute;

        if (this.audioAlarm) this.stopAudio();

        clearInterval(this.titleFaviconInterval);
        this.startInterval();

        this.changeFavicon('orange');
        return;
      }

      // Play
      if (!this.runFlag) {
        this.timeToGo = this.minutesToGo * this.oneMinute;
        this.runFlag = true;
        this.pauseFlag = false;
        this.hidden = true;
        this.startInterval();
        this.changeFavicon('orange');
        return;
      }

      // Pause
      clearInterval(this.interval);
      this.pauseFlag = true;
      this.runFlag = false;
      this.changeFavicon('blue');
    },

    stopBtn() {
      if (this.timeToGo > 0) {
        const stop = confirm('Are you sure?');
        if (stop) this.stop();
        return;
      }

      this.stop();
    },

    stop() {
      if (this.audioAlarm) this.stopAudio();

      clearInterval(this.interval);
      clearInterval(this.titleFaviconInterval);
      document.title = this.title;

      this.runFlag = false;
      this.pauseFlag = false;
      this.minutesToGo = this.defaultMinutes;
      this.hidden = false;

      this.timeToGo = null;

      this.changeFavicon('blue');
    },

    addTime(x) {
      if (x === 'min') {
        if (this.minutesToGo < 60) this.minutesToGo++;
      }
    },

    removeTime(x) {
      if (x === 'min') {
        if (this.minutesToGo > 1) this.minutesToGo--;
      }
    },

    reduceTimeToGo() {
      if (this.timeToGo > 0) {
        this.timeToGo--;
        const min = Math.floor(this.timeToGo / this.oneMinute);
        const sec = this.timeToGo % this.oneMinute;
        document.title = `${min}:${sec}`;
        return;
      }

      if (this.audioFlag) {
        this.playAudio();
      }

      this.saveTimer();
      this.startTitleFaviconInterval();
      clearInterval(this.interval);
    },

    startInterval() {
      this.interval = setInterval(this.reduceTimeToGo, 1000);
    },

    startTitleFaviconInterval() {
      this.titleFaviconInterval = setInterval(() => {
        if (document.title === '00:00') {
          this.changeFavicon('orange');
          document.title = '--:--';
        } else {
          this.changeFavicon('red');
          document.title = '00:00';
        }
      }, 1000);
    },

    changeFavicon(color) {
      const link = document.querySelector("link[rel*='icon']");
      link.href = `/favicon-${color}.ico?v=2`;
    },

    playAudioListener() {
      setTimeout(() => {
        this.audioAlarm.play();
      }, 500);
    },

    playAudio() {
      this.audioAlarm = new Audio('/audio/piano_alarm.mp3');
      this.audioAlarm.play();
      this.audioAlarm.addEventListener('ended', this.playAudioListener);
    },

    stopAudio() {
      this.audioAlarm.pause();
      this.audioAlarm.removeEventListener('ended', this.playAudioListener);
    },

    turnAudio(e) {
      const condition = e.target.value;
      if (condition === 'on') this.audioFlag = true;
      if (condition === 'off') this.audioFlag = false;
    },
  },
  computed: {
    time() {
      let min = Math.floor(this.timeToGo / this.oneMinute);
      let sec = this.timeToGo % this.oneMinute;

      if (this.runFlag || this.pauseFlag) {
        let min = Math.floor(this.timeToGo / this.oneMinute);
        let sec = this.timeToGo % this.oneMinute;

        if (min < 10) min = `0${min}`;
        if (sec < 10) sec = `0${sec}`;

        return {
          min,
          sec,
        };
      }

      if (this.minutesToGo < 10) {
        return { min: `0${this.minutesToGo}` };
      } else {
        return { min: this.minutesToGo };
      }
    },

    playPauseButtonText() {
      if (this.timeToGo === 0) return 'Restart';

      if (this.runFlag) return 'Pause';

      if (this.pauseFlag) return 'Continue';

      return 'Start';
    },
  },
  components: {
    Icon,
  },
};
</script>

<style scoped>
.total {
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
}

.text-right {
  text-align: right;
}

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
  margin-bottom: 1.6rem;
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

.audio {
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.audio-title {
  font-size: 1.5rem;
}

.audio-choose {
  display: flex;
  gap: 1rem;
  font-size: 0.7rem;
}

.audio-choose,
.audio-choose label,
.audio-choose input {
  cursor: pointer;
}

.audio-choose div {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}
</style>
