<template>
  <vueper-slide v-for="(slide, i ) in slides" :key="i">
    <!-- <template #content> -->
      <div class="slide-content">
        <img :src="slide.image" alt="" class="content-img">
        <div class="text-container">
          <h3 class="slide-heading">{{ slide.heading }}</h3>
          <p v-for="(content, i) in slide.body" :key="i">{{ content }}</p>
        </div>
      </div>
    <!-- </template> -->
  </vueper-slide>
</template>

<script setup>
import { VueperSlide } from 'vueperslides'

const props = defineProps({
  slides: {
    type: Array,
    default: () => [],
  },
})

</script>

<style lang="scss" scoped>


.vueperslide {
  display: flex;
  align-items: center;
  & * {
    user-select: text;
    }
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

p {
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 17px;
  line-height: 1.3;
  margin: 0.5em 0;
  color: #000000;
}
.content-img{
  max-width: 400px;
  max-height: 300px;
  width: 40%;
}



</style>