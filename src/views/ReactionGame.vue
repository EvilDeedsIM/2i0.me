<template>
  <button class="btn start-btn" @click="startGame">Start</button>
  <div class="container">
    <div class="hero" :style="heroComputedPosition">H</div>
    <enemy :style="enemyComputedPosition"></enemy>
  </div>
</template>

<script>
import Enemy from '../components/reaction_game_parts/Enemy.vue';

export default {
  inheritAttrs: false,
  data() {
    return {
      heroPos: {
        x: 50,
        y: 50,
      },
      enemyPos: {
        x: -10,
        y: 50,
      },
      interval: null,
    };
  },
  mounted() {
    window.addEventListener('keydown', ({ key }) => {
      if (key === 'w' && this.heroPos.y > 4) {
        this.heroPos.y -= 2;
      }
      if (key === 's' && this.heroPos.y < 96) {
        this.heroPos.y += 2;
      }
    });
  },
  methods: {
    startGame() {
      this.interval = setInterval(() => {
        this.enemyPos.x++;
      }, 10);
    },
  },
  computed: {
    heroComputedPosition() {
      return `left: ${this.heroPos.x}%; top: ${this.heroPos.y}%`;
    },
    enemyComputedPosition() {
      let enemy = document.querySelector('.enemy');

      let hero = document.querySelector('.hero');

      if (enemy) {
        let enemyLeft = enemy.offsetLeft;
        let enemyTop = enemy.offsetTop;
        let enemyWidth = enemy.offsetWidth;

        let heroLeft = hero.offsetLeft;
        let heroTop = hero.offsetTop;
        let heroWidth = hero.offsetWidth;

        let vertical =
          enemyLeft + enemyWidth / 2 + 1 >= heroLeft - heroWidth / 2;

        if (
          (vertical && enemyTop < heroTop + heroWidth && enemyTop > heroTop) ||
          (vertical &&
            enemyTop + 10 < heroTop + heroWidth &&
            enemyTop + 10 > heroTop)
        ) {
          clearInterval(this.interval);
        }

        if (enemyLeft > 610) {
          clearInterval(this.interval);
        }

        // if
      }
      return `left: ${this.enemyPos.x}px; top: ${this.enemyPos.y}%`;
    },
  },
  components: {
    Enemy,
  },
};
</script>

<style scoped>
.btn {
  width: 602px;
  height: 50px;
}
.container {
  position: relative;
  width: 600px;
  height: 400px;
  border: 1px solid var(--white);
  box-sizing: content-box;
  /* overflow: hidden; */
}

.hero {
  position: absolute;
  transform: translate(-50%, -50%);

  width: 20px;
  height: 20px;
  background-color: var(--blue);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: 15px;
}
</style>
