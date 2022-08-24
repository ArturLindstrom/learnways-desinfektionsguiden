<template>
  <div>
    <header>
      <!-- <img :src="category.image" > -->
      <HeadingComponent>
        {{situation.heading}}
      </HeadingComponent>
    </header>
    <MainComponent>
      <div class="question" 
        v-for="(question, i) in questions"
        :key="i"
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

const store = useStore()


const closeModal = () => {
  store.commit('modalClose')
}

const situation = computed(()=> {
  return store.state.modalContent
})


const answeredQuestion = ref([{}])
const questionIndex = ref(1)

const isActive = ref(false)

const incrementQuestionIndex = (answer) => {
  questionIndex.value++
  answeredQuestion.value.push(answer)
}

const questions = computed(() => {
  return store.state.modalContent.questions.slice(0, questionIndex.value)
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


</script>

<style scoped lang='scss'>
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

</style>