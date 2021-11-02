<template>
  <div class="container">
    <div class="workout">
      <Icon icon="icon-park-outline:sport" />
    </div>
    <progress max="100" value="10" />
    <div class="workout">
      <Icon icon="icon-park-outline:sport" />
    </div>
    <progress max="100" value="80" />
    <div class="workout">
      <Icon icon="icon-park-outline:sport" />
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
  components: {
    Icon,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}
.workout {
  width: 40px;
  height: 40px;
  border: 1px solid var(--white);
  border-radius: 5px;
  color: aliceblue;
  line-height: 1rem;
  background-image: '/assets/pushups.svg?external';
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

progress {
  -webkit-appearance: none;
  appearance: none;
  border-radius: 5px;
  outline: none;
  background: none;
  overflow: hidden;
  border: 1px solid var(--white);
  height: 24px;
  height: 20px;
  width: 100px;
}

progress::-webkit-progress-bar {
  border-radius: 5px;
  outline: none;
  background: none;
}

progress::-moz-progress-bar {
  background-color: var(--dark-orange);
}
progress::-webkit-progress-value {
  background: var(--dark-orange);
}
</style>
