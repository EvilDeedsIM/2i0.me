<template>
  <!-- <div class="border-top-right" :style="borderTopRight"></div>
  <div class="border-bottom-left" :style="borderBottomLeft"></div> -->
  <div class="main" :class="hiddenMain" v-if="!flag">
    <div class="dot" :style="style"></div>
    <label class="label" for="size">Size</label>
    <input
      class="range"
      id="size"
      type="range"
      min="10"
      max="100"
      step="10"
      v-model="size"
    />
    <label class="label" for="color">Color</label>
    <input
      class="range"
      id="color"
      type="range"
      min="0"
      max="27"
      step="1"
      v-model="colorNum"
    />
    <label class="label" for="time"
      >Time: <strong>{{ timeInMinutes }}</strong> min</label
    >
    <input
      class="range"
      id="time"
      type="range"
      min="1"
      max="30"
      step="1"
      v-model="timeInMinutes"
    />
    <button class="btn" @click="start">Start</button>
  </div>
  <template v-else>
    <div class="dot" :class="hiddenDot" :style="style"></div>
    <progress
      class="progress"
      id="progress"
      min="0"
      max="100"
      :value="value"
    ></progress>
  </template>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      timeInMinutes: 5,
      time: 0,
      interval: null,
      flag: false,
      hiddenMain: '',
      hiddenDot: 'hidden',
      size: 50,
      colorNum: 0,
      colors: [
        '#fff',
        '#ff4d4d',
        '#ff794d',
        '#ffa64d',
        '#ffd24d',
        '#ffff4d',
        '#d2ff4d',
        '#a6ff4d',
        '#79ff4d',
        '#4dff4d',
        '#4dff79',
        '#4dffa6',
        '#4dffd2',
        '#4dffff',
        '#4dd2ff',
        '#4da6ff',
        '#4d94ff',
        '#4d79ff',
        '#4d4dff',
        '#794dff',
        '#a64dff',
        '#d24dff',
        '#ff4dff',
        '#ff4dd2',
        '#ff4da6',
        '#ff4d79',
        '#ff4d4d',
        '#0d0d0d', // 28 colors
      ],
    };
  },
  methods: {
    start() {
      this.time = this.timeInMinutes * 60;
      this.hiddenMain = 'hidden';

      setTimeout(() => {
        this.flag = !this.flag;

        this.interval = setInterval(() => {
          if (this.time > 0) {
            this.time--;
            this.changeValue();
          }
          // console.log(this.time);
          if (this.time === 0) {
            this.endGame();
            clearInterval(this.interval);
          }
        }, 1000);

        setTimeout(() => {
          this.hiddenDot = '';
        }, 100);
      }, 600);
    },
    endGame() {
      this.hiddenDot = 'hidden';
      this.time = this.timeInMinutes;

      setTimeout(() => {
        this.flag = !this.flag;
        setTimeout(() => {
          this.hiddenMain = '';
        }, 100);
      }, 600);
    },
    changeValue() {
      this.value = 100 - Math.floor((this.time / (this.timeInMinutes * 60)) * 100);
    },
  },
  computed: {
    style() {
      return `background-color:${this.colors[this.colorNum]}; width: ${
        this.size
      }px; height: ${this.size}px`;
    },
  },
};
</script>

<style scoped>
strong {
  font-weight: 700;
  font-size: 1.1rem;
}

.progress {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0.1;
  margin: 0;
  padding: 0;
}

.border-bottom-left {
  position: absolute;
  border-bottom: 6px solid #fff;
  border-left: 6px solid #fff;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  overflow: hidden;
}

.border-top-right {
  position: absolute;
  border-top: 6px solid #fff;
  border-right: 6px solid #fff;
  top: 0;
  left: 0;
  box-sizing: border-box;
  overflow: hidden;
}

.main {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: 0.3s ease-in-out;
  overflow: hidden;
}

.main.hidden {
  opacity: 0;
  transition: 0.3s ease-in-out;
}

.dot {
  border-radius: 100%;
  margin-bottom: 2rem;
  opacity: 1;
  transition: opacity 0.3s ease-in-out, 0.2s ease-in-out;
}

.dot.hidden {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.range {
  margin-bottom: 1rem;
  width: 100%;
  max-width: 300px;
}

.range:last-of-type {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.2rem;
}

.btn {
  padding: 0.7rem 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  cursor: pointer;
  background: none;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 10px;
  opacity: 1;
  transition: 0.5s ease-in-out;
}

.btn:active {
  font-size: 1.3rem;
  transition: 0.1s ease-in-out;
}

.btn.hidden {
  opacity: 0;
  transition: 0.5s ease-in-out;
}
</style>
