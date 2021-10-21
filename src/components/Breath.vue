<template>
  <div class="text" v-if="flag">{{ text }}</div>
  <div class="countdown" v-if="flag">{{ time }}</div>
  <button
    class="btn"
    v-if="!flag"
    @click="
      toggleFlag();
      changeText();
      startCountdown();
    "
  >
    Start
  </button>
</template>

<script>
export default {
  data() {
    return {
      defaultTime: 2,
      defaultApproach: 2,
      time: 0,
      approach: 0,
      text: '',
      flag: false,
    };
  },
  methods: {
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

<style>
#app {
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
  justify-content: center;
}

.text {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.countdown {
  font-size: 6rem;
}
</style>