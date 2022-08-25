<template>
  <div>
    <header>
      <!-- <img :src="category.image" > -->
      <HeadingComponent>
        {{situation.heading}}
      </HeadingComponent>
    </header>
    <MainComponent>
      
      <div class="vertical-line"></div>
      <div class="question" 
        v-for="(question, i) in questions"
        :key="i"
      >
        <div class="heading-container" 
        :class="{left: i+1 < questionIndex}">
          <p>
            {{question.description}}
          </p>
          <SubHeadingComponent>
            {{question.question}}
          </SubHeadingComponent>
        </div>
        <div 
          class="alternative-holder"
          v-for="answer in question.alternatives"
          :key="answer"
          :class="{grid: i+1 < questionIndex}"
        >
          <QuizButton
            class="quiz-button"
            :class="{selected : answer === answeredQuestion.find(a => a === answer)}"
            @click="incrementQuestionIndex(answer, question, situation)"
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
import { useStore } from 'vuex';

const props = defineProps({
  situation: {
    type: Object,
  },
  category: {
    type: Object,
  }
})


const store = useStore()

const closeModal = () => {
  store.commit('modalClose')
}

const situation = computed(()=> {
  return store.state.modalContent
})


const answeredQuestion = ref([])
const questionIndex = ref(1)


const incrementQuestionIndex = (answer, question, situation) => {
  questionIndex.value++
  answeredQuestion.value.push(answer)
  console.log(situation.id)
  if (answeredQuestion.value.length === 3) {
    store.commit('addCompleted' , situation.id)
  }
  



  gsap.from('.alternative-holder', {
    duration: 0.5,
    scale: 0.5,
    opacity: 0.5,
  })
  
  




  // gsap.to('.vertical-line',
    
  
  // {
  //   duration: 2,
  //   scaleY: 0.5,
  //   transformOrigin: '100% 0%'

  
  // })
}


const questions = computed(() => {
  return store.state.modalContent.questions.slice(0, questionIndex.value)
  }
)




</script>

<style scoped lang='scss'>
.vertical-line {
  width: 4px;
  height: 100%;
  margin-top: 200px;
  background-color: #F4EDC9;;
  transform: scaleY(0);
    position: absolute;
}

.question {
  display: flex;
  flex-direction: column;
  align-items:center;
  margin: 9rem 0;
}

.alternative-holder {
  display: flex;
  align-items: center;
  justify-content: center;
  /* display: grid; */
  place-items: center;
  grid-template-columns: 30rem 30rem;
  grid-column: 0 / 1;
  font-size: 17px;
  gap: 100px;
}

.heading-container {
  width: 50%;


}

.left {
  align-self: flex-start;
  /* margin-left: 0px */
}
.grid {
  display: grid;
  gap: 100px red;
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

p{
  font-size: 17px;
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

</style>