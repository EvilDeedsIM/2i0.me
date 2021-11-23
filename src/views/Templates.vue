<template>
  <div class="wrapper">
    <Template></Template>
    <Template></Template>
    <Template></Template>
    <Template></Template>
  </div>
</template>

<script setup>
import Template from '../components/Template.vue';
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}


</style>
