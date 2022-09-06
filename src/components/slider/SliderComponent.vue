<template>
  <VueperSlides
    ref="slide"
    @slide="sliderIndex"
    :arrows="false"
    :infinite="false"
    :draggable="false"
    :touchable="true"
    :fixed-height=true
    class="no-shadow"
    fade
    :bullets="false"
    :disableArrowsOnEdges="true"
    >
    <VueperSlide v-for="(slide, i ) in props.slides" :key="i">
      <template #content>
        <SliderContent :slide="slide" :index="i"/>
      </template>
    </VueperSlide>
  </VueperSlides>
  <!-- <SliderProgressBar :progress="progress" /> -->
  <SliderButtonsComponent
    class="slider-buttons"
    @previous-slide="$refs.slide.previous()"
    @next-slide="$refs.slide.next()"
    :slider-index="index"
    :slides="props.slides"
  />
  <SliderBullets
    class="slider-bullets" 
    :slides="props.slides"
    :index="index"
    @goToSlide="(i) => $refs.slide.goToSlide(i)"
  />
</template>

<script setup>
import { ref, computed } from 'vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
// import MainSlides from '@/assets/home/main/slide/slide.json';
import SliderContent from './SliderContent.vue';
import SliderButtonsComponent from '@/components/slider/SliderButtonsComponent.vue';
// import SliderProgressBar from './SliderProgressBar.vue';
import SliderBullets from './SliderBullets.vue';

const props = defineProps(
  {
    slides: {
      type: Array,
      default: () => []
    }
  }
)



// const slides = ref(MainSlides)
const index = ref(0)
const sliderIndex = (event) => {
  index.value = event.currentSlide.index;
}
// const progress = computed(() => (index.value + 1) / slides.value.length * 100)

</script>

<style lang="scss" scoped>

.slider-bullets {
  margin: 0.5rem 0 2rem 0;
}
.vueperslides {
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 0rem;
}

.vueperslides--fixed-height {
  /* height: 50vh; */
}

.vueperslide--fade, .vueperslide__image {
  transition-delay: 0.5s;
}

@media (max-width: 768px) {
  .slider-buttons {
    margin-top: 3rem;
  }
  .vueperslides--fixed-height {
  height: 66vh;
}
}

</style>