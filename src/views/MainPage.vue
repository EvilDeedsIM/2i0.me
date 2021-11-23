<template>
  <div class="container">
    <div class="logo-div">
      <div class="logo"><strong>2i0</strong></div>
      <div class="logo-desc">Improve&nbsp;Yourself</div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.line {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 1px;
  width: 100vw;
  background-color: #fff;
}
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.logo-div {
  position: relative;
  margin-bottom: 4rem;
}

.logo {
  opacity: 1;
  font-size: 2rem;
}

.logo strong {
  font-size: 13rem;
  font-weight: 900;
  line-height: 13rem;
}

.logo-desc {
  position: absolute;
  bottom: 1.35rem;
  word-spacing: 4px;
  letter-spacing: 3px;
  text-shadow: 0 -1px 1px var(--light-gray1);
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.8rem;
  font-weight: 900;
  color: var(--dark-gray1);
}
</style>
