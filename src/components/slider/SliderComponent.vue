<template>
  <SliderBullets
    class="slider-bullets"
    :slides="props.slides"
    :index="index"
    @goToSlide="(i) => $refs.slide.goToSlide(i)"
  />
  <VueperSlides
    ref="slide"
    @slide="sliderIndex"
    @touchstart="showControls"
    @touchend="hideControls"
    :arrows="true"
    :infinite="false"
    :draggable="false"
    :touchable="true"
    :fixed-height="true"
    class="no-shadow"
    fade
    :bullets="false"
    :disableArrowsOnEdges="true"
  >
    <VueperSlide v-for="(slide, i) in props.slides" :key="i">
      <template #content>
        <SliderContent :slide="slide" :index="i" />
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

</template>

<script setup>
import { ref, computed } from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import SliderContent from "./SliderContent.vue";
import SliderButtonsComponent from "@/components/slider/SliderButtonsComponent.vue";
import SliderBullets from "./SliderBullets.vue";
import gsap from 'gsap'

const props = defineProps({
  slides: {
    type: Array,
    default: () => [],
  },
});

const showControls = () => {
  gsap.to(".slider-buttons", {
    duration: 0.5,
    y: -100,
    opacity: 1,
  });
};

const hideControls = () => {
  gsap.to(".slider-buttons", {
    duration: 0.5,
    y: 0,
    opacity: 0,
    delay: 1,
  });
}

// const slides = ref(MainSlides)
const index = ref(0);
const sliderIndex = (event) => {
  index.value = event.currentSlide.index;
  showControls();
};
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
  height: calc(20rem + 4vw);
}

/* .vueperslide--fade,
.vueperslide__image {
  transition-delay: 0.5s;
} */

@media (max-width: 768px) {
  .slider-buttons {
    margin-top: 3rem;
  }
  .vueperslides--fixed-height {
    height: calc(25rem + 55vw);
    /* height: 68vh; */
    /* height: calc(100vw + 12.5rem); */
  }

  .slider-buttons {
    position: fixed;
    opacity: 0;
    & :hover {
      cursor: pointer;
    }
  }
}
</style>
