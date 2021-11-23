<template>
  <div class="container">
    <div class="greeting" v-if="loggedInFlag">
      Gretings <strong>{{ getUserName }}</strong>
    </div>

    <h2>35</h2>

    <span id="years">{{ getYears }}</span>
    <label for="years">Years</label>
    <span id="days">{{ getDays }}</span>
    <label for="days">Days</label>
    <span id="hours">{{ getHours }}</span>
    <label for="hours">Hours</label>
    <span id="minutes">{{ getMinutes }}</span>
    <label for="minutes">Minutes</label>
    <span id="seconds">{{ getSeconds }}</span>
    <label for="seconds">Seconds</label>
    <h2 class="quote-title">Improve Yourself</h2>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ['user', 'loggedInFlag'],
  data() {
    return {
      finishDate: new Date(`February 20 2024 00:00`),
      timeToGo: 0,
    };
  },
  mounted() {
    this.getTime();
  },
  methods: {
    getTime() {
      this.setTime();
      this.interval = setInterval(() => {
        this.setTime();
      }, 1000);
    },
    setTime() {
      this.timeToGo = this.finishDate - new Date();
    },
    print() {
      console.log(this.user);
    },
  },
  computed: {
    getYears() {
      return Math.floor(this.timeToGo / 1000 / 60 / 60 / 24 / 365);
    },
    getDays() {
      return Math.floor(this.timeToGo / 1000 / 60 / 60 / 24);
    },
    getHours() {
      return Math.floor(this.timeToGo / 1000 / 60 / 60);
    },
    getMinutes() {
      return Math.floor(this.timeToGo / 1000 / 60);
    },
    getSeconds() {
      return Math.floor(this.timeToGo / 1000);
    },
    getUserName() {
      return this.user.data.userName;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 5rem;
  border: 2px solid var(--white);
  box-shadow: 0 0 10px var(--blue), inset 0 0 10px var(--blue), 0 0 20px var(--blue);
}

span {
  display: block;
  font-size: 1rem;
  font-weight: 700;
}

h2 {
  margin-bottom: 0.5rem;
}

.greeting {
  margin-bottom: 4rem;
  font-size: 1rem;
  font-weight: 500;
}

.greeting strong {
  font-weight: 800;
}

.quote-title {
  margin-top: 1rem;
  font-size: 1.2rem;
}
</style>
