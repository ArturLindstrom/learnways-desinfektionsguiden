<template>
  <div class="main">
    <h2>Vad kommer du att få lära dig?</h2>
    <vueper-slides 
      ref="slide"
      :arrows="false"
      :infinite="false"
      draggable="false"
      :touchable="false"
      fixed-height="60vh"
      class="no-shadow"
      fade
      bulletsOutsideW
      disableArrowsOnEdges="true"
    >
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
      <div class="arrows">
        <button class="arrow arrow-left" @click="$refs.slide.previous()"></button>
        <button class="arrow arrow-right" @click="$refs.slide.next()"></button>
      </div>
  </div>
</template>

<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import slides from '@/assets/home/main/slide/slide.json';





</script>

<style lang="scss" scoped>

.main {
  display: flex;
  padding: 5rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 80vh;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.content-img{
  width: 400px;
  height: 300px;
}

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

.slide-content{
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  width: 100%;
  margin: 0;
}

.vueperslides {
  width: 70%;
}

.vueperslide{
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.text-container{
 width: 50%;
 text-align: left;

}
p{
 font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 17px;
    line-height: 1.3;
    margin: 0.5em 0;
    color: #000000;
}


.arrows {
  position: absolute;
}
.arrow {
  color: white;
  margin: 0.75rem;
  width: 2.5rem;
  height: 2.5rem;
  background: #0E2D57 no-repeat center center;
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
    background-image: url('../assets/home/main/slide/images/arrow-left.svg');
}

.arrow-right {
    background-image: url('../assets/home/main/slide/images/arrow-right.svg');
}

</style>