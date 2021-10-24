<template>
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
    <button class="btn" @click="start">Start</button>
  </div>
  <div class="dot" :class="hiddenDot" :style="style" v-else></div>
</template>

<script>
export default {
  data() {
    return {
      timeInMinutes: 1,
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
      this.time = this.timeInMinutes * 10;
      this.hiddenMain = 'hidden';

      setTimeout(() => {
        this.flag = !this.flag;

        this.interval = setInterval(() => {
          if (this.time > 0) {
            this.time--;
          }
          console.log(this.time);
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
.main {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 1;
  transition: 0.3s ease-in-out;
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
