<template>
<!-- The Modal -->
<div class="modal" @click.self="closeModal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="close-container" @click="closeModal">
      <p>Stäng</p>
      <img class="close-icon" src="src/assets/close.svg">
    </div>
    <header
      :style="{
        backgroundColor: props.room.header.backgroundColor,
        backgroundImage: 'url(' + props.room.header.image + ')'
      }" 
      >
      <h1>{{props.room.header.heading}}</h1>
      <h3>{{props.room.header.subHeading}}</h3>
    </header>
    <MainComponent>
      <h2 > 
        {{props.room.main.heading}}
      </h2>
      
      <div class="category-container">
        <div class="category-flex" v-for="(slide, i) in props.room.main.slides">
          <h3  @click="setCurrentSlide(i)">
            {{props.room.main.slides[i].title}}
          </h3>
          <span class="underline"></span>
        </div>
      </div>
      <SliderComponent :slides="props.room.main.slides[currentSlide].slides">
      </SliderComponent>
    </MainComponent>
  </div>

</div>


</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import MainComponent from '../MainComponent.vue';
import SliderComponent from '../slider/SliderComponent.vue';
import gsap from 'gsap';

const emit = defineEmits(['closeModal'])


const closeModal = () => {
  gsap.to('.modal-content', {
    duration: 1,
    y: '100%',
    onComplete: () => emit('closeModal')
  })
}

onMounted(() => {
  gsap.from('.modal-content', {
    duration: 1,
    y: '100%',
    opacity: 1
  });

  gsap.from('.modal', {
    duration: 0.5,
    opacity: 0
  })
})





const props = defineProps({
  room: {
    type: Object,
  },
})

const currentSlide = ref(0)
const setCurrentSlide = (i) => {
  currentSlide.value = i
  console.log(currentSlide.value)
}


</script>

<style scoped lang='scss'>

.modal {
  /* display: none; Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; 
  padding-top: 2rem;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.5); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  border-radius: 10px;
  margin: auto;
  border: 1px solid #888;
  min-height: 50vh;
  width: 90%;
}

header {
  height: 75vh;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: 90%;
  background-position: bottom center;
  padding: 2rem;
}

h1 {
  text-align: left;
  width: 60%;
}

/* The Close Button */
.close-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  position: fixed;
  top: 2rem;
  right: 7%;
  font-weight: bold;
}

.category-container{
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

.close-icon{
  transition: all 0.25s ease-in-out;
}

.close-icon:hover{
  transform: rotate(90deg);
  transition: all 0.25s ease-in-out;
  cursor: pointer;
}


</style>