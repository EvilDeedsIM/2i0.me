<template>
  <div class="text" v-if="flag">{{ text }}</div>
  <div class="countdown" v-if="flag">{{ `0${time}` }}</div>
  <button
    class="btn"
    v-if="!flag"
    @click="startBreathing"
    :class="hidden ? 'hidden' : ''"
  >
    Start
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  data() {
    return {
      defaultTime: 7,
      defaultApproach: 7,
      time: 0,
      approach: 0,
      text: '',
      flag: false,
      hidden: false,
    };
  },
  methods: {
    startBreathing() {
      this.hidden = true;
      setTimeout(() => {
        this.toggleFlag();
        this.changeText();
        this.startCountdown();
      }, 1000);
    },
    toggleFlag() {
      this.flag = !this.flag;
    },
    startCountdown() {
      this.time = this.defaultTime;
      this.approach = this.defaultApproach;
      this.interval = setInterval(this.changeValues, 1000);
    },
    changeValues() {
      if (this.time > 0) {
        this.time--;
        return;
      }

      if (this.time === 0) {
        if (this.approach === 1 && this.text === 'exhale') {
          clearInterval(this.interval);
          this.approach = this.defaultApproach;
          this.changeText();
          this.toggleFlag();
          setTimeout(() => {
            this.hidden = false;
          }, 100);
          return;
        }

        if (this.text === 'exhale') {
          this.approach--;
        }

        this.time = this.defaultTime;
        this.changeText();
      }
    },
    changeText() {
      this.text === 'inhale' ? (this.text = 'exhale') : (this.text = 'inhale');
    },
  },
};
</script>

<style scoped>
.text {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.countdown {
  font-size: 6rem;
  font-weight: 800;
}

.btn {
  padding: 0.7rem 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  cursor: pointer;
  background: none;
  color: var(--white);
  border: 2px solid var(--white);
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
