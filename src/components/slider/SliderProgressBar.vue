<template>
  <div class="progress-bar">
    <div class="progress-bar-fill" :style="{ width: progress + '%', opacity: progress + '%',  height: progress/10 + '%'}"></div>
  </div>
</template>

<script setup>

const props = defineProps({
  progress: {
    type: Number,
    default: 0,
  },
})

</script>

<style lang="scss" scoped>

.progress-bar {
  z-index: 1;
  height: 1rem;
  width: 100%;
  background: white;
  margin: 0;
}

.progress-bar-fill {
  height: 10%;
  width: 0%;
  background: #002D5A;
  border-radius: 0.5rem;
  transition: all 0.8s ease-in-out;
}


</style>