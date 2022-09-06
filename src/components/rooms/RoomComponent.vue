<template>
  <div class="room">
    <header
      :style="{
        backgroundColor: content.header.backgroundColor,
        backgroundImage: 'url(' + content.header.image + ')'
      }" 
      >
      <HeadingComponent fontSize="small" class="room-heading">{{content.header.heading}}</HeadingComponent>
      <!-- <h1>{{content.header.heading}}</h1> -->
      <h3>{{content.header.subHeading}}</h3>
      <div class="dialogs-container">
        <DialogComponent :room=content />
      </div>
    </header>
    <MainComponent>
      <h2 > 
        {{content.main.heading}}
      </h2>
      
      <div class="category-container">
        <div 
          class="category-flex"
          v-for="(slide, i) in content.main.slides"
          :key="i"
        >
          <h3 @click="setCurrentSlide(i)">
            {{content.main.slides[i].title}}
          </h3>
          <span class="underline" :class="'underline' + i"></span>
        </div>
      </div>
      <SliderComponent :slides="content.main.slides[currentSlide].slides" />
    </MainComponent>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed} from 'vue'
import MainComponent from '@/components/layouts/MainComponent.vue';
import SliderComponent from '../slider/SliderComponent.vue';
import gsap from 'gsap';
import DialogComponent from './DialogComponent.vue';
import HeadingComponent from '@/components/headings/HeadingComponent.vue';
import { useStore } from 'vuex'

const store = useStore()

const content = computed(() => {
  return store.state.modalContent
})


const currentSlide = ref(0)
const setCurrentSlide = (i) => {
  currentSlide.value = i
  drawUnderline(currentSlide.value)
}

onMounted(() => {
  drawUnderline(currentSlide.value)
})


const drawUnderline = (i) => {
  gsap.to(`.underline${i}`, {
    duration: 0.5,
    width: '80%',
    ease: 'power3.inOut'
  })
  for (let j = 0; j < content.value.main.slides.length; j++) {
    if (j !== i) {
      gsap.to(`.underline${j}`, {
        duration: 0.5,
        width: '0%',
        ease: 'power3.inOut'
      })
    }
  }
} 


</script>

<style scoped lang='scss'>

header {
  /* max-height: 42.5vw; */
  height: 40rem;
  border-radius: 10px 10px 0px 0px;
  background-repeat: no-repeat;
  background-size: 90%;
  background-position: bottom center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* z-index: -1; */
}

.room-heading {
  text-align: left;
  width: 60%;
  margin: 3rem;
  /* position: absolute; */
}

.underline {
  width: 0%;
  height: 2px;
  margin-top: -1.75rem;
  background-color: #003340;
}

.dialogs-container {
  height: 22.5vw;
  width: 100%;
}


.category-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.category-container h3 {
  margin-bottom: 30px;
  cursor: pointer;
  user-select: none;
}

.category-flex{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media screen and (max-width: 768px) {
  header {
    height: 40vh;
    border-radius: 0;
  }
  .room-heading {
    margin: 1rem;
    width: 70%;
  }

}
  

</style>