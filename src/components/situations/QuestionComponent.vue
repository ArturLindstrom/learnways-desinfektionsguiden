<template>
  <div class="question">

    <div class="question-container">
      <p class="description" v-if="question.description.length">
        {{ question.description }}
      </p>
      <SubHeadingComponent class="question-question">
        {{ question.question }}
      </SubHeadingComponent>
      <QuizButton
        v-for="(alternative, i) in question.alternatives"
        @click="(e) => getFeedback(e,i)"
        :isSelected="isSelected"
        :key="alternative.alternative"
        :class="{
          selected: isSelected === i + 1,
          'not-selected': isSelected && isSelected !== i + 1,
        }"
      >
        {{ alternative.alternative }}
      </QuizButton>
    </div>
    <div class="feedback-container">
      <div class="arrow"></div>
      <p>{{ feedback }}</p>
    </div>
  </div>
</template>

<script setup>
import SubHeadingComponent from "@/components/headings/SubHeadingComponent.vue";
import QuizButton from "./QuizButton.vue";
import { ref } from "vue";
import { useMq } from "vue3-mq";
import gsap from "gsap";

const mq = useMq();

const questionDone = ref(false);

const props = defineProps({
  question: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["answer", "offset"]);

const isSelected = ref(null);

const feedback = ref('');

const getFeedback = (e,i) => {
  emit('offset', e)
  isSelected.value = i + 1;
  questionDone.value = true;
  feedback.value = props.question.alternatives[i].feedback;
  emit("answer");
  console.log(isSelected.value);
  if (mq.current != "xs") {
    gsap.to(".question-container", {
      duration: 0.5,
      x: "-60%",
    });

    gsap.to(".feedback-container", {
      duration: 0.5,
      // delay: 0.5,
      opacity: 1,
      x: "15%",
    });

    gsap.to(".arrow", {
      duration: 0.4,
      delay: 0.5,
      opacity: 1,
    });
  } else {
    gsap.to(".feedback-container", {
      duration: 1,
      // delay: 0.5,
      opacity: 1,
    });
  }
};
</script>

<style scoped lang="scss">
  
  .arrow{
    width: 100px;
    height: 100px;
    background: #f4edc9 url(../assets/qicon-1.svg) no-repeat center center;
    border-radius: 50%;
    position: absolute;
    right: 113.4%;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  
  .question {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    /* display: grid; */
    grid-template-columns: 1fr 1fr;
    place-items: center;
    /* grid-gap: 100px; */
    width: 80%;
    margin-bottom: 250px;
  }
  
  .grid {
    display: grid;
  }
  
  .question-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 30rem;
    .question-question {
      margin-bottom: 20px;
    }
  }
  
  .feedback-container {
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
  
  .description {
    margin-bottom: 1rem;
  }
.not-selected {
  color: grey;
  border: #606060 2px solid;
  pointer-events: none;
}

.selected {
  color: white;
  background: #606060;
  border: #606060 2px solid;
  pointer-events: none;
}

@media screen and (max-width: 768px) {
  .question {
    flex-direction: column;
    margin-bottom: 100px;
  }
  .feedback-container {
    position: static;
    margin-top: 1rem;
    margin-right: 0;
    /* opacity: 1; */
  }

}


</style>
