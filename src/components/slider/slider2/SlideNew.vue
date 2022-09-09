<template>
  <div class="slide-content" >
    <div class="image-container">
      <img :src="slide.image" alt="" class="slide-image" />
    </div>
    <div class="text-container">
      <h3 class="slide-heading">{{ slide.heading }}</h3>
      <p v-for="paragraph in slide.body" :key="paragraph">{{ paragraph }}</p>
      <i v-if="slide.source" class="slide-source">{{slide.source}}</i>
    </div>
    
  </div>
</template>

<script setup>
  import { ref, computed, watch, onMounted } from "vue";
  import { gsap } from "gsap";

  const props = defineProps({
    slide: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: Number,
      default: 0,
    },
  })
  const slide = computed(() => props.slide)
  const index = computed(() => props.index)

  watch(index, (newVal, oldVal) => {
    if(newVal > oldVal){
      gsap.from('.text-container', {
        x: '100%',
        duration: 0.5,
        opacity: 0,
      });
    } else {
      gsap.from('.text-container', {
        x: '-50%',
        duration: 0.5,
        opacity: 0,
      });
    }
  });




</script>

<style scoped lang='scss'>
  .slide-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;

  }
  .image-container {
    z-index: 1;
  }
  .slide-image {
    height: 300px;
    width: 90%;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    & p::after, h3::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      margin: 0.3em 0;
    }
    .slide-heading {
      font-size: 17px;
      font-family: 'Nunito', sans-serif;
      font-weight: 700;
      font-style: normal;
      margin: 0 0 0.5em 0;
      line-height: 1.1;
      color: #003340;
      }
    .slide-source {
      font-size: 0.75rem;
    }
  }
</style>