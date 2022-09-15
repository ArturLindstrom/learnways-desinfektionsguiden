<template>
  <div class="content-container" ref="contentContainer">
    <header>
      <img :src="situation.image" />
      <HeadingComponent font-size="small">
        {{ situation.heading }}
      </HeadingComponent>
    </header>
    <MainComponent v-if="situation.questions" class="main">
      <div class="vertical-line">
        <div class="circle" ref="circle">
          <img
            src="/assets/scroll-icon-small.svg"
            alt=""
            class="scroll-icon"
            v-if="questionIndex > 1 && questionIndex < 4"
          />
        </div>
      </div>
      <TransitionGroup @enter="showNextQuestion">
        <QuestionComponent
          v-for="question in questions"
          :key="question.id"
          class="question"
          :question="question"
          @answer="incrementQuestionIndex(situation.id)"
          @drawLine="animateLine"
        />
      </TransitionGroup>
    </MainComponent>
    <MainComponent v-else>
      <DragAndDrop
        :content="situation.dragAndDrop"
        :id="situation.id"
        @done="showFooter = true"
      >
      </DragAndDrop>
    </MainComponent>
    <SituationFooter v-if="showFooter" />
  </div>
</template>

<script setup>
  import HeadingComponent from "@/components/headings/HeadingComponent.vue";
  import MainComponent from "@/components/layouts/MainComponent.vue";
  import QuestionComponent from "./QuestionComponent.vue";
  import DragAndDrop from "./DragAndDrop.vue";
  import SituationFooter from "@/components/situations/SituationFooter.vue";
  import { useStore } from "vuex";
  import { computed, ref, onMounted } from "vue";
  import gsap from "gsap";
  import { useMq } from "vue3-mq";

const store = useStore();

const situation = store.state.modalContent;

const mq = useMq();

const showFooter = ref(false);

// a computed property that returns all the answered questions as well as the next question
const questions = computed(() => situation.questions.slice(0, questionIndex.value));

const questionIndex = ref(1);

const incrementQuestionIndex = (situationId) => {
  questionIndex.value++;
  if (questionIndex.value > situation.questions.length) {
    showFooter.value = true;
    store.commit("addCompletedSituation", situationId);
  }
};


const showNextQuestion = (el, done) => {
  gsap.from(el, {
    duration: 1,
    delay: 0.5,
    opacity: 0,
    y: 100,
  });
};

const animateLine = (payload) => {
  //measures the height of each question component
  const travelDistance = payload.target.parentElement.offsetHeight;
  
  if (questionIndex.value < 3) {
    if(mq.current == 'xs'){
      gsap.to(".vertical-line", {
        height: ` +=${travelDistance + 250}px`,
 
      })
    } else {

      gsap.to(".vertical-line", {
        duration: 1.2,
        height: ` +=${travelDistance + 150}px`,
      });
    }
  } else {
    gsap.to(".vertical-line", {
      duration: 1.2,
      height: ` +=${travelDistance + 450}px`,
    });
  }
};

const closeModal = () => {
  store.commit("modalContentClose");
  setTimeout(() => {
    store.commit("modalClose");
  }, 500);
};

</script>

<style scoped lang="scss">
  .circle {
    width: 30px;
    height: 30px;
    background-color: #f4edc9;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main {
    position: relative;
  }
  .vertical-line {
    height: 70px;
    position: absolute;
    left: 50%;
    top: -80px;
    width: 10px;
    background: #f4edc9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .content-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  header {
    display: flex;
    align-items: center;
    border-radius: 10px 10px 0 0;
    background: #f4edc9;
    padding: 3rem;
    & > img {
      margin: 1rem;
    }
  }

  footer {
    height: 100vh;
    background-color: #f4edc9;
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
