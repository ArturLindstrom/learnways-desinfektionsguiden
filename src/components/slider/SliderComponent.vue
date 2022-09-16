<template>
  <div class="carousel-wrapper" :class="{'modal' : modal}" @keyup.right="incrementIndex" @keyup.left="decrementIndex">
    <div class="slider-container">
      <div class="image-container">
        <img :src="slideImage" alt="" class="slide-image" />
      </div>
      <div class="text-and-button-container">
        <Carousel v-model="currentIndex" :items-to-show=1 :transition=500 ref="myCarousel" :mouse-drag="false" >
          <Slide v-for="slide in slides" :key="slide" >
            <div class="text-container">
              <h5 class="slide-heading" :class="{'left-align' : slide.heading.length > 200}">{{ slide.heading }}</h5>
              <p v-for="paragraph in slide.body" :key="paragraph">{{ paragraph }}</p>
              <i v-if="slide.source" class="slide-source">{{slide.source}}</i>
              <p v-if="slide.link">
                <a :href="slide.link">{{slide.linkInner}}</a> {{slide.linkAfter}}
              </p>
            </div>
          </Slide>
        </Carousel>
        <SliderButtons
          class="slider-buttons"
          @previous-slide="decrementIndex"
          @next-slide="incrementIndex"
          :index="currentIndex"
          :slides="slides"
        />
      </div>
    </div>
    <SliderBullets
      class="slider-bullets"
      :slides="slides"
      :index="currentIndex"
      @go-to-slide="setIndex"
    />
  </div>
</template>

<script setup>
  import SliderButtons from '@/components/slider/SliderButtons.vue'
  import SliderBullets from '@/components/slider/SliderBullets.vue'
  import { ref, computed, watch, onMounted } from 'vue'
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import gsap from 'gsap'

  const props = defineProps({
    slides: {
      type: Array,
      required: true
    }, 
    modal: {
      type: Boolean,
    }
  })

  const slides = computed(() => props.slides)
  const modal = computed(() => props.modal)
  
  const myCarousel = ref(null)


  watch(slides, () => {
    currentIndex.value = 0
    fadeImage()
  })
 
  const currentIndex = ref(0)

  const incrementIndex = () => {
    if(currentIndex.value < props.slides.length - 1) {
      currentIndex.value++
      fadeImage()
    }
  }
  const decrementIndex = () => {
    if(currentIndex.value > 0) {
      currentIndex.value--
      fadeImage()
    }
  }
  const setIndex = (index) => {
    currentIndex.value = index
    fadeImage()
  }

  watch(currentIndex, () => {
    // fadeImage()
    myCarousel.value.restartCarousel()
  })

  const slideImage = ref(slides.value[currentIndex.value].image)

  const fadeImage = () => {
    slideImage.value = slides.value[currentIndex.value].image
    gsap.fromTo('.slide-image', {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1,
    })
  }

</script>

<style scoped lang='scss'>

  .carousel-wrapper {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 80%;
    height: calc(0.5 * -30vw);
    margin-bottom: 2rem;
  }

  .modal {
    width: 60vw;
    height: 80vh;
  }
  .slider-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 1rem;
    margin-top: 5rem;
    margin-bottom: 2.5rem;
  }

  .image-container {
    width: 50%;
    .slide-image {
      height: 300px;
      width: 100%;
    }
  }
    
  .text-and-button-container {
    display: flex;
    width: 50%;
    flex-direction: column;
    gap: 1.5rem;
    .slider-buttons {
      display: flex;
    }
  }
  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: left;
    & p::after, h3::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      margin: 0.25em 0;
    }
    .slide-heading {
      font-size: 17px;
      font-weight: 700;
      font-style: normal;
      margin: 0 0 0.5em 0;
      line-height: 1.1;
      color: #003340;
      font-family: 'Nunito', sans-serif;
    }
    .slide-source {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 768px) {
    .carousel-wrapper {
      margin-bottom: 2rem;
      width: 95%;
    }
    .modal {
      width: 100%;
      height: 100%;
    }
    .slider-container {
      flex-direction: column;
      height: 100%;
      gap: 1.5rem;
      margin-top: 0;
      margin-bottom: 0;
    }

    .image-container {
      width: 100%;
      .slide-image {
        height: 250px;
        width: 300px;
      }
    }
    .text-and-button-container {
      width: 100%;
      display: flex;
      gap: 1rem;
    }
    .text-container {
      justify-content: flex-start;
      height: 100%;
      width: 80vw;
    }

    .slider-buttons {
      justify-content: center;
      margin-bottom: 1rem;
    }
  }
</style>