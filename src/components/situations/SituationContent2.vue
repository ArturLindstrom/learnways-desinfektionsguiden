<template>
  <div class="content-container">
    <header>
      <img :src="situation.image" >
      <HeadingComponent font-size="small">
        {{situation.heading}}
      </HeadingComponent>
    </header>
    <MainComponent>
      <TransitionGroup @enter="showNextQuestion">
        <QuestionComponent 
          v-for="question in questions"
          :key="question.id" 
          :question="question"
          @answer="incrementQuestionIndex"/>
      </TransitionGroup>
    </MainComponent>
    <!-- <footer class="footer"> -->
      <footer class="footer" v-if="showFooter" >
      <!-- <footer class="footer" v-if="questionIndex > situation.questions.length" > -->
        <img class="thumbs-up-icon" src="src/assets/qicon-last.svg" alt="">
        <SubHeadingComponent class="sub-heading">
          {{situation.end}}
        </SubHeadingComponent>
        <ButtonComponent @click="closeModal">
          Stäng
        </ButtonComponent>
      </footer>
  </div>


</template>

<script setup>
import { useStore } from 'vuex';
import { computed, ref, onMounted } from 'vue';
import HeadingComponent from '../HeadingComponent.vue';
import MainComponent from '../MainComponent.vue';
import QuestionComponent from './QuestionComponent.vue';
import SubHeadingComponent from '../SubHeadingComponent.vue';
import ButtonComponent from '../ButtonComponent.vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const store = useStore();
const situation = store.state.modalContent;

const thumb = () => {
  gsap.from('.thumbs-up-icon', {
    scrollTrigger: {
      trigger: ".footer"
    },
    rotate: 45,
    scale: 0.5,
    opacity: 0,
    duration: 1,
  })
}

const showFooter = ref(false)

const questions = computed(() => {
  return situation.questions.slice(0, questionIndex.value);
})

const questionIndex = ref(1);

const incrementQuestionIndex = () => {
  questionIndex.value++;
  if(questionIndex.value > situation.questions.length){
    showFooter.value = true;
    setTimeout(thumb, 1000)
  }
}

const closeModal = () => {
  store.commit('modalContentClose')
  setTimeout(() => {
    store.commit('modalClose')
  }, 500)
}


const showNextQuestion = (el, done) => {
  gsap.from(el, {
    duration: 1,
    delay: 0.5,
    opacity: 0,
    y: 100,
  })
}

// const scrollTo = () => {
//   gsap.to(container.value, {
//     duration: 0.5,
//     scrollTo: {
//       y: 1000,
//       behavior: 'smooth'
//     }
//   })
// }

</script>

<style scoped lang='scss'>
.content-container {
  display: flex;
  flex-direction: column;
  /* height: 500px; */
  /* overflow: scroll; */
}

header {
  display: flex;
  align-items: center;
  /* height: 20vh; */
  border-radius: 10px 10px 0 0;
  background: #F4EDC9;
  padding: 3rem;
  & > img {
    margin: 1rem;
  }
}

footer{
  height: 100vh;
  background-color: #F4EDC9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .thumbs-up-icon {
    width: 160px;
    height: 160px;
    margin-bottom: 80px;
  }
  .sub-heading {
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 768px) {
  header {
    display: flex;
    flex-direction: column;
  } 

}


</style>