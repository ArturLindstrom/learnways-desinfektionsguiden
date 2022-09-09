<template>
  <div class="slider" @keyup.right="incrementSlideIndex" @keyup.left="decrementSlideIndex">
    <SlideNew 
      :slide="slides[currentSlideIndex]"
      :index="currentSlideIndex"
    />
    <SliderNewButtons
      class="slider-buttons"
      @previous-slide="decrementSlideIndex"
      @next-slide="incrementSlideIndex"
      :index="currentSlideIndex"
      :slides="slides"
    />
    <SliderNewBullets
      class="slider-bullets"
      :slides="slides"
      :index="currentSlideIndex"
      @goToSlide="(i) => goToSlide(i)"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import SlideNew from '@/components/slider/slider2/SlideNew.vue'
import SliderNewButtons from '@/components/slider/slider2/SliderNewButtons.vue'
import SliderNewBullets from '@/components/slider/slider2/SliderNewBullets.vue'

const props = defineProps({
  slides: {
    type: Array,
  },
})

const currentSlideIndex = ref(0)

const goToSlide = (i) => {
  currentSlideIndex.value = i
}

const incrementSlideIndex = () => {
  if(currentSlideIndex.value < props.slides.length - 1) {
    currentSlideIndex.value++
  }
}

const decrementSlideIndex = () => {
  if(currentSlideIndex.value > 0) {
    currentSlideIndex.value--
  }
}

const slides = computed(() => props.slides)

</script>

<style scoped lang='scss'>

  .slider {
    width: 65vw;
    margin: 5rem 0;
  }
  .slider-buttons {
    transform: translate(3.5rem, -1.5rem)
  }

</style>