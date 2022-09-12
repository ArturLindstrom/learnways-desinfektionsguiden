<template>
  <div class="arrows-container">
    <button
      class="arrow arrow-left"
      :class="{ disabled: index === 0 }"
      @click="$emit('previousSlide')"
    />
    <button
      class="arrow arrow-right"
      :class="{ disabled: index === slides.length - 1 }"
      @click="$emit('nextSlide')"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
  slides: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.arrows-container {
  z-index: 1;
}
.arrow {
  color: white;
  margin: 0.75rem;
  width: 2.5rem;
  height: 2.5rem;
  background: #0e2d57 no-repeat center center;
  border-radius: 50%;
  border: none;
  transition: all 0.5s ease;
  &:hover {
    cursor: pointer;
    filter: brightness(1.5);
    transition: all 0.5s ease;
  }
}
.arrow-left {
  background-image: url("/assets/home/main/slide/images/arrow-left.svg");
}

.arrow-right {
  background-image: url("/assets/home/main/slide/images/arrow-right.svg");
}

.disabled {
  opacity: 0.25;
  &:hover {
    cursor: default;
  }
}
</style>
