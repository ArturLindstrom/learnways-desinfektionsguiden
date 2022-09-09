<template>
  <div class="bullets">
    <div
      class="bullet"
      v-for="(slide, i) in slides"
      :key="i"
      :class="{ active: i === index }"
      @click="$emit('goToSlide', i)"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  slides: {
    type: Array,
    default: () => [],
  },
  index: {
    type: Number,
    default: 0,
  },
});
</script>

<style scoped lang="scss">
.bullets {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
}
.bullet {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: #dddddd;
  margin: 0.5rem;
  transition: all 0.25s ease-in-out;
  &:hover {
    background: #003340;
    cursor: pointer;
  }
  &.active {
    background: #003340;
  }
}
</style>
