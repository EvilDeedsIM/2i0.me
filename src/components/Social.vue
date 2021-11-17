<template>
  <div class="social">
    <div class="telegram"><Icon icon="logos:telegram" /></div>
    <div class="twitter"><Icon icon="logos:twitter" /></div>
    <div class="youtube"><Icon icon="logos:youtube-icon" /></div>
    <div class="gmail"><Icon icon="logos:google-gmail" /></div>
  </div>
  <div class="made-with-love">
    Made with&nbsp;<Icon
      icon="ci:heart-fill"
      class="heart"
    />&nbsp;on&nbsp;<Icon icon="logos:vue" />
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
// import { components } from 'vue';
</script>

<style scoped>
.social {
  position: absolute;
  height: 2rem;
  bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.telegram {
  font-size: 2rem;
}

.twitter {
  font-size: 1.8rem;
}

.youtube {
  font-size: 1.7rem;
}

.gmail {
  font-size: 1.5rem;
}

.made-with-love {
  position: absolute;
  height: 2rem;
  bottom: 0;
  display: flex;
  align-items: center;
}

.heart {
  color: var(--red);
  font-size: 1.2rem;
  line-height: 1rem;
  margin: 0;
}
</style>
