<template>
  <SliderProgressBar :progress="progress" />
  <vueper-slides
  ref="slide"
  @slide="sliderIndex"
  :arrows="false"
  :infinite="false"
  :draggable="false"
  :touchable="false"
  fixed-height="50vh"
  class="no-shadow"
  fade
  :bullets="false"
  :disableArrowsOnEdges="true"
  >
  <!-- <SliderContent :slides="slides"/> -->
  <vueper-slide v-for="(slide, i ) in slides" :key="i">
    <template #content>
      <div class="slide-content">
        <img :src="slide.image" alt="" class="content-img">
        <div class="text-container">
          <h3 class="slide-heading">{{ slide.heading }}</h3>
          <p v-for="(content, i) in slide.body" :key="i">{{ content }}</p>
        </div>
      </div>
    </template>
  </vueper-slide>
</vueper-slides>
<SliderButtonsComponent
  class="slider-buttons"
  @previous-slide="$refs.slide.previous()"
  @next-slide="$refs.slide.next()"
  :slider-index="index"
  :slides="slides"
/>
<div class="bullets">
  <div 
    class="bullet"
    v-for="(slide, i) in slides"
    :key="i"
    :class="{ 'active': i === index }"
    @click="$refs.slide.goToSlide(i)">
  </div>
</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import MainSlides from '@/assets/home/main/slide/slide.json';
// import SliderContent from './SliderContent.vue';
import SliderButtonsComponent from '@/components/slider/SliderButtonsComponent.vue';
import SliderProgressBar from './SliderProgressBar.vue';

const slides = ref(MainSlides)
const index = ref(0)
const sliderIndex = (event) => {
  index.value = event.currentSlide.index;
}
const progress = computed(() => (index.value + 1) / slides.value.length * 100)






</script>

<style lang="scss" scoped>

.vueperslides {
  width: 100%;
}

/* 
.slide-heading {
  font-size: 17px;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-style: normal;
  margin: 0 0 0.5em 0;
  line-height: 1.1;
  color: #003340;
  width: 100%;
}

.vueperslide {
  display: flex;
  align-items: center;
}

.vueperslide * {user-select: text;}

.slide-content{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 0;
  z-index: 1;
}

.text-container{
  text-align: left;
  width: 40%;
}
.content-img{
  max-width: 400px;
  max-height: 300px;
  width: 40%;
}


p {
 font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 17px;
    line-height: 1.3;
    margin: 0.5em 0;
    color: #000000;
} */

.slider-buttons {
  position: relative;
  top: -2.5rem;
  right: -4.5rem;
}

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