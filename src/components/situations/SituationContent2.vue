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
        <div class="circle">
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
          @offset="animateLine"
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
import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";
import HeadingComponent from "@/components/headings/HeadingComponent.vue";
import MainComponent from "@/components/layouts/MainComponent.vue";
import QuestionComponent from "./QuestionComponent.vue";
import SituationFooter from "@/components/situations/SituationFooter.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import DragAndDrop from "./DragAndDrop.vue";
import { useMq } from "vue3-mq";
gsap.registerPlugin(ScrollTrigger);

const store = useStore();
const situation = store.state.modalContent;

const mq = useMq();

const animateLine = (payload) => {
  const travelDistance = payload.target.parentElement.offsetHeight;
  console.log(travelDistance);
  console.log(questionIndex.value);
  if (questionIndex.value < 3) {
    if(mq.current == 'xs'){
      gsap.to(".vertical-line", {
        height: ` +=${travelDistance + 250}px`,
 
      })
    }
    else{

      gsap.to(".vertical-line", {
        duration: 1.2,
        height: ` +=${travelDistance + 200 -50}px`,
      });
    }
  } else {
    gsap.to(".vertical-line", {
      duration: 1.2,
      height: ` +=${travelDistance + 420}px`,
    });
  }
};

const showFooter = ref(false);
const contentContainer = ref(null);

const questions = computed(() => {
  return situation.questions.slice(0, questionIndex.value);
});

const questionIndex = ref(1);

const incrementQuestionIndex = (situationId) => {
  questionIndex.value++;
  if (questionIndex.value > situation.questions.length) {
    showFooter.value = true;
    store.commit("addCompleted", situationId);
  }
};

const closeModal = () => {
  store.commit("modalContentClose");
  setTimeout(() => {
    store.commit("modalClose");
  }, 500);
};

const showNextQuestion = (el, done) => {
  gsap.from(el, {
    duration: 1,
    delay: 0.5,
    opacity: 0,
    y: 100,
  });

  done();
};
</script>

<style scoped lang="scss">
.circle {
  width: 25px;
  height: 25px;
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
  /* z-index: -99; */
}
.content-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* overflow: scroll; */
}

header {
  display: flex;
  align-items: center;
  /* height: 20vh; */
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
    /* transform: rotate(45deg) scale(0.8);
    opacity: 0;
    transition: all 1s ease-in-out; */
  }
  .sub-heading {
    margin-bottom: 80px;
  }
}

/* 
footer:hover .thumbs-up-icon {
  transform: rotate(0deg) scale(1);
  opacity: 1;
  transition: all 1s ease-in-out;
} */

@media screen and (max-width: 768px) {
  header {
    display: flex;
    flex-direction: column;
  }
  .vertical-line {
  }
}
</style>
