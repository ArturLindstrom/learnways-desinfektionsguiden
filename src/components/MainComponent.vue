<template>
  <div class="main">
    <h2>Vad kommer du att få lära dig?</h2>
    <SliderComponent />
    <slot></slot>    
  </div>
</template>

<script setup>

import SliderComponent from '@/components/slider/SliderComponent.vue';


</script>

<style lang="scss" scoped>

.main {
  display: flex;
  padding: 5rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 60vh;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.1;
}

</style>