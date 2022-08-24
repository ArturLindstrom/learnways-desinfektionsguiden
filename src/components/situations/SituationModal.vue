<template>
<!-- The Modal -->
<div class="modal" @click.self="closeModal">

  <!-- Modal content -->
  <div class="modal-content">
    <header>
      <img :src="category.image" >
      <HeadingComponent>
        {{situation.heading}}
      </HeadingComponent>
    </header>
    <MainComponent>
      <div class="question" 
        v-for="(question, i) in questions"
      >
        <p>
          {{question.description}}
        </p>
        <SubHeadingComponent>
          {{question.question}}
        </SubHeadingComponent>
        <div 
          class="alternative-holder"
          v-for="answer in question.alternatives"
          :key="answer"
          :class="{grid: i+1 < questionIndex}"
        >
          <QuizButton
            class="quiz-button"
            :class="{selected : answer === answeredQuestion.find(a => a === answer)}"
            @click="incrementQuestionIndex(answer)"
          >
            {{answer.alternative}}
          </QuizButton>
          <div class="feedback-holder" v-if="i < questionIndex && answeredQuestion.find(a => a === answer)">
            <p class="feedback">{{answer.feedback}}</p>
          </div>
        </div>
      </div>
    </MainComponent>
    <footer v-if="questionIndex === 4">
      <HeadingComponent>{{situation.end}}</HeadingComponent>
      <ButtonComponent @click="closeModal">
        Stäng
      </ButtonComponent>
    </footer>
  <div class="close-container" @click="closeModal">
    <p>Stäng</p>
      <img class="close-icon" src="src/assets/close.svg">
  </div>
   
  </div>

</div>


</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import gsap from 'gsap';
import HeadingComponent from '../HeadingComponent.vue';
import SubHeadingComponent from '../SubHeadingComponent.vue';
import MainComponent from '../MainComponent.vue';
import QuizButton from './QuizButton.vue';
import ButtonComponent from '../ButtonComponent.vue';

const emit = defineEmits(['closeModal'])
const situation = props.situation
const category = props.category

const answeredQuestion = ref([{}])
const questionIndex = ref(1)

const isActive = ref(false)

const incrementQuestionIndex = (answer) => {
  questionIndex.value++
  answeredQuestion.value.push(answer)
}



const questions = computed(() => {
  return situation.questions.slice(0, questionIndex.value)
  }
)



const props = defineProps({
  situation: {
    type: Object,
  },
  category: {
    type: Object,
  }
})

const closeModal = () => {
  gsap.to('.modal-content', {
    duration: 0.5,
    y: '100%',
    onComplete: () => emit('closeModal')
  })
  gsap.to('.modal', {
    opacity: 0,
    duration: 0.5,
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


</script>

<style scoped lang='scss'>

.modal {
  position: fixed;
  z-index: 1; 
  padding-top: 3rem;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto;
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.5); /* Black w/ opacity */
}

.modal-content {
  background-color: #fefefe;
  border-radius: 10px;
  margin: auto;
  border: 1px solid #888;
  min-height: 50vh;
  width: 85%;
}

.question {
  display: flex;
  flex-direction: column;
  align-items:center;
  margin-top: 7.5rem;
}

.alternative-holder{
  display: flex;
  place-items: center;
  grid-template-columns: 30rem 30rem;
  grid-column: 0 / 1;
}

.grid {
  display: grid;
}

.grid > .quiz-button{
  color: grey;
  pointer-events: none;
  border: #606060 2px solid;
}

.grid > .selected{
     background-color:#606060;
     color: white;
}
.feedback-holder{
  grid-column: 2 / 3;
  
}

header {
  display: flex;
  align-items: center;
  height: 20vh;
  border-radius: 10px;
  background: #F4EDC9;
  padding: 3rem;
  & > img {
    margin: 1rem;
  }
}

footer {
  display: grid;
  place-items: center;
  background: #F4EDC9;
  padding: 3rem;
  height: 30vh;
}


.close-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  position: fixed;
  top: 2rem;
  right: 2.5%;
  font-weight: bold;
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