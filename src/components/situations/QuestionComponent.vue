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
        :key="alternative.alternative"
        :class="
          {
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

  const emit = defineEmits(["answer", "drawLine"]);

  const scrollIntoView = (e) => {
    const scrollTarget = e.target.parentElement.parentElement;
    setTimeout(() => {
      e.target.parentElement.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
      });
    }, 1000)
    
  }

  const isSelected = ref(null);

  const feedback = ref('');

  const getFeedback = (e,i) => {
    emit('drawLine', e)
    isSelected.value = i + 1;
    questionDone.value = true;
    feedback.value = props.question.alternatives[i].feedback;
    emit("answer");
    spreadElements()
    scrollIntoView(e)
  };

  const spreadElements = () => {
    if (mq.current != "xs") {
      gsap.to(".question-container", {
        duration: 0.5,
        x: "-60%",
      });

      gsap.to(".feedback-container", {
        duration: 0.5,
        opacity: 1,
        x: "15%",
      });

      gsap.to(".arrow", {
        duration: 0.4,
        delay: 0.5,
        opacity: 1,
        rotate: 0,
        scale: 1,
      });
    } else {
      gsap.to(".feedback-container", {
        duration: 1,
        opacity: 1,
      });
    }
  }

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
    transform: scale(0);
    transform: rotate(60deg);
    display: flex;
    align-items: center;
    justify-content: center;

  }

  
  .question {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    grid-template-columns: 1fr 1fr;
    place-items: center;
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
    display: flex;
    justify-content: center;
    align-items: center;
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
      width: 100%
    }
    .feedback-container {
      position: static;
      margin-top: 1rem;
      margin-right: 0;
      background: #f4edc9;
      width: 100%;
      padding: 2rem;
    }
}
</style>
