<template>
  <div class="slider" @keyup.right="incrementSlideIndex" @keyup.left="decrementSlideIndex">
    <SlideNew
      :slide="slides[currentSlideIndex]"
      :index="currentSlideIndex"
      ref="slide"
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
import { computed, ref, watch } from 'vue'
import { useMq } from "vue3-mq";
import gsap from 'gsap'
import SlideNew from '@/components/slider/slider2/SlideNew.vue'
import SliderNewButtons from '@/components/slider/slider2/SliderNewButtons.vue'
import SliderNewBullets from '@/components/slider/slider2/SliderNewBullets.vue'

const props = defineProps({
  slides: {
    type: Array,
  },
})

const mq = useMq()

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
const slide = ref(null)

</script>

<style scoped lang='scss'>

  .slider {
    width: 65vw;
    margin: 5rem 0;
    overflow-x: hidden;
    transition: all 0.5s ease;
  }

  @media (max-width: 1440px) {
    .slider {
      width: 80vw;
    }
  }

  @media (max-width: 768px) {
    .slider {
      width: 90vw;
    }
    .slider-buttons {
      transition: all 0.5s ease;
    }
  }
</style>