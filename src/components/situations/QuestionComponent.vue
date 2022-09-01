<template>
  <div class="question" >
    <div class="question-container">
      <p class="description">
        {{question.description}}
      </p>
      <SubHeadingComponent class="question-question">
        {{question.question}}
      </SubHeadingComponent>
      <QuizButton v-for="(alternative, i) in question.alternatives"
      @click="getFeedback(i)"
      :isSelected="isSelected"
      :class="{'selected': isSelected === i+1, 'not-selected': isSelected && isSelected !== i+1}"
      >
        {{alternative.alternative}}
      </QuizButton>
    </div>
    <div class="feedback-container">
      <p>{{feedback}}</p>
    </div>
  </div>
</template>

<script setup>
import SubHeadingComponent from '../SubHeadingComponent.vue';
import QuizButton from './QuizButton.vue';
import { ref } from 'vue'
import gsap from 'gsap';


const questionDone = ref(false);

  const props = defineProps({
    question: {
      type: Object,
      required: true
    }
  })


  const emit = defineEmits(['answer'])

  const isSelected = ref(null)

  const feedback = ref('')

  const getFeedback = (i) => {
    isSelected.value = i+1
    questionDone.value = true
    feedback.value = props.question.alternatives[i].feedback
    emit('answer')
    console.log(isSelected.value)
    gsap.to('.question-container', {
      duration: 1,
      // display:'grid',
      x: '-50%',
    })

    gsap.to('.feedback-container', {
      duration: 1,
      // delay: 0.5,
      opacity: 1,
      x: '15%',
    })

  }

  

</script>

<style scoped lang='scss'>
.question{
  display: flex;
  flex-direction: column;
  align-items: center;

  /* display: grid; */
  grid-template-columns: 1fr 1fr;
  place-items: center;
  /* grid-gap: 100px; */
  width: 80%;
  margin-bottom: 200px;
}

.grid {
  display: grid;
}

.question-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 30rem;
  .question-question{
  margin-bottom: 20px;
}

}

.feedback-container{
  /* padding-top: 3rem; */
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  max-width: 400px;
  margin-top: -150px;
  margin-right: -500px;
  opacity: 0;
}


.description{
  margin-bottom: 1rem;
}


.not-selected{
  color: grey;
  border: #606060 2px solid;
  pointer-events: none;
}

.selected{
  color: white;
  background: #606060;
  border: #606060 2px solid;
  pointer-events: none;
}

</style>